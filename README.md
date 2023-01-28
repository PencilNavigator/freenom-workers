
<h4 align="center">Renew your Freenom domain (.cf .ga .gq .ml .tk) automaticly with Cloudflare Workers.</h4>

<p align="center">
  <a href="README_zh.md">中文README</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/issues">Issues</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/Wiki">Wiki</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/discussions" target="_blank">Discussions</a>
</p>
<p align="center">
 Like this project？ Star it!
</p>

## Set-up

Open your [Cloudflare Dashboard](https://dash.cloudflare.com)


Select "Workers" in the left sidebar on the homepage.


On the Workers tab，choose "Create a Service"，choose your service name，and select a starter (HTTP Handler)。


On the Workers you just created, select "Quick edit".


In the Quick edit interface, copy and paste the code in worker_EN.js and click Save.


Go back to the Workers page you just created and select "Settings" and then "Variables".


On the variables page, add the following variable name and value.

- SECRET_USERNAME" with your Freenom username.
- SECRET_PASSWORD" with your Freenom password.


(Optional) Select the Encryption option for both variables to reduce the probability of leakage for your Freenom username and password.


Return to the created Workers page and select Triggers.


On the Trigger screen, click "Add Cron Trigger". On the Add Cron Trigger page, set up the trigger and save the Settings. The recommended execution time is once a day.


On the same interface, Disable the default route (e.g. servicename.subdomain.worker.dev) in Routes.


## Test

(Access through Quick edit) Access your deployed Workers service in the Quice edit interface. You should see the remaining dates of all domain names in your account.
_Please note that access through preview does not trigger renewal. it should only be used for testing purposes._

(Trigger scheduled event) Enter "Quick Edit", select "Set Time", and then select "Trigger scheduled event". You should see the console outputing the remaining date of the domain. (If a renewable domain is detected, the console will output renewal results.)

## Showcase
![Image](https://user-images.githubusercontent.com/85282140/207813815-99af2574-910d-40d1-908c-5f18de1a5648.png)

（Successfully renewed on 2022/12/15）

## Known Issues

Please check out this [Wiki](https://github.com/PencilNavigator/freenom-workers/wiki/Known-Issues) page.

## Planned enhancement

Please check out this [Wiki](https://github.com/PencilNavigator/freenom-workers/wiki/Planned-Enhancement) page.

## Simliar Projects
https://github.com/luolongfei/freenom (PHP)

https://github.com/Oreomeow/freenom-py (Python)

## LICENSE
Currently no LICENSE.

<img title="mona-loading" alt="mona-loading" src="https://github.githubassets.com/images/mona-loading-dark.gif" width="100">
