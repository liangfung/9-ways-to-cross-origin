/**
 * @param {object} options
 * @returns {Promise}
 */
var jsonp = function ({ cb, url, params }) {
  return new Promise((resolve) => {
    let script = document.createElement('script')  // 动态add  script元素
    window[cb] = function (data) {
      document.body.removeChild(script)
      resolve(data)
    }
    let paramsArr = []
    params = {
      ...params,
      cb
    }
    for (let key in params) {
      paramsArr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${paramsArr.join('&')}`
    document.body.appendChild(script)
  })
}

jsonp({
  url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
  cb: 'deliverer',  // 作用是 1.resolve promise (有闭包) 2.remove <script>标签
  params: { wd: 'web' }
}).then(data => {
  console.log(data)
})