import{_ as s,c as a,o as n,a as t}from"./app.8895159e.js";const h=JSON.parse('{"title":"图床平台配置","description":"","frontmatter":{"status":"已发布","sort":120,"urlname":"image-platform","上次编辑时间":"2023-10-28T15:48:00.000Z","catalog":"配置详情","tags":"Elog-Docs","title":"图床平台配置","date":"2023-10-13 05:24:00","updated":"2023-10-28 15:48:00"},"headers":[],"relativePath":"notion/image-platform.md","lastUpdated":1698508168000}'),l={name:"notion/image-platform.md"},o=t(`<h1 id="图床平台配置" tabindex="-1">图床平台配置 <a class="header-anchor" href="#图床平台配置" aria-hidden="true">#</a></h1><p>图床关键信息获取及配置流程请移步 <a href="/notion/gvnxobqogetukays#图床">关键信息获取</a> 页面。</p><h2 id="本地存储-local" tabindex="-1">本地存储（local） <a class="header-anchor" href="#本地存储-local" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>outputDir</td><td>是</td><td>图片输出目录</td><td>-</td></tr><tr><td>prefixKey</td><td>否</td><td>图片资源统一前缀</td><td>-</td></tr><tr><td>pathFollowDoc</td><td>否</td><td>路径根据文档计算</td><td>false</td></tr><tr><td>imagePathExt</td><td>否</td><td>图片路径拓展点</td><td>-</td></tr></tbody></table><h3 id="prefixkey-字段说明" tabindex="-1">prefixKey 字段说明 <a class="header-anchor" href="#prefixkey-字段说明" aria-hidden="true">#</a></h3><blockquote><p>如果只是想把文档及图片下载到本地作为备份，应该优先考虑<code>pathFollowDoc</code>配置</p></blockquote><ol><li>本地部署平台一般会有资源根目录，会将某个文件夹视为根目录，而<code>prefixKey</code>就是配置资源目录的前缀</li><li>例如 Vitpress，如果<code>outputDir=./docs/asset/images</code>，则<code>prefixKey=/asset/images</code></li></ol><h3 id="pathfollowdoc-字段说明" tabindex="-1">pathFollowDoc 字段说明 <a class="header-anchor" href="#pathfollowdoc-字段说明" aria-hidden="true">#</a></h3><blockquote><p><code>@elog/cli@0.9.0-beta.4</code>及以上版本可用</p></blockquote><p>图片路径会相对文档位置自动变化，<code>prefixKey</code>字段会自动失效。适用于多层级文档时图片能正常访问。</p><p>假如文档 A 的存放路径为 <code>./docs/首页/文档 A.md</code></p><p>图片<strong>统一</strong>输出目录(<code>outputDir</code>)为 <code>./docs/images</code></p><p>则图片在文档 A 中的路径应为<code>../../images/test.jpg</code></p><h3 id="imagepathext-字段说明" tabindex="-1">imagePathExt 字段说明 <a class="header-anchor" href="#imagepathext-字段说明" aria-hidden="true">#</a></h3><blockquote><p><code>@elog/cli@0.9.0-beta.4</code>及以上版本可用</p></blockquote><p>图片路径拓展点路径。一般适用于按自定义规则存放图片。例如可以<strong>让所有图片按照文档标题为文件夹</strong>存放。</p><ol><li>目前只支持 Common Js 标准拓展点</li><li>拓展点需要暴露一个<strong>同步</strong>的 <code>getImagePath</code> 的方法</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 自定义图片路径处理器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">DocDetail</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#676E95;font-style:italic;"> doc的类型定义为 DocDetail</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> 返回处理后图片存放地址dirPath和文档中图片的前缀prefixKey</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getImagePath </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">doc</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 当前文档文档的存在路径，例如：docs/yuque</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">docPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">docPath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 当前文档标题</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">properties</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">title</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 当前文档其他属性</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 具体可查看elog.cache.json文件docs中的结构</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">properties</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">properties</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 假设文档标题为【标题1】，文档存放路径docPath为：docs/yuque</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 那么图片存放位置dirPath为: docs/yuque/标题1/</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 文档图片前缀prefixKey为: ./标题1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 假设文档标题为【标题2】，文档存放路径docPath为：docs/yuque/首页文件夹</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 那么图片存放位置dirPath为:docs/yuque/标题2/</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 文档图片前缀prefixKey为../标题2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">dirPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">docPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">title</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 图片存放位置</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">prefixKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">relative</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">docPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">dirPath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 图片前缀</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 必须返回这两个字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">dirPath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">prefixKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  getImagePath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="腾讯云-cos-阿里云-oss-七牛云-qiniu" tabindex="-1">腾讯云（cos）/阿里云（oss）/七牛云（qiniu） <a class="header-anchor" href="#腾讯云-cos-阿里云-oss-七牛云-qiniu" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>secretId</td><td>是</td><td>图床密钥 ID</td><td>-</td></tr><tr><td>secretKey</td><td>是</td><td>图床密钥 KEY</td><td>-</td></tr><tr><td>bucket</td><td>是</td><td>桶名称/七牛云空间</td><td>-</td></tr><tr><td>region</td><td>是</td><td>存储区域，<strong>七牛云可不填</strong></td><td>-</td></tr><tr><td>host</td><td>否</td><td>指定域名，<strong>七牛云必填</strong></td><td>-</td></tr><tr><td>prefixKey</td><td>否</td><td>上传路径，默认上传到根路径</td><td>-</td></tr><tr><td>secretExt</td><td>否</td><td>图床密钥拓展点</td><td>-</td></tr></tbody></table><h2 id="又拍云-upyun" tabindex="-1">又拍云（upyun） <a class="header-anchor" href="#又拍云-upyun" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>user</td><td>是</td><td>操作员账号</td><td>-</td></tr><tr><td>password</td><td>是</td><td>操作员密码</td><td>-</td></tr><tr><td>bucket</td><td>是</td><td>服务名</td><td>-</td></tr><tr><td>host</td><td>否</td><td>指定域名，又拍云会默认提供 30 天的临时测试域名，建议配置自定义域名</td><td>临时域名：<a href="http://xxx.est.upcdn.net" target="_blank" rel="noreferrer">http://xxx.est.upcdn.net</a></td></tr><tr><td>prefixKey</td><td>否</td><td>上传路径，默认上传到根路径</td><td>-</td></tr><tr><td>secretExt</td><td>否</td><td>图床密钥拓展点</td><td>-</td></tr></tbody></table><h2 id="github-图床-github" tabindex="-1">Github 图床（github） <a class="header-anchor" href="#github-图床-github" aria-hidden="true">#</a></h2><table><thead><tr><th>字段</th><th>必填</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>token</td><td>是</td><td>Github Token</td><td>-</td></tr><tr><td>user</td><td>是</td><td>用户名</td><td>-</td></tr><tr><td>repo</td><td>是</td><td>仓库名</td><td>-</td></tr><tr><td>branch</td><td>否</td><td>分支</td><td>master</td></tr><tr><td>host</td><td>否</td><td>加速域名，取值 <a href="http://cdn.jsdelivr.net" target="_blank" rel="noreferrer">cdn.jsdelivr.net</a></td><td>-</td></tr><tr><td>prefixKey</td><td>否</td><td>上传路径，默认上传到根路径</td><td>-</td></tr><tr><td>secretExt</td><td>否</td><td>图床密钥拓展点</td><td>-</td></tr></tbody></table><h3 id="secretext-字段说明" tabindex="-1">secretExt 字段说明 <a class="header-anchor" href="#secretext-字段说明" aria-hidden="true">#</a></h3><p>图床密钥拓展点路径，一般适用于不想直接配置 AK 到环境变量或者本地，而是通过异步接口获取</p><ol><li><p>目前只支持 Common Js 标准拓展点</p></li><li><p>拓展点需要暴露一个<strong>同步/异步</strong>的 <code>getSecret</code> 的方法</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> axios </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getOssSts </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://xxxx/oss/sts?directory=elog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getSecret </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getOssSts</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">accessKeyId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">accessKeySecret</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">securityToken</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">dir</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">region</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">bucket</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    secretId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">accessKeyId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    secretKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">accessKeySecret</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    stsToken</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">securityToken</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    secure</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    prefixKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">dir</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">region</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">bucket</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  getSecret</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>getSecret</code> 返回的密钥信息需要符合图床实例 SDK 的字段要求，具体请参考对应图床 SDK/API</p></li></ol><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p><strong>马上就大功告成了，最后一步：点击</strong> <a href="/notion/local-test">下一篇</a> <strong>继续配置本地调试环境</strong></p>`,29),p=[o];function e(c,r,y,d,i,F){return n(),a("div",null,p)}const B=s(l,[["render",e]]);export{h as __pageData,B as default};
