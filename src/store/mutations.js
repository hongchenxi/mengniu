
import {
  RECEIVE_BANNERS,
  RECEIVE_NEARCOUPONS,
  RECEIVE_SHOPS
} from './mutation-typs'

export default {
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  },
  
  [RECEIVE_NEARCOUPONS] (state, {nearcoupons}) {
    state.nearcoupons = nearcoupons
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }

}