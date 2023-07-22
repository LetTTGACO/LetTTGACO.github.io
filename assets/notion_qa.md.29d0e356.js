import{_ as e,c as a,o as t,a as o}from"./app.ea6eb502.js";const m=JSON.parse('{"title":"常见问题","description":"","frontmatter":{"cover":"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/caa4be72-4c64-46d9-a90b-4cda392157d0/297139.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230722T200116Z&X-Amz-Expires=3600&X-Amz-Signature=f2ef8c4df56bde7b0bc6bcf947a0b1aa5716b4284dc096e5c451eb16813a5206&X-Amz-SignedHeaders=host&x-id=GetObject","status":"已发布","sort":5,"urlname":"qa","上次编辑时间":"2023-07-22T20:00:00.000Z","catalog":"关于Elog","tags":"Elog-Docs","title":"常见问题","date":"2023-07-22 19:37:00","updated":"2023-07-22 20:00:00"},"headers":[],"relativePath":"notion/qa.md","lastUpdated":1690056095000}'),i={name:"notion/qa.md"},s=o('<h2 id="同步时卡住不动" tabindex="-1">同步时卡住不动 <a class="header-anchor" href="#同步时卡住不动" aria-hidden="true">#</a></h2><ul><li>在 Github 自动化流程中同步卡住</li><li>本地同步运行时卡住</li><li>图片下载时卡住</li><li>文档下载时卡住</li></ul><h3 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-hidden="true">#</a></h3><p>在全量同步时，因为语雀/FlowUs 为国内平台，有时会在 Github 等国外环境运行时由于网络问卡住。此时可以在本地先手动运行一遍，提交缓存文件到 Github，后续的增量同步会快很多。相反用 Notion 在本地进行同步时，也有同样的问题，放在 Github 同步就会快很多。</p><p>还有一种可能是由于需要同步的文档中的新图片数量太多，所以每次都是新增上传图片到 CDN，会导致整体的流程变慢甚至失败。因为 Elog 会检测图片在 CDN 是否已经上传过，可以多试几次。</p><p>由于 Notion 的 API 在大部分情况下都很慢，甚至会下载文档失败。这是官方的问题，可以选择降低 Notion 下载文档时的并发数（默认为 3）。在 Elog 配置文件中设置<code>write.notion.limit=1</code>，降低文档下载并发数，也可多试几次。</p><h2 id="同步时报超时错误" tabindex="-1">同步时报超时错误 <a class="header-anchor" href="#同步时报超时错误" aria-hidden="true">#</a></h2><ul><li>下载文档超时</li><li>下载图片超时</li></ul><h3 id="解决办法-1" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法-1" aria-hidden="true">#</a></h3><p>默认超时时间为 60s，如果经常超时，可配置环境变量<code>p<wbr>rocess.env.REQUEST_TIMEOUT</code>，增加请求超时时间。</p><p>本地同步时，在.elog.env 文件新增<code>REQUEST_TIMEOUT=900000</code>，设置更大的超时时间</p><p>在 CI/CD 中，可在自动化平台注入同样的环境变量即可</p><p>或者多试几次，总有一次成功！</p>',13),d=[s];function r(c,n,l,h,p,_){return t(),a("div",null,d)}const b=e(i,[["render",r]]);export{m as __pageData,b as default};
