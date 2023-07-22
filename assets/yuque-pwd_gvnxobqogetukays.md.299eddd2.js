import{_ as e,c as a,o as r,a as t}from"./app.a4973cc4.js";const b=JSON.parse('{"title":"关键信息获取","description":"","frontmatter":{},"headers":[],"relativePath":"yuque-pwd/gvnxobqogetukays.md","lastUpdated":1690054467000}'),o={name:"yuque-pwd/gvnxobqogetukays.md"},n=t('<h1 id="关键信息获取" tabindex="-1">关键信息获取 <a class="header-anchor" href="#关键信息获取" aria-hidden="true">#</a></h1><h2 id="语雀" tabindex="-1">语雀 <a class="header-anchor" href="#语雀" aria-hidden="true">#</a></h2><h3 id="login" tabindex="-1">login <a class="header-anchor" href="#login" aria-hidden="true">#</a></h3><p>语雀个人路径。访问<a href="https://www.yuque.com/dashboard" target="_blank" rel="noreferrer">工作台</a> =&gt; 账户设置 =&gt; 账户设置 =&gt; 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。 <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/a00f2424a5d05a2e0f99b9a0a0e29736.png" alt="image.png"></p><h3 id="repo" tabindex="-1">repo <a class="header-anchor" href="#repo" aria-hidden="true">#</a></h3><p>语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 =&gt; 更多设置 =&gt; 知识库信息，拿到语雀知识库路径。 <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/d3a7faac015e02c0a440b939664902e9.png" alt="image.png"><img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/0a3c3af657d460cf8ab344c971c17843.png" alt="image.png"></p><h3 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-hidden="true">#</a></h3><p>语雀 Token，访问<a href="https://www.yuque.com/dashboard" target="_blank" rel="noreferrer">工作台</a> =&gt; 账户设置 =&gt; Token =&gt; 新建 token 并配置好只读权限。Access Token 即为语雀 Token。 <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/888b460d2ca7213b756740407bd59ce5.png" alt="image.png"></p><h2 id="notion" tabindex="-1">Notion <a class="header-anchor" href="#notion" aria-hidden="true">#</a></h2><h3 id="配置流程" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程" aria-hidden="true">#</a></h3><ol><li>使用 <a href="https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6" target="_blank" rel="noreferrer">Database 模板</a> 创建一个数据库</li><li>创建 Integration Token，具体请参考 <a href="https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration" target="_blank" rel="noreferrer">Notion 官方教程</a></li><li>将复制的数据库连接到刚创建的 Integration，具体请参考 <a href="https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration" target="_blank" rel="noreferrer">Notion 官方教程</a></li><li>获取数据库 DatabaseId</li></ol><h3 id="token-1" tabindex="-1">token <a class="header-anchor" href="#token-1" aria-hidden="true">#</a></h3><p>参考 <a href="https://developers.notion.com/docs/getting-started#step-1-create-an-integration" target="_blank" rel="noreferrer">Notion 官方教程</a> 。登录 <a href="https://www.notion.so/" target="_blank" rel="noreferrer">Niton 网页版</a> =&gt; 访问 <a href="https://www.notion.so/my-integrations" target="_blank" rel="noreferrer">My integrations</a> =&gt; 创建应用 =&gt; 生成 Internal Integration Token <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/4222b6361b7a627e6ac38f10cdf7f167.png" alt="image.png"></p><h3 id="databaseid" tabindex="-1">databaseId <a class="header-anchor" href="#databaseid" aria-hidden="true">#</a></h3><p><img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/f6631e8a748b1202e723cd8f9cdf9c06.png" alt="image.png"></p><h2 id="图床" tabindex="-1">图床 <a class="header-anchor" href="#图床" aria-hidden="true">#</a></h2><h3 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-hidden="true">#</a></h3><h4 id="token-2" tabindex="-1">token <a class="header-anchor" href="#token-2" aria-hidden="true">#</a></h4><p>Github 访问 Token。访问 <a href="https://github.com/settings/tokens/" target="_blank" rel="noreferrer">GIthub Token 配置</a> =&gt; Generate new token =&gt; 勾选必要的参数，生成 token。 <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/81af1900e42a23183b112a0de2d7c5df.png" alt="image.png"></p><h3 id="腾讯云" tabindex="-1">腾讯云 <a class="header-anchor" href="#腾讯云" aria-hidden="true">#</a></h3><h4 id="secretid-secretkey" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey" aria-hidden="true">#</a></h4><p>进入<a href="https://console.cloud.tencent.com/cam/overview" target="_blank" rel="noreferrer">访问管理</a> =&gt; <a href="https://console.cloud.tencent.com/cam/capi" target="_blank" rel="noreferrer">密钥管理</a> =&gt;【新增密钥】=&gt; 获取 SecretId 和 SecretKey <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/6c35b4db2eaba31e1fd0c338624028c3.png" alt="image.png"></p><h4 id="bucket-region" tabindex="-1">bucket/region <a class="header-anchor" href="#bucket-region" aria-hidden="true">#</a></h4><p>访问<a href="https://console.cloud.tencent.com/cos/bucket" target="_blank" rel="noreferrer">腾讯云 COS 管理</a>获取</p><h3 id="阿里云" tabindex="-1">阿里云 <a class="header-anchor" href="#阿里云" aria-hidden="true">#</a></h3><h4 id="secretid-secretkey-1" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey-1" aria-hidden="true">#</a></h4><p>访问<a href="https://ram.console.aliyun.com/manage/ak" target="_blank" rel="noreferrer">阿里云密钥管理</a> =&gt; 【创建 AccessKey】 =&gt; 获取 AccessKey ID 和 AccessKey Secret <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/25c64065a3b840cad72ed574c5584d8e.png" alt="image.png"></p><h4 id="bucket" tabindex="-1">bucket <a class="header-anchor" href="#bucket" aria-hidden="true">#</a></h4><p>访问<a href="https://oss.console.aliyun.com/bucket" target="_blank" rel="noreferrer">阿里云 Bucket 管理</a> =&gt; 获取 bucket</p><h4 id="region" tabindex="-1">region <a class="header-anchor" href="#region" aria-hidden="true">#</a></h4><p>访问<a href="https://oss.console.aliyun.com/bucket" target="_blank" rel="noreferrer">阿里云 Bucket 管理</a> =&gt; 查看图床 Bucket 所在的地域 =&gt; 对照<a href="https://help.aliyun.com/document_detail/140601.html" target="_blank" rel="noreferrer">常用 Region</a> =&gt; 获取 Region Id</p><blockquote><p>根据<a href="https://help.aliyun.com/document_detail/111265.htm#concept-uxl-2vb-dhb" target="_blank" rel="noreferrer">阿里云的开发文档</a>，对象存储的 region 为 oss- 开头，所以需要给 region id 前面拼接上 oss- 才是完整的 region</p></blockquote><p><img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/f79e4bc0865e716219ad8f96c3ea3f7a.png" alt="image.png"></p><h3 id="七牛云" tabindex="-1">七牛云 <a class="header-anchor" href="#七牛云" aria-hidden="true">#</a></h3><h4 id="secretid-secretkey-2" tabindex="-1">secretId/secretKey <a class="header-anchor" href="#secretid-secretkey-2" aria-hidden="true">#</a></h4><p>访问<a href="https://portal.qiniu.com/user/key" target="_blank" rel="noreferrer">七牛云密钥管理</a> =&gt; 【创建密钥】 =&gt; 获取 AccessKey/SecretKey <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/0347a8f7154d3a78cbf37b9389887eeb.png" alt="image.png"></p><h4 id="bucket-1" tabindex="-1">bucket <a class="header-anchor" href="#bucket-1" aria-hidden="true">#</a></h4><p>存储空间名称。访问<a href="https://portal.qiniu.com/kodo/bucket" target="_blank" rel="noreferrer">七牛云空间管理</a>获取</p><h4 id="region-1" tabindex="-1">region <a class="header-anchor" href="#region-1" aria-hidden="true">#</a></h4><p>存储地域。<a href="https://developer.qiniu.com/kodo/1671/region-endpoint-fq" target="_blank" rel="noreferrer">存储区域 - 七牛开发者中心</a></p><h3 id="又拍云" tabindex="-1">又拍云 <a class="header-anchor" href="#又拍云" aria-hidden="true">#</a></h3><h4 id="user-password" tabindex="-1">user/password <a class="header-anchor" href="#user-password" aria-hidden="true">#</a></h4><p>访问<a href="https://console.upyun.com/account/operators/" target="_blank" rel="noreferrer">又拍云操作员管理</a> =&gt; 【添加操作员】 =&gt; 获取 user/password <img src="https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/6aaa6100c85d0a02b3d18b2baa736305.png" alt="image.png"></p><h4 id="bucket-region-1" tabindex="-1">bucket/region <a class="header-anchor" href="#bucket-region-1" aria-hidden="true">#</a></h4><p>又拍云没有 bucket 和 region 的概念，只有服务名。bucket = 服务名，region 不需要填写。访问<a href="https://console.upyun.com/services/file/" target="_blank" rel="noreferrer">又拍云云存储</a>获取服务名</p>',45),c=[n];function i(s,h,d,g,l,p){return r(),a("div",null,c)}const m=e(o,[["render",i]]);export{b as __pageData,m as default};
