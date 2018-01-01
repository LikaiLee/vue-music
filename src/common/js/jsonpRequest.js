let container = document.getElementsByTagName('head')[0]
/**
 * 生成随机字符串
 */
function makeid() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
/**
 * @param {String} url
 * @param {JSON Object} options 参数
 */
export function jsonpRequest(url, options) {
  return new Promise((resolve, reject) => {
    try {
      if (!url) {
        reject(new Error('request url is required'))
      }
      let scriptNode = document.createElement('script')
      let data = options || {}
      let fnName = 'jsonp' + makeid()
      data['callback'] = fnName
      var params = []
      for (let [key] of Object.entries(data)) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      url = (url.indexOf('?')) > 0 ? (url + '&') : (url + '?')
      url += params.join('&')
      scriptNode.src = url
      global[fnName] = function (ret) {
        resolve({
          err: null,
          result: ret
        })
        // container.removeChild(scriptNode)
        // delete global[fnName]
      }
      scriptNode.onerror = function (err) {
        reject(new Error(err))
        container.removeChild(scriptNode)
        global[fnName] && delete global[fnName]
      }
      scriptNode.type = 'text/javascript'
      container.appendChild(scriptNode)
    } catch (e) {
      reject(new Error(e))
    }
  })
}
