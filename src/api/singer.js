import jsonp from 'common/js/jsonp'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = {
    'channel': 'singer',
    'page': 'list',
    'key': 'all_all_all',
    'pagesize': 100,
    'pagenum': 1,
    'g_tk': 5381,
    'loginUin': 0,
    'hostUin': 0,
    'format': 'jsonp',
    'inCharset': 'utf8',
    'outCharset': 'utf-8',
    'notice': 0,
    'platform': 'yqq',
    'needNewCode': 0
  }

  return jsonp(url, data, {
    param: 'jsonpCallback'
  })
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const params = {
    g_tk: 5381,
    // jsonpCallback: 'MusicJsonCallbacksinger_track',
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 30,
    songstatus: 1
  }

  return jsonp(url, params, {
    param: 'jsonpCallback'
  })
}
