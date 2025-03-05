import{_ as t,c as i,o as l,ah as e}from"./chunks/framework.BE6bf6oo.js";const m=JSON.parse('{"title":"语雀-Markdown","description":"","frontmatter":{"sort":140,"urlname":"yuque-markdown","catalog":"功能和API适配情况","tags":"Elog-Docs","title":"语雀-Markdown","date":"2023-04-06 21:31:00","updated":"2023-10-13 13:53:00"},"headers":[],"relativePath":"notion/yuque-markdown.md","filePath":"notion/yuque-markdown.md","lastUpdated":1741189079000}'),a={name:"notion/yuque-markdown.md"};function c(k,s,o,d,h,b){return l(),i("div",null,s[0]||(s[0]=[e('<h1 id="语雀-markdown" tabindex="-1">语雀-Markdown <a class="header-anchor" href="#语雀-markdown" aria-label="Permalink to &quot;语雀-Markdown&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 图片</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 表格</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 附件【勉强可用】：接口返回为超链接形式，在hexo中展现形式为超链接，点击后触发下载</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 状态【不可用】：接口返回为纯文字，在hexo中不支持，会直接渲染为文字</li></ul><h2 id="行内样式" tabindex="-1">行内样式 <a class="header-anchor" href="#行内样式" aria-label="Permalink to &quot;行内样式&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 加粗</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 下划线</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 斜体</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 中划线</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 上/下标</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 行内代码</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 字体颜色【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 字体背景色【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 待办事项</li></ul><h2 id="画板类" tabindex="-1">画板类 <a class="header-anchor" href="#画板类" aria-label="Permalink to &quot;画板类&quot;">​</a></h2><p>接口不返回，解决方案就是画好之后截图放在画板下面</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 画板【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 思维导图【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 流程图【不可用】</li></ul><h2 id="数据表" tabindex="-1">数据表 <a class="header-anchor" href="#数据表" aria-label="Permalink to &quot;数据表&quot;">​</a></h2><p>接口不返回</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 数据表【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 画册【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 看板【不可用】</li></ul><h2 id="程序员专区" tabindex="-1">程序员专区 <a class="header-anchor" href="#程序员专区" aria-label="Permalink to &quot;程序员专区&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 代码块</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 公式：接口返回为图片</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> UML图【不可用】：接口不返回，解决方案就是画好之后截图放在画板下面</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 文本绘图：接口返回为图片</li></ul><h2 id="布局和样式" tabindex="-1">布局和样式 <a class="header-anchor" href="#布局和样式" aria-label="Permalink to &quot;布局和样式&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 高亮块【不可用】：接口返回为<code>:::info</code>等形式，部分博客平台支持</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 折叠块【不可用】 接口直接返回折叠标题+折叠内容字符</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 分栏卡片【不可用】 接口依次返回每个分栏的内容</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 引用</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 分割线</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 表情</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 图册【不可用】：接口不返回</li></ul><h2 id="小工具" tabindex="-1">小工具 <a class="header-anchor" href="#小工具" aria-label="Permalink to &quot;小工具&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 用提及【勉强可用】 接口返回为超链接</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 语雀内容【勉强可用】 接口返回为超链接</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 日历【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 投票【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 打卡【不可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 加密文本【不可用】</li></ul><h2 id="嵌入本地内容" tabindex="-1">嵌入本地内容 <a class="header-anchor" href="#嵌入本地内容" aria-label="Permalink to &quot;嵌入本地内容&quot;">​</a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 本地文件 PDF Word Sketch等【勉强可用】：接口返回为超链接</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 本地音频【不可用】：接口不返回</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 本地视频【不可用】：接口返回为视频超链接形式</li></ul><h2 id="第三方服务" tabindex="-1">第三方服务 <a class="header-anchor" href="#第三方服务" aria-label="Permalink to &quot;第三方服务&quot;">​</a></h2><p>所有嵌入的第三方服务，接口返回形式都为超链接，点击后前往目标页面</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 用优酷【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> B站【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 网易云【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 淘宝【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Figma【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> ProcessOn【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Canva【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> CodePen【勉强可用】</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 码上掘金【勉强可用】</li></ul>',22)]))}const p=t(a,[["render",c]]);export{m as __pageData,p as default};
