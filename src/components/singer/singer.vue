<template>
  <div class="singer">
    <list-view :data="singerList"></list-view>
  </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { CODE_OK } from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'base/listView/listView'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

export default {
  data() {
    return {
      singerList: []
    }
  },
  created() {
    this._fetchData()
  },
  methods: {
    _fetchData() {
      getSingerList().then(res => {
        if (res.code === CODE_OK) {
          this.singerList = this._normalizeSinger(res.data.list)
        } else {
          console.log('fail to get singer data')
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((singer, index) => {
        // 热门歌手
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: singer.Fsinger_mid,
            name: singer.Fsinger_name
          }))
        }
        // 歌手分类
        const key = singer.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: singer.Fsinger_mid,
          name: singer.Fsinger_name
        }))
      })

      // 排序为有序列表
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }

      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret)
    }
  },
  components: {
    ListView
  }
}
</script>

<style lang="stylus" scoped>
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>


