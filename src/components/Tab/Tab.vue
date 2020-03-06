<template>
   <div class="tab">
    <div class="tab_container">
      <div class="tab_item" v-for="(tab, index) in tabs" :key="index" :index="index" :class="[tabIndex === index ? 'tab_active': '']" @click="changeTab(index)">
        <img :src="tab.imgurl">
        <span>{{tab.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabIndex: Number,
  },

  data () {
     
    return {
      index: 0,
      tabs: [
    {
      "id": 0,
      "title": "全部",
      "imgurl": "http://game.img.ismartgo.cn/test/200219/143afb8a-3c5e-41e6-90d9-a24e1d2db7b8.png",
      "selectedimgurl": "http://game.img.ismartgo.cn/test/200219/f311e480-69fa-4c37-8c91-85f892396f94.png",
      "qrs": ""
    },
    {
      "id": 161,
      "title": "纯甄",
      "imgurl": "http://game.img.ismartgo.cn/test/200219/6ed0ee70-af6d-4498-8742-94697630ebda.png",
      "selectedimgurl": "http://game.img.ismartgo.cn/test/200219/44e58bf7-fd3d-4eb6-97ed-977060938392.png",
      "qrs": ""
    },
    {
      "id": 162,
      "title": "特仑苏",
      "imgurl": "http://game.img.ismartgo.cn/test/200219/20e22bbf-6ac0-43f3-b53a-699a4d9e3601.png",
      "selectedimgurl": "http://game.img.ismartgo.cn/test/200219/f5ad7caf-7d82-418f-bb5e-a8501b56d83d.png",
      "qrs": ""
    },
    {
      "id": 163,
      "title": "真果粒",
      "imgurl": "http://game.img.ismartgo.cn/test/200219/d22078f9-1075-4382-ada5-1e421a03d58c.png",
      "selectedimgurl": "http://game.img.ismartgo.cn/test/200219/cf4dcef7-3858-4a07-af44-ae937379485c.png",
      "qrs": ""
    }
  ]
    }
  },

  methods: {
    changeTab: function(index) {
      this.$emit("changeTab", index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab
  .tab_container
    width 100%
    height 92px
    background #ffffff
    .tab_container
      width 100%
      height 100%
      white-space nowrap
      position relative
      .tab_item
        width 25%
        color #333333
        font-size 700
        float left 
        text-align center
        position relative
        top 50%
        transform translateY(-50%)
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