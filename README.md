
<h4 align="center">通过Cloudflare Workers自动续期Freenom域名(.cf .ga .gq .ml .tk)。</h4>

<p align="center">
  <a href="https://github.com/PencilNavigator/Freenom-Workers/blob/main/README_EN.md">English README</a>
  •
  <a href="https://github.com/Atlas-OS/Atlas/wiki/1.-FAQ#contents">Issues</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/discussions" target="_blank">General Discussions</a>
</p>
<p align="center">
 喜欢这个项目？给颗Star吧！
</p>

## 部署

打开你的 [Cloudflare管理面板](https://dash.cloudflare.com)


在账号主页左侧侧边栏选择Workers


在Workers页面，选择创建服务，设置好服务名称，选择HTTP处理程序。


在刚刚创建的Workers界面，选择“快速编辑”。


在编辑界面，粘贴worker.js内代码，点击保存。


返回刚刚创建的Workers页面，选择“设置”，再选择“变量”。


在变量页面，添加以下变量和变量值：

- SECRET_USERNAME变量，填入Freenom用户名

- SECRET_PASSWORD变量，填入Freenom密码


（可选）勾选两个变量的“加密”选项（可极大程度降低Freenom用户名和密码泄露的概率）。


返回创建的Workers页面，选择“触发器”。


在触发器界面，选择添加Cron触发器。在“添加Cron触发器”界面，设置触发器，保存。推荐执行时间为一天一次。


## 测试

（直接访问域名）访问刚刚部署的Workers服务的域名（一般URL为：服务名.设置子域.workers.dev)。顺利的话，你将看到你账户内所有域名的剩余日期。（workers.dev域名在中国内地污染严重，建议绑定一个自己的域名进行访问）。


（触发Cron）进入“快速编辑”，选择“设定时间”，再选择“触发计划的事件”。查看下方Console是否有输出域名剩余日期。

## 待实现的功能
执行成功后，通过邮件送信/TelegramBot/DiscordBot发送执行结果。


## 类似项目
https://github.com/luolongfei/freenom (PHP)

https://github.com/Oreomeow/freenom-py (Python)


## LICENSE
目前没有决定好用什么LICENSE.

![mona-loading](https://github.githubassets.com/images/mona-loading-dark.gif)
