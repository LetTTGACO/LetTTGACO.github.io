import{_ as s,c as n,o as a,d as l}from"./app.fe8ae78b.js";const F=JSON.parse('{"title":"本地调试","description":"","frontmatter":{"status":"已发布","sort":130,"urlname":"local-test","上次编辑时间":"2023-10-13T06:11:00.000Z","catalog":"配置详情","tags":"Elog-Docs","title":"本地调试","date":"2023-10-13 05:27:00","updated":"2023-10-13 06:11:00"},"headers":[],"relativePath":"notion/local-test.md","lastUpdated":1697178092000}'),p={name:"notion/local-test.md"},o=l(`<h1 id="本地调试" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试" aria-hidden="true">#</a></h1><h2 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a></h2><p>Elog 配置文件默认为<code>elog.config.js</code>，可在配置文件中通过<code>p<wbr>rocess.env.xxx</code>根据需要自定义环境变量，一般不需要改动，只有当环境变量冲突时才需要变更。</p><blockquote><p>⚠️ 为了安全，在实际配置中请不要将敏感信息直接写在配置文件中，Elog 提供了更优雅的本地调试方式。</p></blockquote><h2 id="本地调试-1" tabindex="-1">本地调试 <a class="header-anchor" href="#本地调试-1" aria-hidden="true">#</a></h2><p>为了方便本地调试，Elog 支持从本地文件中获取环境变量。只需要在部署平台根目录新增<code>.elog.env</code>文件，将用到的配置写入，然后在执行同步命令时指定环境变量文件即可。</p><blockquote><p>⚠️ 注意：请将<code>.elog.env</code>文件加入 <code>.gitignore</code>，防止误提交到 git 仓库</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">指定同步时读取的环境变量</span></span>
<span class="line"><span style="color:#FFCB6B;">elog</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">sync</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.elog.env</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># .elog.env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 语雀（Token方式）</span></span>
<span class="line"><span style="color:#BABED8;">YUQUE_TOKEN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 语雀（帐号密码方式）</span></span>
<span class="line"><span style="color:#BABED8;">YUQUE_USERNAME</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">YUQUE_PWD</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">YUQUE_LOGIN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">YUQUE_REPO</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Notion</span></span>
<span class="line"><span style="color:#BABED8;">NOTION_TOKEN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">NOTION_DATABASE_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># FlowUs</span></span>
<span class="line"><span style="color:#BABED8;">FLOWUS_TABLE_PAGE_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 飞书</span></span>
<span class="line"><span style="color:#BABED8;">FEISHU_APP_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">FEISHU_APP_SECRET</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">FEISHU_FOLDER_TOKEN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Confluence</span></span>
<span class="line"><span style="color:#BABED8;">CONFLUENCE_BASE_URL</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">CONFLUENCE_USER</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">CONFLUENCE_PASSWORD</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">CONFLUENCE_SPACE_KEY</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">CONFLUENCE_ROOT_PAGE_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#WordPress</span></span>
<span class="line"><span style="color:#BABED8;">WORDPRESS_USERNAME</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">WORDPRESS_PASSWORD</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">WORDPRESS_ENDPOINT</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 腾讯云</span></span>
<span class="line"><span style="color:#BABED8;">COS_SECRET_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">COS_SECRET_KEY</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">COS_BUCKET</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">COS_REGION</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">COS_HOST</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 阿里云</span></span>
<span class="line"><span style="color:#BABED8;">OSS_SECRET_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">OSS_SECRET_KEY</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">OSS_BUCKET</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">OSS_REGION</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">OSS_HOST</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 七牛云</span></span>
<span class="line"><span style="color:#BABED8;">QINIU_SECRET_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">QINIU_SECRET_KEY</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">QINIU_BUCKET</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">QINIU_REGION</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">QINIU_HOST</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 又拍云</span></span>
<span class="line"><span style="color:#BABED8;">UPYUN_USER</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">UPYUN_PASSWORD</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">UPYUN_BUCKET</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">UPYUN_HOST</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Github</span></span>
<span class="line"><span style="color:#BABED8;">GITHUB_USER</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">GITHUB_TOKEN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#BABED8;">GITHUB_REPO</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span></code></pre></div><h2 id="自动化配置" tabindex="-1">自动化配置 <a class="header-anchor" href="#自动化配置" aria-hidden="true">#</a></h2><p>自动化时，需要提前将以上<code>.elog.env</code>中用到的变量信息配置到环境变量上。 以 Github 为例，可以在仓库的<code>设置-Secrets and variables-Actions-Secrets</code>中进行配置，然后在流水线中注入即可。</p><blockquote><p>记得在仓库的<code>设置-Action-Workflow permissions</code>中开启读写权限</p></blockquote><p>详细的自动化配置请移步 <a href="/notion/vy55q9xwlqlsfrvk">持续集成</a> 页面。</p>`,13),e=[o];function c(t,r,i,D,E,y){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{F as __pageData,_ as default};
