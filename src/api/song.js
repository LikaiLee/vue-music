import axios from 'axios'

// const cookie = 'pgv_pvi=5752845312; pgv_si=s4582255616; ts_refer=ADTAGh5_playsong; ts_last=y.qq.com/portal/player.html; ts_uid=8996513470; yqq_stat=0'
export function getSong() {
  /* const guid = new Date().getTime() % 10000 + ~~(Math.random() * 1000000000)
  const {
    data
  } = await axios.get('https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg', {
    params: {
      json: 3,
      format: 'json',
      guid
    },
    headers: {
      cookie
    }
  })
  console.log(data) */
  axios.get('/api/getSongUrl').then((res) => {
    console.log(res)
  })
}
