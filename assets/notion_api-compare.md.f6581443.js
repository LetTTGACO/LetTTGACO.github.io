import{_ as a,c as e,o,a as t}from"./app.c46500ee.js";const m=JSON.parse('{"title":"语雀API和NotionAPI的区别","description":"","frontmatter":{"status":"计划中","sort":18,"urlname":"api-compare","上次编辑时间":"2023-04-27T05:36:00.000Z","catalog":"功能和API适配情况","title":"语雀API和NotionAPI的区别","date":"2023-04-27 13:33:00","updated":"2023-04-27 13:36:00"},"headers":[],"relativePath":"notion/api-compare.md","lastUpdated":1688717312000}'),i={name:"notion/api-compare.md"},n=t('<h1 id="语雀-api-和-notionapi-的区别" tabindex="-1"><strong>语雀 API 和 NotionAPI 的区别</strong> <a class="header-anchor" href="#语雀-api-和-notionapi-的区别" aria-hidden="true">#</a></h1><h2 id="语雀-api" tabindex="-1">语雀 API <a class="header-anchor" href="#语雀-api" aria-hidden="true">#</a></h2><ul><li>语雀返回的 markdown 内容存在语雀专有的锚点<code>&lt;a name=\\&quot;.*?\\&quot;&gt;&lt;\\/a&gt;</code>，需要单独处理</li></ul><h2 id="notion-api" tabindex="-1">Notion API <a class="header-anchor" href="#notion-api" aria-hidden="true">#</a></h2><ul><li>暂不支持子页面的渲染</li><li>暂不支持<code>webhooks</code>，网页版需要加载油猴插件或者谷歌插件，桌面版可以加载自定义的<code>js</code>，但是需要适配<code>mac/windows/linux</code></li><li>国内直接调用<code>api</code>会存在超时的问题</li></ul>',5),d=[n];function r(c,s,l,p,_,h){return o(),e("div",null,d)}const A=a(i,[["render",r]]);export{m as __pageData,A as default};
