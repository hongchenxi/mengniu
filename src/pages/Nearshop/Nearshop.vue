<template>
  <section class="nearshop">
    <Navigator title="更多门店">
      <span class="navigator_back" slot="left" @click="$router.back()">
        <i class="iconfont icon-back"></i>
      </span>
    </Navigator>
    <form class="search_form">
      <input type="search" placeholder="搜索" class="search_input" />
      <input type="submit" class="search_submit" value="搜索" />
    </form>
    <section class="shop_container">
      <div>
        <section class="section_title">当前定位门店</section>
        <div class="shop_cell">
          <div class="shop_name">
            <span class="location">
              <i class="iconfont icon-location"></i>
            </span>
           {{address.shopinfo.name}}
          </div>
          <div class="location_info">
            <span class="location_info_address">{{address.shopinfo.address}}</span>
            <span class="location_info_distance">{{address.shopinfo.distance}}</span>
          </div>
        </div>
      </div>
      <div>
        <section class="section_title">附近可选门店（{{shops.length}}家）</section>
        <div class="shop_cell extra" v-for="(shop, index) in shops" :key="index">
          <div class="shop_name">
            {{shop.name}}
          </div>
          <div class="location_info">
            <span class="location_info_address">{{shop.address}}</span>
            <span class="location_info_distance">{{shop.distance}}</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Navigator from "../../components/Navigator/Navigator.vue";
export default {
  mounted () {
    this.getValidShops()
  },

  computed: {
    ...mapState(['shops', 'address'])
  },

  methods: {
    ...mapActions(['getValidShops'])
  },

  components: {
    Navigator
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.nearshop {
  width: 100%;
  background: #ffffff;

  .search_form {
    clearFix();
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #ffffff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-raduis: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #139E4C;
        font-size: 16px;
        color: #ffffff;
        background-color: #139E4C;
      }
    }
  }
  .shop_container {
    margin-top 104px
  }

  .section_title {
    height: 39px;
    background: #f1f1f1;
    font-size: 13px;
    padding: 0 10px;
    line-height: 39px;
  }

  .shop_cell {
    height: 73px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;

    &.extra {
      padding: 0 10px 0 0;
      margin-left: 32px;
      bottom-border-1px(#f1f1f1);
    }

    .shop_name {
      font-size: 14px;
      color: #000000;
      line-height: 21px;
      .location {
        width 18px
        height 18px
        .icon-location {
          font-size 16px
        }
      }
    }
    

    .location_info {
      color: #999999;
      font-size: 12px;
      line-height: 18px;

      .location_info_address {
        float: left;
      }

      .location_info_distance {
        float: right;
      }
    }
  }
}
</style>