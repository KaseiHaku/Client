前端存储选型：
    Cookie:
    LocalStorage:
        使用的场景：
            持久性的保存客户端数据，只能通过 JavaScript 删除或者用户清除浏览器缓存。
            如果有一些稍大量的数据，例如编辑器的自动保存等。
            多页面间访问共同数据。 sessionStorage 只能用于一个标签页，而localStorage可以在多个标签页之间共享。

    SessionStorage:
        使用场景：
            主要针对会话级的小数据的存储。
            存储一些在当前页面刷新仍然需要存储，但是关闭后不需要留下的信息。
            很适合单页应用的使用，可以用来存储登录态信息等。
    IndexedDB:
    WebSQL:
  
    CacheStorage:
        在 Service Worker 的规范中提出，一般配合 Service Worker 进行离线缓存。
        Cache Storage 是用来存储 Response 对象 ，也就是对 HTTP 响应进行缓存。 Cache Storage 是多个 cache 的集合，每个 cache 可以存储多个响应对象。它基于 Promise。
    ApplicationStorage:
        它是 HTML5 中新引入的应用程序换粗技术，它的出现意味着 web 应用可以通过缓存，在没有网络的环境下运行，构建离线应用。
        离线浏览    
        提升页面的载入速度
        降低服务器的压力
