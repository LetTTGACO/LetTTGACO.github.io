import{_ as s,c as a,o as i,V as t}from"./chunks/framework.qmJTxtaM.js";const g=JSON.parse('{"title":"按目录存放文档","description":"","frontmatter":{},"headers":[],"relativePath":"yuque/xe160pqsumi6bqnz.md","filePath":"yuque/xe160pqsumi6bqnz.md","lastUpdated":1708969861000}'),e={name:"yuque/xe160pqsumi6bqnz.md"},n=t(`<h1 id="按目录存放文档" tabindex="-1">按目录存放文档 <a class="header-anchor" href="#按目录存放文档" aria-label="Permalink to &quot;按目录存放文档&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>当在语雀/Notion上管理文章时，需要在生成文档时按目录将文档存放在不同目录，方便部署平台按照目录渲染。 例如 Vitepress 一般是按照文件夹生成文档和目录。</p><h2 id="如何配置" tabindex="-1">如何配置 <a class="header-anchor" href="#如何配置" aria-label="Permalink to &quot;如何配置&quot;">​</a></h2><h3 id="语雀" tabindex="-1">语雀 <a class="header-anchor" href="#语雀" aria-label="Permalink to &quot;语雀&quot;">​</a></h3><p>在配置文件中配置<code>deploy.local.catalog=true</code>，即可按照语雀目录生成文档。</p><h3 id="notion" tabindex="-1">Notion <a class="header-anchor" href="#notion" aria-label="Permalink to &quot;Notion&quot;">​</a></h3><ol><li>在 Notion 数据库新增<code>catalog</code>字段（单选/多选），设置每篇文档的所在目录信息标签。单选标签下，只能生成一层目录；多选标签下，可生成多级目录，但是需要保证标签的顺序</li><li>在 Notion 写作平台配置项中配置<code>write.notion.catalog=true</code></li><li>在部署平台配置项中配置<code>deploy.local.catalog=true</code></li></ol><p>如果想自定义字段，不使用默认的<code>catalog</code>字段，则需要设置<code>write.notion.catalog</code>为以下格式</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NOTION_TOKEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  databaseId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NOTION_DATABASE_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sorts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  catalog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自定义属性&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>你也可以不开启按目录存放文档的相关属性，但是依然在 Vitepress 中按目录生成路由，可参考 <a href="https://github.com/LetTTGACO/elog-docs" target="_blank" rel="noreferrer">Elog Docs 源码</a>。</p></blockquote>`,11),l=[n];function h(p,o,k,r,d,c){return i(),a("div",null,l)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};