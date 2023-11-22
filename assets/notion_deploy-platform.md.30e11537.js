import{_ as s,c as a,o as n,a as t}from"./app.e856f880.js";const B=JSON.parse('{"title":"部署平台配置","description":"","frontmatter":{"sort":110,"urlname":"deploy-platform","catalog":"配置详情","tags":"Elog-Docs","title":"部署平台配置","date":"2023-10-13 13:21:00","updated":"2023-11-18 15:07:00"},"headers":[],"relativePath":"notion/deploy-platform.md","lastUpdated":1700635308000}'),l={name:"notion/deploy-platform.md"},o=t(`<h1 id="部署平台配置" tabindex="-1">部署平台配置 <a class="header-anchor" href="#部署平台配置" aria-hidden="true">#</a></h1><h2 id="本地部署-local" tabindex="-1">本地部署（local） <a class="header-anchor" href="#本地部署-local" aria-hidden="true">#</a></h2><p>适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台</p><table><thead><tr><th>字段</th><th>必填</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>outputDir</td><td>否</td><td>string</td><td>文档输出目录</td><td>-</td></tr><tr><td>filename</td><td>否</td><td>string</td><td>生成文档的命名格式，取值 urlname｜title</td><td>title</td></tr><tr><td>format</td><td>否</td><td>string</td><td>适配器，取值 markdown｜wiki｜html</td><td>markdown</td></tr><tr><td>frontMatter</td><td>否</td><td>FrontMatter</td><td>FrontMatter相关配置</td><td>-</td></tr><tr><td>catalog</td><td>否</td><td>boolean</td><td>是否按照目录生成文档</td><td>false</td></tr><tr><td>formatExt</td><td>否</td><td>string</td><td>自定义文档处理适配器路径</td><td>-</td></tr></tbody></table><h3 id="format-字段说明" tabindex="-1">Format 字段说明 <a class="header-anchor" href="#format-字段说明" aria-hidden="true">#</a></h3><p><code>format</code>字段表示该文档内容的格式，常用的例如<code>markdown</code>或适用于 Confluence 的 <code>wiki</code>，适用于 Wordpress的 <code>html</code></p><h3 id="frontmatter-字段说明" tabindex="-1">FrontMatter 字段说明 <a class="header-anchor" href="#frontmatter-字段说明" aria-hidden="true">#</a></h3><blockquote><p><code>0.12.0</code>及以上版本支持</p></blockquote><table><thead><tr><th>字段</th><th>必填</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>enable</td><td>否</td><td>boolean</td><td>是否启用 FrontMatter</td><td>false</td></tr><tr><td>include</td><td>否</td><td>string[]</td><td>只输出数组中存在的字段，数据库的其他字段忽略</td><td>-</td></tr><tr><td>exclude</td><td>否</td><td>string[]</td><td>忽略数组中存在的字段，输出数据库的其他字段</td><td>-</td></tr></tbody></table><blockquote><p>在 <code>0.12.0</code> 版本之前启用 FrontMatter 可设置 <code>local.format=matter-markdown</code></p></blockquote><h3 id="formatext-字段说明" tabindex="-1">FormatExt 字段说明 <a class="header-anchor" href="#formatext-字段说明" aria-hidden="true">#</a></h3><p>自定义文档处理适配器<code>.js</code>文件路径，当需要对文档进一步处理时，可配置此选项</p><ol><li><p>目前只支持 Common Js 标准的处理器</p></li><li><p>处理器需要暴露一个<strong>同步/异步</strong>的 <code>format</code> 的方法，在 <code>0.12.0</code> 之前版本<strong>仅支持同步方法</strong>，<code>0.12.0</code> 及以上版本可支持<strong>异步方法或 npm 库</strong></p></li><li><p>在 <code>0.12.0</code> 之前版本返回类型为<strong>字符串，</strong><code>0.12.0</code> 及以上版本返回<strong>传入的</strong> <strong>doc 文档对象</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0.12.0之前的版本用法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果需要返回带有front-matter的md字符串，则需要安装并引入此库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const { matterMarkdownAdapter } = require(&#39;@elog/cli&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 自定义文档处理器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">DocDetail</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#676E95;font-style:italic;"> doc的类型定义为 DocDetail</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> 返回处理后的文档内容字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> format </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">process</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">body</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 直接返回md内容字符串</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 返回带有front-matter的md字符串</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// return matterMarkdownAdapter(doc);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  format</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0.12.0及以上版本用法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> matterMarkdownAdapter </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@elog/cli</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 自定义文档插件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">DocDetail</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#676E95;font-style:italic;"> doc的类型定义为 DocDetail</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">ImageClient</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">imageClient</span><span style="color:#676E95;font-style:italic;"> 图床下载器，可用于图片上传</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">Promise&lt;DocDetail&gt;</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> 返回处理后的文档对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> format </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">imageClient</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">cover</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">properties</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cover</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 将 cover 字段中的 notion 图片下载到本地</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">imageClient</span><span style="color:#F07178;">)  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 只有启用图床平台image.enable=true时，imageClient才能用，否则请自行实现图片上传</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">imageClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uploadImageFromUrl</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">cover</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// cover链接替换为本地图片</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">properties</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cover</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">url</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">matterMarkdownAdapter</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">doc</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  format</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>DocDetail 类型定义如下：</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 文章详情 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocDetail</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BaseDoc</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 实际部署时的markdown文档字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 原始markdown文档字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_original</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 部署到wiki时会存在 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_wiki</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** html字符串 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">body_html</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章属性 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocProperties</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 目录路径 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">catalog</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BaseDoc</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章唯一ID */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 文章ID */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">doc_id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 更新时间，冗余字段 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 文章属性 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DocProperties</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">urlname</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  [key: string]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="confluence" tabindex="-1">Confluence <a class="header-anchor" href="#confluence" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>baseUrl</td><td>是</td><td>Confluence API 请求 Base Url</td><td>-</td></tr><tr><td>spaceKey</td><td>是</td><td>空间Key</td><td>-</td></tr><tr><td>rootPageId</td><td>是</td><td>根页面ID，Elog会把文档统一存到此目录下</td><td>-</td></tr><tr><td>user</td><td>是</td><td>Confluence账号</td><td>-</td></tr><tr><td>password</td><td>是</td><td>Confluence密码</td><td>-</td></tr><tr><td>formatExt</td><td>否</td><td>自定义文档处理适配器路径，需要符合Confluence格式要求</td><td>-</td></tr></tbody></table><h2 id="wordpress" tabindex="-1">WordPress <a class="header-anchor" href="#wordpress" aria-hidden="true">#</a></h2><p>WordPress 模版获取、关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#wordpres">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>username</td><td>是</td><td>WordPress 用户名</td><td>-</td></tr><tr><td>password</td><td>是</td><td>WordPress 密码</td><td>-</td></tr><tr><td>endpoint</td><td>是</td><td>WordPress 站点，例如<a href="http://your.site.com/wp-json" target="_blank" rel="noreferrer">http://your.site.com/wp-json</a></td><td>-</td></tr><tr><td>keyMap</td><td>否</td><td>属性映射</td><td>-</td></tr><tr><td>formatExt</td><td>否</td><td>自定义文档处理适配器路径，需要符合HTML格式要求</td><td>-</td></tr></tbody></table><h3 id="keymap-字段说明" tabindex="-1">keyMap 字段说明 <a class="header-anchor" href="#keymap-字段说明" aria-hidden="true">#</a></h3><table><thead><tr><th>属性</th><th>必填</th><th>映射字段说明</th><th>字段值类型</th><th>默认值</th></tr></thead><tbody><tr><td>tags</td><td>否</td><td>标签字段映射</td><td>string ｜ string[]</td><td>tags</td></tr><tr><td>categories</td><td>否</td><td>分类字段映射</td><td>string ｜ string[]</td><td>categories</td></tr><tr><td>urlname</td><td>否</td><td>页面路径字段映射</td><td>string</td><td>urlname</td></tr><tr><td>cover</td><td>否</td><td>特色图片（封面图）字段映射</td><td>string，图片url</td><td>cover</td></tr><tr><td>description</td><td></td><td>简介字段映射</td><td>string</td><td>description</td></tr></tbody></table><p>一般不需要修改，只要保证文章属性<code>front-matter</code>中有以上字段，即可在上传到WordPress时正确携带，只有字段冲突或者想自定义为中文等情况下才需要进行映射。</p><p>语雀需要自行在文章头部添加<code>front-matter</code>，并填写以下值，Notion/FlowUs可直接新增/修改为以上字段即可。</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p><strong>点击</strong> <a href="/notion/image-platform">下一篇</a> <strong>继续配置图床平台</strong></p>`,24),p=[o];function e(r,c,y,d,i,D){return n(),a("div",null,p)}const E=s(l,[["render",e]]);export{B as __pageData,E as default};