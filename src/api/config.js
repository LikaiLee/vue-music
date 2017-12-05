/**
 * get 搜索 https://c.y.qq.com/soso/fcgi-bin/client_search_cp?format=json&p=${page}&n=${pageSize}&w=${keyword}&aggr=1&lossless=1&cr=1&new_json=1
 * get 单曲详情 https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid=${songmid}&format=json&platform=yqq
 * get 某张专辑详情 https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=${albummid}&format=jsonp&platform=yqq
 * get 歌手专辑 https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_album.fcg?format=json&platform=yqq&singermid=${singermid}&order=time&begin=0&num=5&format=json&platform=yqq
 * get 歌手所有歌曲 https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?format=json&platform=yqq&singermid=${singermid}&order=listen&begin=0&num=30&songstatus=1
 * get 歌曲海报 http://y.gtimg.cn/music/photo_new/T002R500x500M000${albummid}.jpg?max_age=2592000
 */
export const QQMUSIC_PARAMS = {
  REQ_PARAMS: {
    callback: 'recom8229649584250425',
    g_tk: 5381,
    jsonpCallback: 'recom8229649584250425',
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  },
  PARAMS_DATA: {
    'comm': {
      'ct': 24
    },
    /* 'category': {
      'method': 'get_hot_category',
      'param': {
        'qq': ''
      },
      'module': 'music.web_category_svr'
    }, */
    'recomPlaylist': {
      'method': 'get_hot_recommend',
      'param': {
        'async': 1,
        'cmd': 2
      },
      'module': 'playlist.HotRecommendServer'
    },
    /* 'playlist': {
      'method': 'get_playlist_by_category',
      'param': {
        'id': 8,
        'curPage': 1,
        'size': 40,
        'order': 5,
        'titleid': 8
      },
      'module': 'playlist.PlayListPlazaServer'
    },
    'new_song': {
      'module': 'QQMusic.MusichallServer',
      'method': 'GetNewSong',
      'param': {
        'type': 0
      }
    },
    'new_album': {
      'module': 'QQMusic.MusichallServer',
      'method': 'GetNewAlbum',
      'param': {
        'type': 0,
        'category': '-1',
        'genre': 0,
        'year': 1,
        'company': -1,
        'sort': 1,
        'start': 0,
        'end': 39
      }
    },
    'toplist': {
      'module': 'music.web_toplist_svr',
      'method': 'get_toplist_index',
      'param': {}
    }, */
    'focus': {
      'module': 'QQMusic.MusichallServer',
      'method': 'GetFocus',
      'param': {}
    }
  }
}

export const CODE_OK = 0
