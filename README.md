
<h4 align="center">使用 Cloudflare Workers 自动续订您的 Freenom 域 （.cf .ga .gq .ml .tk）。</h4>

<p align="center">
  <a href="https://github.com/PencilNavigator/Freenom-Workers/blob/main/README.md">中文自述文件</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/issues">问题</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/Wiki">维基</a>
  •
  <a href="https://github.com/PencilNavigator/Freenom-Workers/discussions" target="_blank">讨论</a>
</p>
<p align="center">
 喜欢这个项目吗？ 加星标！
</p>

## 设置

打开您的 Cloudflare 仪表板

在主页左侧边栏中选择“工作人员”。

在“工作线程”选项卡上，选择“创建服务”，选择您的服务名称，然后选择一个启动器（HTTP 处理程序）。

在刚刚创建的工作线程上，选择“快速编辑”。

在快速编辑界面中，将代码复制并粘贴到worker_EN.js中，然后单击保存。

返回到刚刚创建的工作线程页面，选择“设置”，然后选择“变量”。

在变量页上，添加以下变量名称和值。

SECRET_USERNAME“与您的Freenom用户名。
SECRET_PASSWORD“与您的Freenom密码。
（可选）为两个变量选择加密选项，以减少您的Freenom用户名和密码泄漏的可能性。

返回到已创建的“辅助角色”页，然后选择“触发器”。

在“触发器”屏幕上，单击“添加 Cron 触发器”。在“添加 Cron 触发器”页上，设置触发器并保存“设置”。建议的执行时间为每天一次。

在同一界面上，禁用路由中的默认路由（例如 servicename.subdomain.worker.dev）。


## 测试

（通过快速编辑访问）在 Quice 编辑界面中访问已部署的工作线程服务。您应该会看到帐户中所有域名的剩余日期。请注意，通过预览访问不会触发续订。 它只能用于测试目的。

（触发计划事件）输入“快速编辑”，选择“设置时间”，然后选择“触发定时事件”。您应该会看到控制台输出域的剩余日期。（如果检测到可续订域，控制台将输出续订结果。

## 展示
![Image](https://user-images.githubusercontent.com/85282140/207813815-99af2574-910d-40d1-908c-5f18de1a5648.png)

（2022/12/15 成功更新）

## 已知问题

请查看此 [维基](https://github.com/PencilNavigator/freenom-workers/wiki/Known-Issues) 页面。

## 计划的增强

请查看此 [维基](https://github.com/PencilNavigator/freenom-workers/wiki/Planned-Enhancement) 页面。

## 项目的其他开发语言
https://github.com/luolongfei/freenom (PHP)

https://github.com/Oreomeow/freenom-py (Python)

## 许可证
目前没有许可证。

<img title="mona-loading" alt="mona-loading" src="https://github.githubassets.com/images/mona-loading-dark.gif" width="100">
