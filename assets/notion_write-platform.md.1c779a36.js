import{_ as s,c as a,o as t,a as n}from"./app.0ce2a214.js";const B=JSON.parse('{"title":"写作平台配置","description":"","frontmatter":{"sort":100,"urlname":"write-platform","catalog":"配置详情","tags":"Elog-Docs","title":"写作平台配置","date":"2023-10-13 13:14:00","updated":"2024-01-16 21:49:00"},"headers":[],"relativePath":"notion/write-platform.md","lastUpdated":1706275289000}'),o={name:"notion/write-platform.md"},l=n(`<h1 id="写作平台配置" tabindex="-1">写作平台配置 <a class="header-anchor" href="#写作平台配置" aria-hidden="true">#</a></h1><h2 id="语雀-token方式" tabindex="-1">语雀（Token方式） <a class="header-anchor" href="#语雀-token方式" aria-hidden="true">#</a></h2><blockquote><p>注意：根据语雀定价调整，此方式需要语雀高级会员可用，以前生成过<code>token</code>的账户依旧可用</p></blockquote><p>语雀关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#语雀">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>token</td><td>是</td><td>语雀Token</td><td>-</td></tr><tr><td>baseUrl</td><td>否</td><td>语雀API请求的Base Url</td><td><a href="https://www.yuque.com/api/v2" target="_blank" rel="noreferrer">https://www.yuque.com/api/v2</a></td></tr><tr><td>login</td><td>是</td><td>个人路径/空间ID</td><td>-</td></tr><tr><td>repo</td><td>是</td><td>语雀仓库短名称，也称为语雀知识库路径</td><td>-</td></tr><tr><td>onlyPublic</td><td>否</td><td>是否只获取公开文章</td><td>false</td></tr><tr><td>onlyPublished</td><td>否</td><td>是否只获取已发布文章</td><td>false</td></tr><tr><td>limit</td><td>否</td><td>文档下载并发数</td><td>3</td></tr></tbody></table><blockquote><p><code>baseUrl</code> 为语雀 API 请求路径<br> 当知识库类型为个人知识库时，无需配置。<br> 当知识库类型为团队知识库时，<code>baseUrl=https://空间id.yuque.com/api/v2</code>，<code>login=空间id</code>，<code>repo=空间中的语雀知识库路径</code></p></blockquote><h2 id="语雀-账号密码方式" tabindex="-1">语雀（账号密码方式） <a class="header-anchor" href="#语雀-账号密码方式" aria-hidden="true">#</a></h2><blockquote><p>此方式无需语雀会员也可用<br> 注意：在非国内CI/CD环境中使用此方式，例如Github Workflow，会导致语雀后台登录设备中出现大量美国IP，目前尚不清楚语雀是否会有安全限制措施，请谨慎使用。推荐本地同步时使用。</p></blockquote><p>语雀关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#语雀">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>username</td><td>是</td><td>语雀帐号，一般是手机号</td><td>-</td></tr><tr><td>password</td><td>是</td><td>语雀密码，可在设置进行绑定</td><td></td></tr><tr><td>host</td><td>否</td><td>语雀域名/团队域名</td><td><a href="https://www.yuque.com" target="_blank" rel="noreferrer">https://www.yuque.com</a></td></tr><tr><td>login</td><td>是</td><td>个人路径/空间ID</td><td>-</td></tr><tr><td>repo</td><td>是</td><td>语雀仓库短名称，也称为语雀知识库路径</td><td>-</td></tr><tr><td>linebreak</td><td>否</td><td>是否保持语雀的换行</td><td>false</td></tr><tr><td>onlyPublic</td><td>否</td><td>是否只获取公开文章</td><td>false</td></tr><tr><td>onlyPublished</td><td>否</td><td>是否只获取已发布文章</td><td>false</td></tr><tr><td>limit</td><td>否</td><td>文档下载并发数</td><td>3</td></tr></tbody></table><blockquote><p>host 为语雀域名<br> 当知识库类型为个人知识库时，无需配置。<br> 当知识库类型为团队知识库时，<code>host=https://空间id.yuque.com</code></p></blockquote><h2 id="notion" tabindex="-1">Notion <a class="header-anchor" href="#notion" aria-hidden="true">#</a></h2><p>Notion 模版获取、关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#notion">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>token</td><td>是</td><td>string</td><td>Notion Token</td><td></td></tr><tr><td>databaseId</td><td>是</td><td>string</td><td>notion 中的数据库 id</td><td>-</td></tr><tr><td>filter</td><td>否</td><td>boolean｜object</td><td>过滤条件</td><td>false</td></tr><tr><td>sorts</td><td>否</td><td>boolean｜string｜object[]</td><td>排序条件</td><td>false</td></tr><tr><td>imgToBase64</td><td>否</td><td>boolean</td><td>文档图片转 Base64</td><td>false</td></tr><tr><td>catalog</td><td>否</td><td>boolean｜object</td><td>目录信息配置</td><td>false</td></tr><tr><td>limit</td><td>否</td><td>number</td><td>文档下载并发数</td><td>3</td></tr></tbody></table><h3 id="filter-字段说明" tabindex="-1">Filter 字段说明 <a class="header-anchor" href="#filter-字段说明" aria-hidden="true">#</a></h3><p><code>filter</code>字段是为了筛选 Notion 数据库文档，表示哪些文章需要被 Elog 下载。</p><ol><li><p>当 <code>filter=true</code> ，即筛选数据库的<code>status</code>属性，且属性值为<code>已发布</code>，对应 Notion 的筛选规则为：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">  property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> &#39;status&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  select</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  	equals</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> &#39;已发布&#39;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>当<code>filter = false</code>时，不进行筛选，默认下载数据库所有文档</p></li><li><p>当需要自定义筛选时，需要按照Notion的筛选规则进行。具体请参考 <a href="https://developers.notion.com/reference/post-database-query-filter" target="_blank" rel="noreferrer">Notion API文档 - Filter database entries</a></p></li></ol><h3 id="sorts-字段说明" tabindex="-1">Sorts 字段说明 <a class="header-anchor" href="#sorts-字段说明" aria-hidden="true">#</a></h3><p><code>sorts</code>字段是为了对 Notion 数据库文档进行排序，以便生成一定顺序的目录信息，<strong>对文档的同步不影响。</strong></p><p>例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。</p><p>详情见 <a href="https://github.com/LetTTGACO/elog-docs" target="_blank" rel="noreferrer">Elog Docs 文档源码</a></p><ol><li><p>Elog 提供了一些预设参数，如下。例如<code>sorts=sortDesc</code>即按照数据库的 sort 字段进行倒序排列</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">enum</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">NotionSortPreset</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按自定义日期排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  dateDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dateDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  dateAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dateAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 升序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按创建时间排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  createTimeDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">createTimeDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  createTimeAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">createTimeAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 升序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按更新时间排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  updateTimeDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateTimeDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  updateTimeAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateTimeAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 升序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按数据库的sort字段进行排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  sortDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sortDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  sortAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sortAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 升序</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>当<code>sorts=true</code>或者不填时，默认按照文档创建时间倒序进行排序。</p></li><li><p>当需要自定义排序时，需要按照Notion的筛选规则进行。具体请参考 <a href="https://developers.notion.com/reference/post-database-query-sort" target="_blank" rel="noreferrer">Notion API文档 - Sort database entries</a></p></li></ol><h3 id="catalog-字段说明" tabindex="-1">Catalog 字段说明 <a class="header-anchor" href="#catalog-字段说明" aria-hidden="true">#</a></h3><p><code>catalog</code>字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，<strong>对文档的同步不影响。</strong></p><ol><li><p>默认值为<code>false</code>，即不记录文档的目录信息</p></li><li><p>当<code>catalog=true</code>，则表示按照数据库的<code>catalog</code>字段进行记录</p></li><li><p>当需要自定义属性时，则可按照以下格式进行配置</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">catalog </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">自定义属性</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>当需要配置<code>catalog</code>字段时，请保证数据库有相关属性存在（支持单选/多选）</p></li><li><p><code>catalog</code>字段为单选时，只能生成一层目录</p></li><li><p><code>catalog</code>字段为多选时，可生成多级目录，<strong>但是需要保证标签的顺序</strong></p></li></ol><blockquote><p>注意：对于Notion和FlowUs，想要开启按指定目录分类下载，还需要开启<code>deploy.local.catalog=true</code></p></blockquote><h3 id="imgtobase64-字段说明" tabindex="-1">imgToBase64 字段说明 <a class="header-anchor" href="#imgtobase64-字段说明" aria-hidden="true">#</a></h3><blockquote><p><code>0.10.0</code>及以上版本可用</p></blockquote><p>请<strong>谨慎开启</strong>，开启后，Notion 文档的所有图片将以 Base64 格式输出到 markdown 文档中，但有以下问题值得注意：</p><ol><li>本地/博客平台的Markdown 渲染器并未广泛支持 Base64 格式，请自行确认</li><li>markdown 文档将变大很多，文档可读性变差，特别是图片较多的情况下</li><li>一般适用于在博客平台的渲染，而不是本地备份时使用，本地备份请优先下载图片到本地或上传到图床</li></ol><h2 id="flowus-息流" tabindex="-1">FlowUs（息流） <a class="header-anchor" href="#flowus-息流" aria-hidden="true">#</a></h2><p>FlowUs 模版获取、关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#flowus">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>tablePageId</td><td>是</td><td>string</td><td>flowus 中的多维表格ID</td><td>-</td></tr><tr><td>filter</td><td>否</td><td>boolean｜object</td><td>过滤条件</td><td>false</td></tr><tr><td>sort</td><td>否</td><td>boolean｜string｜object[]</td><td>排序条件</td><td>false</td></tr><tr><td>catalog</td><td>否</td><td>boolean｜object</td><td>目录信息配置</td><td>false</td></tr><tr><td>limit</td><td>否</td><td>number</td><td>文档下载并发数</td><td>3</td></tr></tbody></table><h3 id="filter-字段说明-1" tabindex="-1">Filter 字段说明 <a class="header-anchor" href="#filter-字段说明-1" aria-hidden="true">#</a></h3><p><code>filter</code>字段是为了筛选 FlowUs 多维表文档，表示哪些文章需要被 Elog 下载。</p><ol><li><p>默认值为<code>false</code>，即不过滤文档，全部下载</p></li><li><p>如果设置为<code>true</code>，会按照以下规则进行过滤</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 表示将按照多维表中的【status】字段进行过滤，保留所有【已发布】的文档</span></span>
<span class="line"><span style="color:#BABED8;">filter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">已发布</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>如果想自定义过滤文档，可以指定多维表的属性名称和值进行过滤。目前只支持<strong>与</strong>逻辑，不支持<strong>或</strong>逻辑</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 表示将按照多维表中的【status】字段进行过滤，保留所有【已发布】的文档</span></span>
<span class="line"><span style="color:#BABED8;">filter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  value: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已发布</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 表示将按照多维表中的【status】和【tag】字段进行过滤，保留所有status=已发布 且 tag=技术方案的文档</span></span>
<span class="line"><span style="color:#BABED8;">filter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">	  value: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已发布</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">	  value: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">技术方案</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">]</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="sort-字段说明" tabindex="-1">sort 字段说明 <a class="header-anchor" href="#sort-字段说明" aria-hidden="true">#</a></h3><p><code>sorts</code> 字段是为了对 FlowUs 多维表文档进行排序，以便生成一定顺序的目录信息，<strong>对文档的同步不影响</strong>。</p><p>例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。</p><ol><li><p>默认值为<code>false</code>，不进行排序</p></li><li><p>当<code>sort=true</code>，会按照文档的创建时间倒序排列</p></li><li><p>Elog 提供了一些预设参数，如下。例如<code>sort=sortDesc</code>即按照多维表中的 sort 字段进行倒序排列</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">enum</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FlowUsSortPresetEnum</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按自定义日期排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  dateDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dateDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  dateAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dateAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 正序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按创建时间排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  createTimeDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">createTimeDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  createTimeAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">createTimeAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 正序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按更新时间排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  updateTimeDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateTimeDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  updateTimeAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateTimeAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 正序</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/** 按sort字段排序 */</span></span>
<span class="line"><span style="color:#BABED8;">  sortDesc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sortDesc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 倒序</span></span>
<span class="line"><span style="color:#BABED8;">  sortAsc </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sortAsc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 正序</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>如果需要自定义排序时，可以指定多维表的属性名称和值进行自定义排序。暂不支持多个排序条件</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 表示将按照多维表中的【sort】字段进行【倒序】排列</span></span>
<span class="line"><span style="color:#BABED8;">sort </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sort</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  direction: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">descending</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// descending：倒序， ascending：正序</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="catalog-字段说明-1" tabindex="-1">Catalog 字段说明 <a class="header-anchor" href="#catalog-字段说明-1" aria-hidden="true">#</a></h3><p><code>catalog</code>字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，<strong>对文档的同步不影响</strong>。</p><ol><li><p>默认值为<code>false</code>，即不记录文档的目录信息</p></li><li><p>当<code>catalog=true</code>，则表示按照数据库的<code>catalog</code>字段进行记录</p></li><li><p>当需要自定义属性时，则可按照以下格式进行配置</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">catalog </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">自定义属性</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>当需要配置<code>catalog</code>字段时，请保证数据库有相关属性存在（支持单选/多选）</p></li><li><p><code>catalog</code>字段为单选时，只能生成一层目录</p></li><li><p><code>catalog</code>字段为多选时，可生成多级目录，<strong>但是需要保证标签的顺序</strong></p></li></ol><blockquote><p>注意：对于Notion和FlowUs，想要开启按指定目录分类下载，还需要开启<code>deploy.local.catalog=true</code></p></blockquote><h2 id="飞书" tabindex="-1">飞书 <a class="header-anchor" href="#飞书" aria-hidden="true">#</a></h2><blockquote><p><code>0.9.0</code>及以上版本支持知识库导出</p></blockquote><p>飞书关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#飞书">关键信息获取</a> 页面。</p><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>否</td><td>从知识库下载(wiki)/我的空间(space)下载文档</td><td>space</td></tr><tr><td>wikiId</td><td>否</td><td>知识库ID</td><td>-</td></tr><tr><td>folderToken</td><td>否</td><td>目标文件夹token</td><td>-</td></tr><tr><td>appId</td><td>是</td><td>飞书自建应用appId</td><td>-</td></tr><tr><td>appSecret</td><td>是</td><td>飞书自建应用appSecret</td><td>-</td></tr><tr><td>baseUrl</td><td>否</td><td>飞书 api 请求地址，国内飞书无须配置，国际版飞书可配置为<a href="https://open.larksuite.com/open-apis" target="_blank" rel="noreferrer">https://open.larksuite.com/open-apis</a></td><td><a href="https://open.feishu.cn/open-apis" target="_blank" rel="noreferrer">https://open.feishu.cn/open-apis</a></td></tr><tr><td>disableParentDoc</td><td>否</td><td>是否忽略存在子文档的父文档，将其视作文件夹。<code>0.12.1</code> 及以上版本可用</td><td>false</td></tr><tr><td>limit</td><td>否</td><td>文档下载并发数</td><td>3</td></tr></tbody></table><h3 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-hidden="true">#</a></h3><blockquote><p>当 <code>type</code> 为 <code>space</code>（我的空间）时，<code>folderToken</code>为必填，表示从「我的空间」中的指定文件夹内下载文档。</p><p>当 <code>type</code> 为 <code>wiki</code>（知识库）时，wikiId 为必填，<code>folderToken</code>可选，表示从指定知识库中的指定目录内下载文档，<code>folderToken</code>不填时，默认下载整个知识库。</p><p><code>type</code> 不填时，默认为从我的空间下载，<code>folderToken</code>为必填字段</p></blockquote><h3 id="知识库与我的空间区别" tabindex="-1">知识库与我的空间区别 <a class="header-anchor" href="#知识库与我的空间区别" aria-hidden="true">#</a></h3><p>「我的空间」中<strong>存在</strong>文件夹，文档可以放置在文件夹之下</p><p>「知识库」中<strong>不存在</strong>文件夹，但文档本身可以当做文件夹，文档下可以继续放置文档</p><p>当开启<a href="/notion/xe160pqsumi6bqnz"><strong>按目录存放文档</strong></a> 时，因为知识库中不存在文件夹概念，如果父文档下有子文档，会在本地生成父文档的同时，创建和父文档同名的文件夹，子文档会放在该文件夹之下。</p><p><code>0.12.1</code>及以上版本可设置 <code>disableParentDoc</code> 属性，用来控制：当父文档下存在文档时，父文档是否作为文件夹使用</p><p><img src="https://image.1874.cool/elog-docs-images/56a52870c6d2bcfaa9381129dff0ad98.png" alt="Untitled.png"></p><p>例如：当<code>disableParentDoc=false</code>或不设置时，默认是将以上 6 个文档全部下载，会在本地生成父文档的同时，创建和父文档同名的文件夹，子文档会放在该文件夹之下。</p><p>当<code>disableParentDoc=true</code>时，则只会下载「测试」和「四级文档」两篇文档。其他文档因为其<code>children</code>存在文档，会将其作为文件夹，下载到本地的「四级文档」会被放置在文件夹之中。</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p><strong>点击</strong> <a href="/notion/deploy-platform">下一篇</a> <strong>继续配置部署平台</strong></p>`,60),e=[l];function p(c,r,d,i,D,y){return t(),a("div",null,e)}const h=s(o,[["render",p]]);export{B as __pageData,h as default};