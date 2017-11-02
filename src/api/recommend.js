import jsonp from 'common/js/jsonp'
import {
  QQMUSIC_PARAMS
} from './config'

export function getMusic() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const {
    PARAMS_DATA,
    REQ_PARAMS
  } = QQMUSIC_PARAMS
  const encodedData = JSON.stringify(PARAMS_DATA)
  const data = Object.assign({}, REQ_PARAMS, {
    data: encodedData
  })
  return jsonp(url, data)
}
