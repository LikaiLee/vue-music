<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import { CODE_OK } from '@/api/config'
import { getSingerDetail } from '@/api/singer'
import { createSong } from '@/common/js/song'
import MusicList from '@/components/music-list/music-list'

export default {
  data() {
    return {
      songs: []
    }
  },
  created() {
    // console.log(this.singer)
    this._getDetail()
  },
  methods: {
    _getDetail() {
      const singerId = this.singer.id
      if (!singerId) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(singerId).then((res) => {
        if (CODE_OK === res.code) {
          this.songs = this._normalizeSongs(res.data.list)
          // console.log(this.songs)
        } else {
          console.log('fail to get singer-detail data')
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .slide-enter-active,
  .slide-leave-active
    transition: all .3s
  .slide-enter,
  .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>


