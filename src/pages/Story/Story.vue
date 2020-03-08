<template>
  <section class="story">
    <Navigator title="蒙牛礼享+"/>
    <div class="story_container">
      <StoryCell :story="item" v-for="(item, index) in storys" :key="index"/>
    </div>
  </section>
</template>

<script>
import Navigator from '../../components/Navigator/Navigator.vue'
import StoryCell from "../../components/StoryCell/StoryCell";
import  {mapState, mapActions} from 'vuex'
export default {
  mounted() {
    this.getStorys()
  },
  components: {
    Navigator,
    StoryCell
  },
  computed: {
    ...mapState(['storys'])
  },
  methods: {
    ...mapActions(['getStorys'])
  }
}
</script>

<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
    .story
      width 100%
      .story_container
        width 100%
        padding-top 45px
        padding-bottom 10px
        margin-bottom 50px
        background-color #ffffff

</style>