import{_ as a,c as s,o as e,V as i}from"./chunks/framework.qmJTxtaM.js";const u=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"yuque-pwd/start.md","filePath":"yuque-pwd/start.md","lastUpdated":1706278398000}'),t={name:"yuque-pwd/start.md"},n=i(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><p>Elog 项目基于 Node，请确保已具备较新的 Node 环境（&gt;=12.0.0）</p><h2 id="cli-工具安装" tabindex="-1">CLI 工具安装 <a class="header-anchor" href="#cli-工具安装" aria-label="Permalink to &quot;CLI 工具安装&quot;">​</a></h2><p>首先，你需要使用 npm / yarn / pnpm 全局安装<code>@elog/cli</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 npm 安装 CLI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install @elog/cli -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 yarn 安装 CLI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global add @elog/cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 pnpm 安装 CLI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install @elog/cli -g</span></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><p>你需要拥有一个 Hexo/Vitepress/HuGo 的项目，进入部署平台根目录下，这里以 Hexo 举例，使用命令进行初始化：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>根据提示初始化成功后，会在根目录生成一份<code>elog.config.js</code> 配置文件和本地调试用的<code>.elog.env</code>环境变量配置文件。你需要修改一些配置才能进行下一步，详情移步 <a href="/yuque/fe8ywmt999gon12w">配置详情</a> 页面。</p><h2 id="开始同步" tabindex="-1">开始同步 <a class="header-anchor" href="#开始同步" aria-label="Permalink to &quot;开始同步&quot;">​</a></h2><p>在根目录下，执行同步命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync</span></span></code></pre></div><p><img src="https://image.1874.cool/elog-docs-images/becbb0ace18f9fb279a1a9b88c1d8a9f.png" alt="image.png"></p>`,14),l=[n];function p(h,o,c,d,r,k){return e(),s("div",null,l)}const b=a(t,[["render",p]]);export{u as __pageData,b as default};
