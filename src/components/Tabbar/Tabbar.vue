<template>
  <div class="tabbar">
    <span class="tabbar_item" :class="{on: '/home' == $route.path}" @click="switchTab('/home')">
      <span class="item_icon">
        <img src="./images/home.png">
      </span>
      <span>优惠券</span>
    </span>
    <a href="javascript:;" class="tabbar_item" :class="{on: '/story' == $route.path}" @click="switchTab('/story')">
      <span class="item_icon">
        <img src=./images/story.png >
      </span>
      <span>品牌故事</span>
    </a>
    <a href="javascript:;" class="tabbar_item" :class="{on: '/activity' == $route.path}" @click="switchTab('/activity')">
      <span class="item_icon">
        <img src="./images/activity.png" >
      </span>
      <span>品牌活动</span>
    </a>
    <a href="javascript:;" class="tabbar_item" :class="{on: '/mine' == $route.path}" @click="switchTab('/mine')">
      <span class="item_icon">
        <img src="./images/mine.png" >
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    switchTab (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';
.tabbar
  top-border-1px(#dddddd)
  position fixed
  z-index 100
  left 0
  bottom 0
  width 100%
  height 50px
  display flex
  background #ffffff
  .tabbar_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    color: #333333

    &.on 
      color: #26a13a
    span
      font-size 12px
      margin-top 2px
      img {
        width 27px
        height 27px
      }
</style>