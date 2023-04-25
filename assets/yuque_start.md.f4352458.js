import{_ as s,c as a,o as n,a as e}from"./app.7ff5e5d3.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"yuque/start.md"}'),l={name:"yuque/start.md"},p=e(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-hidden="true">#</a></h2><p>Elog 项目基于 Node，请确保已具备较新的 Node 环境（&gt;=12.0.0）</p><h2 id="cli-工具安装" tabindex="-1">CLI 工具安装 <a class="header-anchor" href="#cli-工具安装" aria-hidden="true">#</a></h2><p>首先，你需要使用 npm / yarn / pnpm 全局安装<code>@elog/cli</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 npm 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@elog/cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 yarn 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@elog/cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 pnpm 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@elog/cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h2><p>你需要拥有一个 Hexo/Vitepress/HuGo 的项目，进入部署平台根目录下，这里以 Hexo 举例，使用命令进行初始化：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">elog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre></div><p>根据提示初始化成功后，会在根目录生成一份<code>elog.config.js</code> 配置文件和本本地调试用的<code>.elog.env</code>环境变量配置文件。你需要修改一些配置才能进行下一步，详情移步 <a href="/yuque/fe8ywmt999gon12w">配置详情</a> 页面。</p><h2 id="开始同步" tabindex="-1">开始同步 <a class="header-anchor" href="#开始同步" aria-hidden="true">#</a></h2><p>在根目录下，执行同步命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">elog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span></span>
<span class="line"></span></code></pre></div><p><img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Flm8w1xQjM7_RKtrI8PO3K80hO-T.png" alt="image.png"></p>`,14),o=[p];function t(c,r,i,d,h,C){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
