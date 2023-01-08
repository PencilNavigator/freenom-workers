
<h4 align="center">通过Cloudflare Workers自动续期Freenom域名(.cf .ga .gq .ml .tk)。</h4>

<p align="center">
  <a href="https://github.com/PencilNavigator/Freenom-Workers/blob/main/README_EN.md">English README</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/issues">Issues</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/Wiki">Wiki</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/discussions" target="_blank">Discussions</a>
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


在同一界面的路由选项中禁用默认路由（通常为 服务名.子域名.workers.dev）。

## 测试

（快速编辑-预览 访问）在快速编辑界面中的“预览”访问已部署的Workers。顺利的话，你将看到你账户内所有域名的剩余日期。
_请注意，通过预览访问不会触发续期任务，仅用于测试是否可以获取账户内所有域名的剩余日期。_

（触发Cron）进入“快速编辑”，选择“设定时间”，再选择“触发计划的事件”。查看下方Console是否有输出域名剩余日期。（如有可续期的域名，会输出是否续期成功。）

## 效果展示
![图片](https://user-images.githubusercontent.com/85282140/207813815-99af2574-910d-40d1-908c-5f18de1a5648.png)

（2022/12/15测试）

## 已知问题

请访问该[Wiki](https://github.com/PencilNavigator/freenom-workers/wiki/Known-Issues)页面。

## 待实现的功能

请访问该[Wiki](https://github.com/PencilNavigator/freenom-workers/wiki/Planned-Enhancement)页面。

## 类似项目
https://github.com/luolongfei/freenom (PHP)

https://github.com/Oreomeow/freenom-py (Python)


## LICENSE
目前没有决定好用什么LICENSE.

<img title="mona-loading" alt="mona-loading" src="https://github.githubassets.com/images/mona-loading-dark.gif" width="100">
