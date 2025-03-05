import{_ as l,c as t,o as i,ah as s}from"./chunks/framework.BE6bf6oo.js";const b=JSON.parse('{"title":"Elog 能干什么","description":"","frontmatter":{"sort":10,"urlname":"introduce","catalog":"关于Elog","tags":"Elog-Docs","title":"Elog 能干什么","date":"2023-04-06 21:31:00","updated":"2023-11-30 01:13:00"},"headers":[],"relativePath":"notion/introduce.md","filePath":"notion/introduce.md","lastUpdated":1741189079000}'),c={name:"notion/introduce.md"};function a(o,e,k,d,h,n){return i(),t("div",null,e[0]||(e[0]=[s('<h1 id="elog-能干什么" tabindex="-1">Elog 能干什么 <a class="header-anchor" href="#elog-能干什么" aria-label="Permalink to &quot;Elog 能干什么&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>Elog</code>名为 <code>Easy Blogging</code>，简单、轻松的书写&amp;部署博客</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在遇到 Elog 之前，你的博客可能是</p><ul><li>本地编辑器书写 + Hexo/Hugo/Vitepress 部署</li><li>语雀记录</li><li>Notion 记录和发布</li><li>WordPress 在线书写和发布</li><li>Github 记录</li><li>掘金/知乎等在线平台记录</li></ul><p>可以发现，大部分博客平台要么自己提供在线编辑器，要么就让用户本地书写再进行进行部署。 可惜目前好用的编辑器大都都不是博客平台自己提供的，而是一些第三方编辑器，例如</p><ul><li>Notion：出色的数据库设计，灵活度非常高</li><li>FlowUs：仿Notion的国内文档产品，用了下还不错</li><li>飞书云文档：也是一个很出色的在线协同文档工具，主打工作/团队场景，也有个人版</li><li>语雀：阿里出品，笔者觉得很不错的一款在线编辑器，涵盖日常个人、工作所需要的各种场景，够用</li><li>Typora：一款出色的本地编辑器，支持实时预览和流程书写，可惜新版本收费了</li></ul><p>而博客平台一般分为两类，一种是轻量化的，只负责渲染文档不提供编辑器，代表产品：</p><ul><li>Hexo</li><li>Vitepress</li><li>HuGo</li></ul><p>一种是内容管理系统软件，相对上面这些比较重，初期涉及到数据库和手动部署，拥有自己的编辑器，代表产品</p><ul><li>WordPress</li><li>GHost</li></ul><h2 id="elog" tabindex="-1">Elog <a class="header-anchor" href="#elog" aria-label="Permalink to &quot;Elog&quot;">​</a></h2><p>如果我既想用最熟悉、最舒适的编辑器，又想用主流的博客平台，怎么办呢？ Elog 就是为了解决这个问题而诞生的。 Elog 将这些平台揉合在一起，你可以随意组合写作平台和博客平台，目前支持</p><p><strong>写作平台：</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Notion</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 语雀</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> FlowUs</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 飞书云文档</li></ul><p><strong>博客平台：</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Hexo</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Vitepress</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> HuGo</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Docusaurus</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Docz</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Halo</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Confluence</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> WordPress</li></ul><blockquote><p>博客平台目前支持所有类似 Hexo 的框架：通过向指定目录存放 Markdown 文档来进行渲染的方式</p></blockquote><h2 id="图床功能" tabindex="-1">图床功能 <a class="header-anchor" href="#图床功能" aria-label="Permalink to &quot;图床功能&quot;">​</a></h2><p>和很多在线平台一样，语雀/飞书/Notion/FlowUx 也同样存在图片防盗链的问题，直接将写作平台的图片链接放到其他站点的话，会加载不出来。 为了解决这个问题，Elog 支持了在生成 Markdown 文件之前，将扫描到的图片上传到图床上，并对文档中的图片链接进行替换。 当前支持的图床有</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 本地</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 腾讯云 COS</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 阿里云 OSS</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Github 图床</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 七牛云</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 又拍云</li></ul>',22)]))}const r=l(c,[["render",a]]);export{b as __pageData,r as default};
