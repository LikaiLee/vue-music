<template>
  <div class="playlist" v-show="show">
    <scroll :data="playlist" class="list" :refreshDelay="refreshDelay">
      <div class="list-wrapper">
        <ul v-if="playlist">
          <li v-for="(song, index) in playlist" :key="index" class="song-item">
            {{song.name}} - {{song.singer}}
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Scroll from '@/base/scroll/scroll'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      refreshDelay: 120
    }
  },
  mounted() {
    // console.log(this.playlist)
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .playlist
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: rgba(0, 0, 0, .5)
    width: 100%
    height: 100%
    .song-item
      line-height: 30px
    .list
      display: block
      vertical-align: top
      width: 100%
      height: 100%
      overflow: hidden
      .list-wrapper
        width: 80%
        margin: 0 auto
        overflow: hidden
</style>


