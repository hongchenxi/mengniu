
import {
  RECEIVE_BANNERS,
  RECEIVE_NEARCOUPONS
} from './mutation-typs'

export default {
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  },
  
  [RECEIVE_NEARCOUPONS] (state, {nearcoupons}) {
    state.nearcoupons = nearcoupons
  }

}