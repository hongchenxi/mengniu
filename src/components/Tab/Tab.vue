<template>
  <div class="tab">
    <div class="tab_container">
      <div class="tab_item" v-for="(tag, index) in tags" :key="index" :index="index" :class="[tabIndex === index ? 'tab_active': '']" @click="changeTab(index)">
        <img :src="tag.imgurl" v-show="tag.imgurl">
        <span>{{tag.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>false
export default {
  props: {
    tabIndex: Number,
    tags: Array
  },

  data () {
    return {
      index: 0
    }
  },
  mounted (){
  },

  methods: {
    changeTab: function(index) {
      this.$emit("changeTab", index)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .tab
  .tab_container
    width 100%
    background #ffffff
    .tab_container
      white-space nowrap
      position relative
      .tab_item
        width 25%
        color #333333
        font-size 700
        float left 
        text-align center
        position relative
        padding 10px 0 5px 0
        background-color #ffffff
        &.tab_active
          color #26A13A
          &::after
            content ''
            position absolute
            left 50%
            transform translateX(-50%)
            bottom 1px
            width 37px
            height 2px
            background #26A13A
        img
          width 42px
          display block
          margin 0 auto
        span
          margin 8px 0
          font-size 11px
          display block
</style>