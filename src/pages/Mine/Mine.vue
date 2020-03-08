<template>
  <section class="mine">
    <Navigator title="蒙牛礼享+"/>
    <div class="userinfo">
      <UserInfo/>
    </div>
    <Tab :tabIndex = "tabIndex" :tags="tags" @changeTab="changeTab"/>
  </section>
</template>

<script>
import Navigator from '../../components/Navigator/Navigator.vue'
import UserInfo from "../../components/UserInfo/UserInfo"
import Tab from "../../components/Tab/Tab"
export default {
  data() {
    return {
      tabIndex: 0,
      tags: [
        {id: 0, title:"所有券"},
        {id: 1, title:"待使用"},
        {id: 2, title:"已使用"},
        {id: 3, title:"已过期"}
      ]
    }
  },
  methods: {
    changeTab: function(id) {
      this.tabIndex = id
    }
  },
  components: {
    Navigator,
    UserInfo,
    Tab
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