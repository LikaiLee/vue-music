import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.includes('?') ? '&' : '?') + addParams(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(data)
      }
    })
  })
}

function addParams(data) {
  let url = ''

  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }

  return url ? url.substring(1) : ''
}
