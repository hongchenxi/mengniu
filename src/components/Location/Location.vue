<template>
  <div class="location" @click="$router.push('nearshop')">
    <div class="current_shop ellipsis"  v-if="JSON.stringify(address) !== '{}'">
      <span class="location_icon">
        <i class="iconfont icon-aui-icon-location"></i>
      </span>
      <span class="current_shop_title">当前门店：</span>
     {{address.shopinfo.name}}
    </div>
    <div class="more_shop">
      更多门店
      <span class="more_shop_arrow">
        <i class="iconfont icon-ico-right-arrow"></i>
      </span>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  mounted () {
    this.getAddress()
  },

  computed: {
    ...mapState(['address'])
  },

  methods: {
    ...mapActions(['getAddress'])
  }
};
</script>

<style lang="stylus" scoped>
.location 
  height 36px
  background #ffffff
  display flex
  align-items center
  justify-content space-between
  padding 0 10px

  .current_shop 
    font-size 13px
    color #000000
    .location_icon
      width 18px
      height 18px
      display inline-block
    .current_shop_title
      color #666666
      
  .more_shop
    font-size 12px
    color #999999
    flex-shrink: 0;
    .more_shop_arrow
      .icon-ico-right-arrow
        font-size 12px
    

</style>