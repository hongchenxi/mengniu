<template>
  <section class="home">
    <Navigator title="蒙牛礼享+"/>
    <Location class="location"/>
    
  </section>
</template>

<script>
import Location from '../../components/Location/Location.vue'
import Navigator from '../../components/Navigator/Navigator.vue'
export default {
  components: {
    Navigator,
    Location
  }
}
</script>

<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
 .home
   width 100%
   .location
     position fixed
     top 45px
     left 0
     right 0

</style>