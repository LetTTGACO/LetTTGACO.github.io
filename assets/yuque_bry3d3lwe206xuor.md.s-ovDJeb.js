import{_ as t,c as a,o as e,V as s}from"./chunks/framework.qmJTxtaM.js";const b=JSON.parse('{"title":"CLI命令","description":"","frontmatter":{},"headers":[],"relativePath":"yuque/bry3d3lwe206xuor.md","filePath":"yuque/bry3d3lwe206xuor.md","lastUpdated":1706278398000}'),d={name:"yuque/bry3d3lwe206xuor.md"},i=s('<h1 id="cli命令" tabindex="-1">CLI命令 <a class="header-anchor" href="#cli命令" aria-label="Permalink to &quot;CLI命令&quot;">​</a></h1><h2 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init&quot;">​</a></h2><p>初始化Elog配置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init [option] [value]</span></span></code></pre></div><table><thead><tr><th>option</th><th>alias</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--config</td><td>-c</td><td>自定义配置文件的名称</td><td>elog.config.js</td></tr><tr><td>--env</td><td>-e</td><td>自定义缓存文件的名称</td><td>elog.cache.json</td></tr></tbody></table><h2 id="sync" tabindex="-1">sync <a class="header-anchor" href="#sync" aria-label="Permalink to &quot;sync&quot;">​</a></h2><p>同步文章</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync [option] [value]</span></span></code></pre></div><table><thead><tr><th>option</th><th>alias</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--env</td><td>-e</td><td>指定环境文件path</td><td>-</td></tr><tr><td>--config</td><td>-c</td><td>指定配置文件path</td><td>elog.config.js</td></tr><tr><td>--cache</td><td>-a</td><td>指定缓存文件path</td><td>elog.cache.json</td></tr></tbody></table><h2 id="clean" tabindex="-1">clean <a class="header-anchor" href="#clean" aria-label="Permalink to &quot;clean&quot;">​</a></h2><p>清理文章、上次同步缓存、上次同步时间</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean [option] [value]</span></span></code></pre></div><table><thead><tr><th>option</th><th>alias</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--config</td><td>-c</td><td>指定配置文件path，用于读取存储文章目录</td><td>elog.config.js</td></tr><tr><td>--cache</td><td>-a</td><td>指定缓存文件path</td><td>elog.cache.json</td></tr></tbody></table><h2 id="upgrade" tabindex="-1">upgrade <a class="header-anchor" href="#upgrade" aria-label="Permalink to &quot;upgrade&quot;">​</a></h2><p>更新全局 <code>elog</code> 版本到 <code>latest</code> 版本</p><blockquote><p>v0.0.5 以上版本支持。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">elog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre></div>',17),h=[i];function o(l,n,c,p,r,g){return e(),a("div",null,h)}const k=t(d,[["render",o]]);export{b as __pageData,k as default};
