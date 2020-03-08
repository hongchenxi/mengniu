<template>
  <section class="mine">
    <Navigator title="蒙牛礼享+"/>
    <div class="userinfo">
      <UserInfo/>
    </div>
  </section>
</template>

<script>
import Navigator from '../../components/Navigator/Navigator.vue'
import UserInfo from "../../components/UserInfo/UserInfo"
export default {
  components: {
    Navigator,
    UserInfo
  }
}
</script>

<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
 .mine
  width 100%
  .userinfo
    margin-top 45px

</style>