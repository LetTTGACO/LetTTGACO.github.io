import{_ as a,c as e,o as s,ah as n}from"./chunks/framework.BE6bf6oo.js";const k=JSON.parse('{"title":"Front Matter","description":"","frontmatter":{},"headers":[],"relativePath":"yuque/raqyleng501h23p1.md","filePath":"yuque/raqyleng501h23p1.md","lastUpdated":1741189079000}'),r={name:"yuque/raqyleng501h23p1.md"};function i(o,t,l,d,p,h){return s(),e("div",null,t[0]||(t[0]=[n(`<h1 id="front-matter" tabindex="-1">Front Matter <a class="header-anchor" href="#front-matter" aria-label="Permalink to &quot;Front Matter&quot;">​</a></h1><p>Elog 会将用户自定义的 front matter 和 预定义属性合并后，输出新的带有 front matter 的 markdown 文档。 任何包含 YAML front matter 的 Markdown 文件都将由 <a href="https://www.npmjs.com/package/front-matter" target="_blank" rel="noreferrer">front-matter </a>处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title: Blogging with Elog</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classify: 关于Elog</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cover_img: https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//example.com/test.jpg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tags:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- Blog</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- CI/CD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><blockquote><p>手动指定文档的 <code>front matter</code> 只适用于语雀，Notion可以直接添加数据库属性，不需要手动指定 <code>front matter</code>。 由于语雀 API 的问题，Elog 目前只支持使用三点划线来声明 <code>front matter</code> 如果需要生成的 markdown 文件具有 <code>front matter</code>，需要在配置文件中配置<code>deploy.local.format=matter-markdown</code></p></blockquote><h2 id="预定义属性" tabindex="-1">预定义属性 <a class="header-anchor" href="#预定义属性" aria-label="Permalink to &quot;预定义属性&quot;">​</a></h2><p>Elog 预设置了一些常用的属性，会在<code>matter-markdown</code>模式默认下生成包含这些属性的markdown 文档。</p><table tabindex="0"><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>文章标题</td></tr><tr><td>urlname</td><td>url名称</td></tr><tr><td>author</td><td>作者（仅限语雀）</td></tr><tr><td>date</td><td>创建时间</td></tr><tr><td>updated</td><td>更新时间</td></tr></tbody></table>`,7)]))}const E=a(r,[["render",i]]);export{k as __pageData,E as default};
