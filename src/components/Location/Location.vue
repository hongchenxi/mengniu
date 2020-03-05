<template>
  <div class="location" @click="$router.push('nearshop')">
    <div class="current_shop ellipsis">
      <span class="location_icon">
        <i class="iconfont icon-aui-icon-location"></i>
      </span>
      <span class="current_shop_title">当前门店：</span>
      广州市珠影广场沃尔玛店
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
export default {};
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