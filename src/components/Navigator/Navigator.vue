<template>
  <header class="navigator">
    <slot name="left"></slot>
    <span class="navigator_title">
      <span class="navigator_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
  .navigator
    position fixed
    background-color #139E4C
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .navigator_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      width 50%
      color #ffffff
      text-align center
      .navigator_title_text
        font-size 20px
        color #fff
        display block
      

</style>