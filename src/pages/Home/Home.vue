<template>
  <section class="home">
    <Navigator title="蒙牛礼享+"/>
   
    <div class="home_content_wrapper">
      <Location class="location"/>
      <div class="home_banner">
        <div class="swiper-container" v-if="banners.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(banner, index) in banners" :key="index">
              <a href="javascript:;" class="link_to">
                <div class="img_container">
                  <img :src="banner.imageurl" >
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <Tab :tabIndex = "tabIndex" @changeTab="changeTab"/>
    </div>
    
  </section>
</template>

<script>
import Location from '../../components/Location/Location.vue'
import Navigator from '../../components/Navigator/Navigator.vue'
import Tab from '../../components/Tab/Tab.vue'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import {mapState, mapActions} from 'vuex'
export default {
  
  data() {
    return {
      tabIndex: 0
    }
  },

  mounted () {
    this.getBanners()
  },

  methods: {
    ...mapActions(['getBanners']),
    changeTab: function(id) {
      console.log('id:----', id)
      this.tabIndex = id
    }
  },

  computed: {
    ...mapState(['banners'])
  },

  watch: {
    banners () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },

  components: {
    Navigator,
    Location,
    Tab
  }
}
</script>

<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
 .home
   width 100%
   .home_content_wrapper
    position fixed
    top 45px
    left 0
    bottom 46px
    width 100%
    .home_banner
      bottom-border-1px(#e4e4e4)
      clearFix()
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            img
              width 100%
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background yellow    
</style>