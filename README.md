# 9 ways to cross origin
实现跨域的9种方法

1. jsonp
2. CORS
3. document.domain
4. postMessage (iframe/open)
5. window.name (iframe)
6. location.hash (iframe)
7. http-proxy
8. nginx
9. websocket

## jsonp
script标签的src获取资源，不受浏览器同源策略限制，可用
