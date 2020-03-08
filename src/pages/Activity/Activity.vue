<template>
  <section class="activity">
    <Navigator title="蒙牛礼享+"/>
    <div class="activity_container">
      <ActivityCell :activity="item" v-for="(item, index) in activitys" :key="index"/>
    </div>
  </section>
</template>

<script>
import Navigator from '../../components/Navigator/Navigator.vue'
import ActivityCell from "../../components/ActivityCell/ActivityCell"
import {mapState, mapActions} from 'vuex'
export default {
  mounted() {
    this.getActivitys()
  },
  components: {
    ActivityCell,
    Navigator
  },
  computed: {
    ...mapState(['activitys'])
  },
  methods: {
    ...mapActions(['getActivitys'])
  }

}
</script>

<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
 .activity
   width 100%
   .activity_container
      /*background-color #ffffff*/
      padding-top: 45px
      padding-bottom 10px
      margin-bottom 50px

</style>