import{_ as s,c as n,o as a,d as t}from"./app.fe8ae78b.js";const B=JSON.parse('{"title":"部署平台配置","description":"","frontmatter":{"status":"已发布","sort":110,"urlname":"deploy-platform","上次编辑时间":"2023-10-13T06:11:00.000Z","catalog":"配置详情","tags":"Elog-Docs","title":"部署平台配置","date":"2023-10-13 05:21:00","updated":"2023-10-13 06:11:00"},"headers":[],"relativePath":"notion/deploy-platform.md","lastUpdated":1697178092000}'),l={name:"notion/deploy-platform.md"},o=t(`<h1 id="部署平台配置" tabindex="-1">部署平台配置 <a class="header-anchor" href="#部署平台配置" aria-hidden="true">#</a></h1><h2 id="本地部署-local" tabindex="-1">本地部署（local） <a class="header-anchor" href="#本地部署-local" aria-hidden="true">#</a></h2><p>适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台</p><table><thead><tr><th>字段</th><th>必填</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>outputDir</td><td>否</td><td>string</td><td>文档输出目录</td><td>-</td></tr><tr><td>filename</td><td>否</td><td>string</td><td>生成文档的命名格式，取值 urlname ｜ title</td><td>title</td></tr><tr><td>format</td><td>否</td><td>string</td><td>适配器，取值 markdown ｜ matter-markdown ｜ wiki ｜ html</td><td>markdown</td></tr><tr><td>catalog</td><td>否</td><td>boolean</td><td>是否按照目录生成文档</td><td>false</td></tr><tr><td>formatExt</td><td>否</td><td>string</td><td>自定义文档处理适配器路径</td><td>-</td></tr></tbody></table><h3 id="formatext-字段说明" tabindex="-1">FormatExt 字段说明 <a class="header-anchor" href="#formatext-字段说明" aria-hidden="true">#</a></h3><p>自定义文档处理适配器<code>.js</code>文件路径，当需要对文档进一步处理时，可配置此选项</p><ol><li><p>目前只支持 Common Js 标准的处理器</p></li><li><p>处理器需要暴露一个<strong>同步</strong>的 <code>format</code> 的方法，<strong>不支持异步方法</strong></p></li><li><p>返回类型为<strong>字符串</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 如果需要返回带有front-matter的md字符串，则需要安装并引入此库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const { matterMarkdownAdapter } = require(&#39;@elog/plugin-adapter&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 自定义文档处理器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">DocDetail</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#676E95;font-style:italic;"> doc的类型定义为 DocDetail</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> 返回处理后的文档内容字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> format </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">process</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">body</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 直接返回md内容字符串</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 返回带有front-matter的md字符串</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// return matterMarkdownAdapter(doc);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  format</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>DocDetail 类型定义如下：</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 文章详情 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocDetail</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BaseDoc</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 实际部署时的markdown文档字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 原始markdown文档字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_original</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 部署到wiki时会存在 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_wiki</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** html字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_html</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章属性 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocProperties</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 语雀文章目录路径， Notion暂不支持 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">catalog</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">YuqueCatalog</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BaseDoc</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章唯一ID */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章ID */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">doc_id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 更新时间，冗余字段 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 文章属性 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocProperties</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">urlname</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  [</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 语雀知识库目录 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">YuqueCatalog</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 类型：文章/分组 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DOC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TITLE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">child_uuid</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">parent_uuid</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">slug</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="confluence" tabindex="-1">Confluence <a class="header-anchor" href="#confluence" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>baseUrl</td><td>是</td><td>Confluence API 请求 Base Url</td><td>-</td></tr><tr><td>spaceKey</td><td>是</td><td>空间 Key</td><td>-</td></tr><tr><td>rootPageId</td><td>是</td><td>根页面 ID，Elog 会把文档统一存到此目录下</td><td>-</td></tr><tr><td>user</td><td>是</td><td>Confluence 账号</td><td>-</td></tr><tr><td>password</td><td>是</td><td>Confluence 密码</td><td>-</td></tr><tr><td>formatExt</td><td>否</td><td>自定义文档处理适配器路径，需要符合 Confluence 格式要求</td><td>-</td></tr></tbody></table><h2 id="wordpress" tabindex="-1">WordPress <a class="header-anchor" href="#wordpress" aria-hidden="true">#</a></h2><p>WordPress 模版获取、关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#wordpres">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>username</td><td>是</td><td>WordPress 用户名</td><td>-</td></tr><tr><td>password</td><td>是</td><td>WordPress 密码</td><td>-</td></tr><tr><td>endpoint</td><td>是</td><td>WordPress 站点，例如<a href="http://your.site.com/wp-json" target="_blank" rel="noreferrer">http://your.site.com/wp-json</a></td><td>-</td></tr><tr><td>keyMap</td><td>否</td><td>属性映射</td><td>-</td></tr><tr><td>formatExt</td><td>否</td><td>自定义文档处理适配器路径，需要符合 HTML 格式要求</td><td>-</td></tr></tbody></table><h3 id="keymap-字段说明" tabindex="-1">keyMap 字段说明 <a class="header-anchor" href="#keymap-字段说明" aria-hidden="true">#</a></h3><table><thead><tr><th>属性</th><th>必填</th><th>映射字段说明</th><th>字段值类型</th><th>默认值</th></tr></thead><tbody><tr><td>tags</td><td>否</td><td>标签字段映射</td><td>string ｜ string[]</td><td>tags</td></tr><tr><td>categories</td><td>否</td><td>分类字段映射</td><td>string ｜ string[]</td><td>categories</td></tr><tr><td>urlname</td><td>否</td><td>页面路径字段映射</td><td>string</td><td>urlname</td></tr><tr><td>cover</td><td>否</td><td>特色图片（封面图）字段映射</td><td>string，图片 url</td><td>cover</td></tr><tr><td>description</td><td></td><td>简介字段映射</td><td>string</td><td>description</td></tr></tbody></table><p>一般不需要修改，只要保证文章属性<code>front-matter</code>中有以上字段，即可在上传到 WordPress 时正确携带，只有字段冲突或者想自定义为中文等情况下才需要进行映射。</p><p>语雀需要自行在文章头部添加<code>front-matter</code>，并填写以下值，Notion/FlowUs 可直接新增/修改为以上字段即可。</p>`,16),p=[o];function e(r,c,y,d,i,D){return a(),n("div",null,p)}const E=s(l,[["render",e]]);export{B as __pageData,E as default};
