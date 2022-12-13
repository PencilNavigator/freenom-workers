
<h4 align="center">Renew your Freenom domain (.cf .ga .gq .ml .tk) automaticly with Cloudflare Workers.</h4>

<p align="center">
  <a href="https://github.com/PencilNavigator/Freenom-Workers/blob/main/README.md">简体中文README</a>
  •
  <a href="https://github.com/Atlas-OS/Atlas/wiki/1.-FAQ#contents">Issues</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/discussions" target="_blank">General Discussions</a>
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


## Test

(Access the domain) Access the domain of your deployed Workers service (normally the URL is "servicename.subdomain.workers.dev"). If successful, you will see the remaining dates of all domains in your account.


(Trigger scheduled event) Enter "Quick Edit", select "Set Time", and then select "Trigger scheduled event". You should see the console outputing the remaining date of the domain.

## Planned enhancement

After execution, send execution result via Email/TelegramBot/DiscordBot.

## Simliar Projects
https://github.com/luolongfei/freenom (PHP)

https://github.com/Oreomeow/freenom-py (Python)

## LICENSE
Currently no LICENSE.

![mona-loading](https://github.githubassets.com/images/mona-loading-dark.gif)
