// url
const FREENOM = 'https://my.freenom.com'
const CLIENT_AREA = `${FREENOM}/clientarea.php`
const LOGIN_URL = `${FREENOM}/dologin.php`
const DOMAIN_STATUS_URL = `${FREENOM}/domains.php?a=renewals`
const RENEW_REFERER_URL = `${FREENOM}/domains.php?a=renewdomain`
const RENEW_DOMAIN_URL = `${FREENOM}/domains.php?submitrenewals=true`

// default headers
const headers = {
   'content-type': 'application/x-www-form-urlencoded',
   'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/103.0.5060.134 Safari/537.36',
}

async function login() {
   headers['referer'] = CLIENT_AREA
   const resp = await fetch(LOGIN_URL, {
      method: 'POST',
      body: `username=${SECRET_USERNAME}&password=${SECRET_PASSWORD}`,
      headers: headers,
      redirect: 'manual',
   })
   const setCookie = resp.headers
      .get('set-cookie')
      .replace(/([Hh]ttp[Oo]nly(,|)|([Pp]ath|expires|Max-Age)=.*?;)/g, '')
      .replace('WHMCSUser=deleted;', '')
      .replace(/\s+/g, '')
      .split(';')
      .reduce((pre, cur) => {
         const [k, v] = cur.split('=')
         if (k && v) pre[k] = v
         return pre
      }, {})
   const cookie = []
   for (const key in setCookie) {
      cookie.push(`${key}=${setCookie[key]}`)
   }
   return cookie.join(';')
}

async function getDomainInfo() {
   const res = { token: null, domains: {} }
   // request
   headers['referer'] = CLIENT_AREA
   const resp = await fetch(DOMAIN_STATUS_URL, { headers: headers })
   const html = await resp.text()
   // login check
   if (/<a href="logout.php">Logout<\/a>/i.test(html) == false) {
      console.error('get login status failed')
      return res
   }
   // get page token
   const tokenMatch = /name="token" value="(.*?)"/i.exec(html)
   if (tokenMatch.index == -1) {
      console.error('get page token failed')
      return res
   }
   res.token = tokenMatch[1]
   // get domains
   for (const item of html.match(/<tr>[^&]+&domain=.*?<\/tr>/g)) {
      const domain = /<tr><td>(.*?)<\/td><td>[^<]+<\/td><td>/i.exec(item)[1]
      const days = /<span[^>]+>(\d+).Days<\/span>/i.exec(item)[1]
      const renewalId = /[^&]+&domain=(\d+?)"/i.exec(item)[1]
      res.domains[domain] = { days, renewalId }
   }
   return res
}

async function renewDomains(info) {
   const token = info.token
   const results = [];
   const domains = info.domains;
   for (const domain in domains) {
      const domainInfo = domains[domain];
      const days = parseInt(domainInfo.days)
      if (days >= 14) {
         console.log(`域名 ${domain} 还有 ${days} 天续期`)
         continue;
      }
      const renewalId = domainInfo.renewalId
      headers['referer'] = `${RENEW_REFERER_URL}&domain=${renewalId}`
      const resp = await fetch(RENEW_DOMAIN_URL, {
         method: 'POST',
         body: `token=${token}&renewalid=${renewalId}&renewalperiod[${renewalId}]=12M&paymentmethod=credit`,
         headers: headers,
      })
      const html = await resp.text()
      const success = /Order Confirmation/i.test(html)
      console.log(
         domain,
         success ? '续期成功' : '续期失败'
      )
      results.push({
         success,
         domain,
         days
      })
   }
   if (results.length) {
      return pushMessage(results);
   }
}

async function handleSchedule(scheduledDate) {
   console.log('scheduled date', scheduledDate)
   const cookie = await login()
   console.log('cookie', cookie)
   headers['cookie'] = cookie
   const domainInfo = await getDomainInfo()
   console.log('token', domainInfo.token)
   console.log('domains', domainInfo.domains)
   await renewDomains(domainInfo)
}

addEventListener('scheduled', (event) => {
   event.waitUntil(handleSchedule(event.scheduledTime))
})

async function handleRequest() {
   const cookie = await login()
   console.log('cookie', cookie)
   headers['cookie'] = cookie
   const domainInfo = await getDomainInfo()
   const domains = domainInfo.domains
   const domainHtml = []
   for (const domain in domains) {
      const days = domains[domain].days
      domainHtml.push(`<p>域名 ${domain} 还有 ${days} 天到期</p>`)
   }
   const html = `
   <!DOCTYPE html>
   <html>
   <head><title>Freenom Renew Workers</title></head>
   <body>
   本项目仓库地址：https://github.com/PencilNavigator/Freenom-Workers<br/>
   ${domainHtml.join('')}
   </body>
   </html>
   `
   return new Response(html, {
      headers: { 'content-type': 'text/html; charset=utf-8' },
   })
}

addEventListener('fetch', (event) => {
   event.respondWith(handleRequest())
})

async function pushMessage(results) {
   if (!PUSHPLUS_TOKEN) {
      return
   }
   const pushUrl = 'https://www.pushplus.plus/send'
   const postData = new FormData()
   postData.set('token', PUSHPLUS_TOKEN)
   postData.set('title', '免费域名更新结果')
   const content = results.map(result => `域名 ${result.domain} 更新${result.success ? '成功' : '失败'}，剩余有效期${result.days}天`).join('</br>')
   postData.set('content', content)
   const resp = await fetch(pushUrl, {
      method: 'POST',
      body: postData,
   })
}
