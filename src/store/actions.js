import {
  RECEIVE_BANNERS,
  RECEIVE_NEARCOUPONS
} from './mutation-typs'

import {
  reqBanners,
  reqNearCoupons
} from '../api/index'

export default {
  async getBanners ({commit}) {
    const result = await reqBanners()
    if (result.errcode === 0) {
      const banners = result.result
      commit(RECEIVE_BANNERS, {banners})
    }
  },

  async getNearCoupons ({commit}) {
    const result = await reqNearCoupons()
    if (result.errcode === 0) {
      const nearcoupons = result.result
      commit(RECEIVE_NEARCOUPONS, {nearcoupons})
    }
  }
}