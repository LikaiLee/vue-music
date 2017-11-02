<template>
  <div class="recommend">
    <scroll ref="scroll" :data="recomPlaylist" class="recommend-content">
      <div>
        <div v-if="focus.length" class="slider-wrapper">
          <slider>
            <div v-for="item in focus" :key="item.id">
              <a :href="item.jump_info.url" target="_blank">
                <img @load="loadImage" :src="item.pic_info.url">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="recomPlaylist.length">热门歌单推荐</h1>
          <ul>
            <li v-for="(item, index) in recomPlaylist" :key="index" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.cover">
              </div>
              <div class="text">
                <h2 class="name">{{ item.title }}</h2>
                <p class="desc">{{ item.username }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!recomPlaylist.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import { getMusic } from 'api/recommend'
import { CODE_OK } from 'api/config'

export default {
  data() {
    return {
      focus: [],
      recomPlaylist: []
    }
  },
  created() {
    this._fetchData()
  },
  methods: {
    _fetchData() {
      getMusic().then((res) => {
        if (res.code === CODE_OK) {
          const { focus, recomPlaylist } = res
          this.focus = focus.data.content
          this.recomPlaylist = recomPlaylist.data.v_hot
          // console.log(this.focus)
          // console.log(this.recomPlaylist)
        } else {
          console.log('fail to get focus data')
        }
      })
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>


