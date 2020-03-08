import {
  RECEIVE_BANNERS,
  RECEIVE_NEARCOUPONS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS
} from './mutation-typs'

import {
  reqBanners,
  reqNearCoupons,
  reqValidShops,
  reqAddress
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
  },

  async getValidShops({commit}) {
    const result = await reqValidShops()
    if (result.errcode === 0) {
      const shops = result.result
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  async getAddress({commit}) {
    const result = await reqAddress()
    if (result.errcode === 0) {
      const address = result.result
      commit(RECEIVE_ADDRESS, {address})
    }
  }
}