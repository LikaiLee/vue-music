<template>
  <div>

  </div>
</template>
<script>
// import { getLyric } from '@/api/song'
import axios from 'axios'

export default {
  created() {
    axios({
      url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
      method: 'get',
      params: {
        callback: 'MusicJsonCallback_lrc',
        pcachetime: new Date().getTime(),
        songmid: '0025NhlN2yWrP4',
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
      },
      headers: {
        // 'referer': 'https://y.qq.com/portal/'
      }
    }).then(({
    data
  }) => {
      console.log(data)
      /* var ret = data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/
        var matches = data.match(reg)
        if (matches) {
          ret = JSON.parse(matches[1])
        }
      }
      res.json(ret) */
    })
  }
}
</script>
