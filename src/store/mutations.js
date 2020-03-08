
import {
  RECEIVE_BANNERS,
  RECEIVE_NEARCOUPONS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS
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
  },

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  }

}