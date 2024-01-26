import{_ as e,c as a,o,V as t}from"./chunks/framework.qmJTxtaM.js";const u=JSON.parse('{"title":"关键信息获取","description":"","frontmatter":{"sort":70,"urlname":"gvnxobqogetukays","catalog":"入门指引","tags":"Elog-Docs","title":"关键信息获取","date":"2023-04-06 21:31:00","updated":"2023-11-30 18:21:00"},"headers":[],"relativePath":"notion/gvnxobqogetukays.md","filePath":"notion/gvnxobqogetukays.md","lastUpdated":1706278398000}'),r={name:"notion/gvnxobqogetukays.md"},i=t('<h1 id="关键信息获取" tabindex="-1">关键信息获取 <a class="header-anchor" href="#关键信息获取" aria-label="Permalink to &quot;关键信息获取&quot;">​</a></h1><h2 id="语雀" tabindex="-1">语雀 <a class="header-anchor" href="#语雀" aria-label="Permalink to &quot;语雀&quot;">​</a></h2><h3 id="login" tabindex="-1">login <a class="header-anchor" href="#login" aria-label="Permalink to &quot;login&quot;">​</a></h3><p>语雀个人路径。访问<a href="https://www.yuque.com/dashboard" target="_blank" rel="noreferrer">工作台</a> =&gt; 账户设置 =&gt; 账户设置 =&gt; 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。例如 <code>1874w</code> 才是 <code>login</code> 取值</p><blockquote><p>使用语雀团队知识库时，<code>login</code> 为团队路径，不是个人路径<br> 假设这是你的语雀团队的某个知识库地址：<code>https://aaaa.yuque.com/bbbb/cccc</code><br><code>host = https://aaaa.yuque.com</code>（账号密码模式）<br><code>baseUrl=https://aaaa.yuque.com/api/v2</code>（Token 模式）<br><code>login=bbbb</code><br><code>repo=cccc</code></p></blockquote><p><img src="https://image.1874.cool/elog-docs-images/277511285f7328c7c6dfc595e1a429c2.png" alt="name=image.png"></p><h3 id="repo" tabindex="-1">repo <a class="header-anchor" href="#repo" aria-label="Permalink to &quot;repo&quot;">​</a></h3><p>语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 =&gt; 更多设置 =&gt; 知识库信息，拿到语雀知识库路径。</p><p><img src="https://image.1874.cool/elog-docs-images/5cedeeb7cbcc5e8ed25f7efb8b510fb6.png" alt="name=image.png"></p><p><img src="https://image.1874.cool/elog-docs-images/61dce475fb779c1e9aaa039e423ab2f1.png" alt="name=image.png"></p><h3 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>语雀 Token，访问<a href="https://www.yuque.com/dashboard" target="_blank" rel="noreferrer">工作台</a> =&gt; 账户设置 =&gt; Token =&gt; 新建 token 并配置好只读权限。Access Token 即为语雀 Token。</p><p><img src="https://image.1874.cool/elog-docs-images/fa819f24b275c1a8598242c80082bbb1.png" alt="name=image.png"></p><h2 id="notion" tabindex="-1">Notion <a class="header-anchor" href="#notion" aria-label="Permalink to &quot;Notion&quot;">​</a></h2><h3 id="配置流程" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程" aria-label="Permalink to &quot;配置流程&quot;">​</a></h3><ol><li>使用 <a href="https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6" target="_blank" rel="noreferrer">Database 模板</a> 创建数据库副本或增加必要属性到已有 Notion 数据库 <ol><li>博客平台为Hexo时，可参考<a href="https://1874.notion.site/867486af567f4a8897427b15ffd10b3c?v=a25aec8e27d5415e8605e43034f822bd&amp;pvs=4" target="_blank" rel="noreferrer">elog-hexo-template</a> 创建数据库副本或增加必要属性到已有 Notion 数据库</li><li>博客平台为 VitePress 时，可参考<a href="https://1874.notion.site/260f012f7223416b82088d3e061dae9f?v=2385a58a18cd45d6b2e8abb3aa3d82a2&amp;pvs=4" target="_blank" rel="noreferrer">elog-vitepress-template</a> 创建数据库副本或增加必要属性到已有 Notion 数据库</li><li>博客平台为 Halo 时，可参考<a href="https://1874.notion.site/b061632fc7d644eaa12f3e0f095938fb?v=7491fbb2415c43cf9752a7e4ad9f41a5" target="_blank" rel="noreferrer">notion-halo</a> 创建数据库副本或增加必要属性到已有 Notion 数据库</li><li>如果使用的是 NotionNext ，可根据配置文档保证必要的数据库字段即可</li></ol></li><li>创建 Integration Token，具体请参考 <a href="https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion" target="_blank" rel="noreferrer">Notion 官方教程</a></li><li>将复制的数据库连接到刚创建的 Integration，具体请参考 <a href="https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions" target="_blank" rel="noreferrer">Notion 官方教程</a></li><li>获取数据库 DatabaseId</li></ol><h3 id="token-1" tabindex="-1">token <a class="header-anchor" href="#token-1" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>参考 <a href="https://developers.notion.com/docs/getting-started#step-1-create-an-integration" target="_blank" rel="noreferrer">Notion 官方教程</a>。登录 <a href="https://www.notion.so/" target="_blank" rel="noreferrer">Niton 网页版</a> =&gt; 访问 <a href="https://www.notion.so/my-integrations" target="_blank" rel="noreferrer">My integrations</a> =&gt; 创建应用 =&gt; 生成 Internal Integration Token</p><p><img src="https://image.1874.cool/elog-docs-images/d12198b05c6aa36a19e45e619ba714c6.png" alt="name=image.png"></p><h3 id="databaseid" tabindex="-1">databaseId <a class="header-anchor" href="#databaseid" aria-label="Permalink to &quot;databaseId&quot;">​</a></h3><p><img src="https://image.1874.cool/elog-docs-images/9e9ccadd310997eb84cf399618d3140e.png" alt="name=image.png"></p><h2 id="flowus" tabindex="-1">FlowUs <a class="header-anchor" href="#flowus" aria-label="Permalink to &quot;FlowUs&quot;">​</a></h2><h3 id="配置流程-1" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程-1" aria-label="Permalink to &quot;配置流程&quot;">​</a></h3><ol><li>使用 <a href="https://flowus.cn/1874/share/cc2a2086-9026-4f93-a8d7-e1fe365623c9" target="_blank" rel="noreferrer">Database 模板</a> 创建一个多维表</li><li>获取多维表的 tablePageId</li></ol><h3 id="tablepageid" tabindex="-1">tablePageId <a class="header-anchor" href="#tablepageid" aria-label="Permalink to &quot;tablePageId&quot;">​</a></h3><p><img src="https://image.1874.cool/elog-docs-images/ebb6c1646a35ff433ca7a5978d583481.png" alt="Untitled.png"></p><h2 id="飞书" tabindex="-1">飞书 <a class="header-anchor" href="#飞书" aria-label="Permalink to &quot;飞书&quot;">​</a></h2><h3 id="配置流程-2" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程-2" aria-label="Permalink to &quot;配置流程&quot;">​</a></h3><ol><li><p>申请飞书个人版</p></li><li><p>进入<a href="https://open.feishu.cn/app" target="_blank" rel="noreferrer">飞书开发者后台</a></p></li><li><p>创建企业自建应用，信息随意填写</p></li><li><p>进入权限管理，云文档，至少开通以下权限</p><ol><li>查看新版文档<code>docx:document:readonly</code></li><li>查看、评论和下载云空间中所有文件<code>drive:drive:readonly</code></li><li>查看、编辑和管理知识库<code>wiki:wiki</code></li></ol></li><li><p>添加应用能力，开通机器人能力</p></li><li><p>创建应用版本，并申请线上发布方可生效（或者创建测试版本）</p></li><li><p>打开凭证与基础信息，获取 <code>App ID(appId)</code> 和 <code>App Secret(appSecret)</code>（区分测试/正式版本应用）</p></li><li><p>打开飞书聊天软件，选择/新建一个群聊，在群设置中添加机器人，搜索你的应用并将其添加到群聊中</p><p><img src="https://image.1874.cool/elog-docs-images/46ffd5ca3364cbbd4a13a6b8dad67826.png" alt="Untitled.png"></p></li><li><p>【可选一】打开飞书云文档，在【我的空间】下选择/新建一个目标文件夹用于Elog导出</p></li><li><p>在目标文件夹页面的右侧点击分享，邀请协作者，将刚才新建的群聊邀请为协作者。如此，自建应用就拥有了该文件夹的访问权限</p><p><img src="https://image.1874.cool/elog-docs-images/ac0754cbadd3e8c9b9f70b59eeccaac8.png" alt="Untitled.png"></p></li><li><p>【可选二】打开飞书云文档，在【知识库】下选择/新建一个知识库用于Elog导出</p></li><li><p>在知识库空间设置-成员设置中将刚才新建的群聊添加为成员/管理员。如此，自建应用就拥有了该知识库的访问权限</p></li></ol><h3 id="foldertoken" tabindex="-1">folderToken <a class="header-anchor" href="#foldertoken" aria-label="Permalink to &quot;folderToken&quot;">​</a></h3><p>我的空间文件夹的URL路径结尾即为<code>folderToken</code>，在知识库中也是类似，文档URL路径结尾</p><p><img src="https://image.1874.cool/elog-docs-images/0cc398bbfe9034f68ece280ea5fcde83.png" alt="Untitled.png"></p><h3 id="wikiid" tabindex="-1">wikiId <a class="header-anchor" href="#wikiid" aria-label="Permalink to &quot;wikiId&quot;">​</a></h3><p>知识库 ID，进入知识库空间设置时URL 路径结尾即为 <code>wikiId</code></p><p><img src="https://image.1874.cool/elog-docs-images/32db6b04a9bb2d9680d5fb1ef6ea9a18.png" alt="Untitled.png"></p><h2 id="halo" tabindex="-1">Halo <a class="header-anchor" href="#halo" aria-label="Permalink to &quot;Halo&quot;">​</a></h2><p>FlowUs平台可复制FlowUs模版库 <a href="https://flowus.cn/1874/share/e4e1e6dc-403b-45e6-b4cd-b3d8e6ae79b1" target="_blank" rel="noreferrer">elog-halo 模板</a> ，其他写作平台请参考此模版库进行配置。语雀/飞书可手动在文档头部指定 Front Matter 进行文档字段配置</p><h3 id="endpoint" tabindex="-1">endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;endpoint&quot;">​</a></h3><p>Halo 站点地址，例如 <code>http://halo.1874.orb.local</code>，区分 <code>http/https</code></p><h3 id="token-2" tabindex="-1">token <a class="header-anchor" href="#token-2" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>Halo 个人令牌，可前往个人中心中创建，需要以下权限</p><ul><li>附件管理</li><li>文章管理</li></ul><h3 id="policyname" tabindex="-1">policyName <a class="header-anchor" href="#policyname" aria-label="Permalink to &quot;policyName&quot;">​</a></h3><p>Halo 的存储策略，可前往附件管理中，F12 打开浏览器开发者控制台，刷新后查看<code>/apis/storage.halo.run/v1alpha1/policies</code>接口，找到返回的<code>metadata.name</code>字段值，默认请设置<code>default-policy</code></p><p><img src="https://image.1874.cool/elog-docs-images/557709eaba58629f4fc6f23924b996c4.png" alt="Untitled.png"></p><h2 id="wordpress" tabindex="-1">WordPress <a class="header-anchor" href="#wordpress" aria-label="Permalink to &quot;WordPress&quot;">​</a></h2><p>Notion平台可复制Notion模版库 <a href="https://1874.notion.site/3bd9c2da264f48bd88457bc9b9c68098" target="_blank" rel="noreferrer">Elog-WordPress 模板</a></p><p>其他平台可参考以上数据库属性</p><h3 id="endpoint-1" tabindex="-1">endpoint <a class="header-anchor" href="#endpoint-1" aria-label="Permalink to &quot;endpoint&quot;">​</a></h3><p>一般情况下为<code>站点地址/wp-json</code>即可，例如<code>http://your.site.com/wp-json</code>，但是需要先开启自己站点的<code>REST API</code>才行。先访问以上连接，如果返回JSON格式的站点信息，即表示成功开启，如果出现404，见下文。</p><h3 id="常见问题" tabindex="-1">常见问题： <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题：&quot;">​</a></h3><h4 id="访问-wp-json路由报错404" tabindex="-1">访问/wp-json路由报错404 <a class="header-anchor" href="#访问-wp-json路由报错404" aria-label="Permalink to &quot;访问/wp-json路由报错404&quot;">​</a></h4><ol><li><p>修改WordPress的固定连接模式为【文章名】</p><p>即<code>http://your.site.com/some-post</code>这种模式进行访问</p></li><li><p>需要开启WordPress的伪静态模式</p><p>需要根据站点的服务器进行设置，<a href="https://cloud.tencent.com/developer/article/1135108" target="_blank" rel="noreferrer">参考文章</a>。例如我使用的是宝塔一键安装，所以直接修改nginx配置即可。</p></li><li><p>手动安装Basic Authentication插件</p><p><a href="https://github.com/WP-API/Basic-Auth" target="_blank" rel="noreferrer">插件地址</a>，手动下载ZIP源码包后，无需解压，直接上传到WordPress插件即可</p></li></ol><h2 id="图床" tabindex="-1">图床 <a class="header-anchor" href="#图床" aria-label="Permalink to &quot;图床&quot;">​</a></h2><h3 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;Github&quot;">​</a></h3><h3 id="token-3" tabindex="-1">token <a class="header-anchor" href="#token-3" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>Github 访问 Token。访问 <a href="https://github.com/settings/tokens/" target="_blank" rel="noreferrer">GIthub Token 配置</a> =&gt; Generate new token =&gt; 勾选必要的参数，生成 token。</p><p><img src="https://image.1874.cool/elog-docs-images/67706173197658927288780acb5563e4.png" alt="name=image.png"></p><h3 id="腾讯云" tabindex="-1">腾讯云 <a class="header-anchor" href="#腾讯云" aria-label="Permalink to &quot;腾讯云&quot;">​</a></h3><h3 id="secretid-secretkey" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey" aria-label="Permalink to &quot;secretId/secretKey&quot;">​</a></h3><p>进入 <a href="https://console.cloud.tencent.com/cam/overview" target="_blank" rel="noreferrer">访问管理</a> =&gt; <a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noreferrer">密钥管理</a> =&gt;【新增密钥】=&gt; 获取 SecretId 和 SecretKey。</p><p><img src="https://image.1874.cool/elog-docs-images/c8868899f9eb3eeb15b6a2086f0d25a5.png" alt="name=image.png"></p><h3 id="bucket-region" tabindex="-1">bucket/region <a class="header-anchor" href="#bucket-region" aria-label="Permalink to &quot;bucket/region&quot;">​</a></h3><p>访问<a href="https://console.cloud.tencent.com/cos/bucket" target="_blank" rel="noreferrer">腾讯云 COS 管理</a>获取</p><h3 id="阿里云" tabindex="-1">阿里云 <a class="header-anchor" href="#阿里云" aria-label="Permalink to &quot;阿里云&quot;">​</a></h3><h3 id="secretid-secretkey-1" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey-1" aria-label="Permalink to &quot;secretId/secretKey&quot;">​</a></h3><p>访问 <a href="https://ram.console.aliyun.com/manage/ak" target="_blank" rel="noreferrer">阿里云密钥管理</a> =&gt; 【创建 AccessKey】 =&gt; 获取 AccessKey ID 和 AccessKey Secret。</p><p><img src="https://image.1874.cool/elog-docs-images/46d99a53d4869761e94939638b44c8bf.png" alt="name=image.png"></p><h3 id="bucket" tabindex="-1">bucket <a class="header-anchor" href="#bucket" aria-label="Permalink to &quot;bucket&quot;">​</a></h3><p>访问<a href="https://oss.console.aliyun.com/bucket" target="_blank" rel="noreferrer">阿里云 Bucket 管理</a> =&gt; 获取 bucket</p><h3 id="region" tabindex="-1">region <a class="header-anchor" href="#region" aria-label="Permalink to &quot;region&quot;">​</a></h3><p>访问<a href="https://oss.console.aliyun.com/bucket" target="_blank" rel="noreferrer">阿里云 Bucket 管理</a> =&gt; 查看图床 Bucket 所在的地域 =&gt; 对照<a href="https://help.aliyun.com/document_detail/140601.html" target="_blank" rel="noreferrer">常用 Region</a> =&gt; 获取 Region Id</p><blockquote><p>根据阿里云的开发文档，对象存储的 region 为 oss- 开头，所以需要给 region id 前面拼接上 oss- 才是完整的 region</p></blockquote><p><img src="https://image.1874.cool/elog-docs-images/f44f27683f0e2498456d53c3260c32f3.png" alt="name=image.png"></p><h3 id="七牛云" tabindex="-1">七牛云 <a class="header-anchor" href="#七牛云" aria-label="Permalink to &quot;七牛云&quot;">​</a></h3><h3 id="secretid-secretkey-2" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey-2" aria-label="Permalink to &quot;secretId/secretKey&quot;">​</a></h3><p>访问 <a href="https://portal.qiniu.com/user/key" target="_blank" rel="noreferrer">七牛云密钥管理</a> =&gt; 【创建密钥】 =&gt; 获取 AccessKey/SecretKey。</p><p><img src="https://image.1874.cool/elog-docs-images/327edf7abb3387bfd2ede1568bbb6a07.png" alt="name=image.png"></p><h3 id="bucket-1" tabindex="-1">bucket <a class="header-anchor" href="#bucket-1" aria-label="Permalink to &quot;bucket&quot;">​</a></h3><p>存储空间名称。访问<a href="https://portal.qiniu.com/kodo/bucket" target="_blank" rel="noreferrer">七牛云空间管理</a>获取</p><h3 id="region-1" tabindex="-1">region <a class="header-anchor" href="#region-1" aria-label="Permalink to &quot;region&quot;">​</a></h3><p>存储地域。<a href="https://developer.qiniu.com/kodo/1671/region-endpoint-fq" target="_blank" rel="noreferrer">存储区域 - 七牛开发者中心</a></p><p>一般不需要填写，如需指定，目前只支持以下取值</p><ul><li>Zone_z0</li><li>Zone_z1</li><li>Zone_z2</li><li>Zone_na0</li><li>Zone_as0</li></ul><h3 id="又拍云" tabindex="-1">又拍云 <a class="header-anchor" href="#又拍云" aria-label="Permalink to &quot;又拍云&quot;">​</a></h3><h3 id="user-password" tabindex="-1">user/password <a class="header-anchor" href="#user-password" aria-label="Permalink to &quot;user/password&quot;">​</a></h3><p>访问 <a href="https://console.upyun.com/account/operators/" target="_blank" rel="noreferrer">又拍云操作员管理</a> =&gt; 【添加操作员】 =&gt; 获取 <code>user/password</code>。</p><p><img src="https://image.1874.cool/elog-docs-images/36f7c4f43f20f4c5b0ab35e1945ad34c.png" alt="name=image.png"></p><h3 id="bucket-region-1" tabindex="-1">bucket/region <a class="header-anchor" href="#bucket-region-1" aria-label="Permalink to &quot;bucket/region&quot;">​</a></h3><p>又拍云没有 bucket 和 region 的概念，只有服务名。bucket = 服务名，region 不需要填写。访问<a href="https://console.upyun.com/services/file/" target="_blank" rel="noreferrer">又拍云云存储</a>获取服务名。</p>',90),n=[i];function l(c,s,d,h,p,g){return o(),a("div",null,n)}const f=e(r,[["render",l]]);export{u as __pageData,f as default};
