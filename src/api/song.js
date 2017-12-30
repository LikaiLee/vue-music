import axios from 'axios'

export function getLyric(songmid) {
  return axios.get('/api/getLyric', {
    params: {
      callback: 'MusicJsonCallback_lrc',
      pcachetime: new Date().getTime(),
      songmid: songmid,
      g_tk: 5381,
      jsonpCallback: 'MusicJsonCallback_lrc',
      loginUin: 0,
      hostUin: 0,
      format: 'jsonp',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq',
      needNewCode: 0
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
