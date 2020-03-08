import {
    RECEIVE_BANNERS,
    RECEIVE_NEARCOUPONS,
    RECEIVE_SHOPS,
    RECEIVE_ADDRESS,
    RECEIVE_STORYS,
    RECEIVE_ACTIVITYS,
    RECEIVE_TAGS,
    RECEIVE_MYCOUPONS
} from './mutation-typs'

import {
    reqBanners,
    reqNearCoupons,
    reqValidShops,
    reqAddress,
    reqStorys,
    reqActivitys,
    reqTags,
    reqMycoupons
} from '../api/index'

export default {
    async getBanners({commit}) {
        const result = await reqBanners()
        if (result.errcode === 0) {
            const banners = result.result
            commit(RECEIVE_BANNERS, {banners})
        }
    },

    async getNearCoupons({commit}) {
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
    },

    async getStorys({commit}) {
      const result = await reqStorys()
      if (result.errcode === 0) {
        const storys = result.result
        commit(RECEIVE_STORYS, {storys})
      }
    },

    async getActivitys({commit}) {
        const result = await reqActivitys()
        if (result.errcode === 0) {
            const activitys = result.result
            commit(RECEIVE_ACTIVITYS, {activitys})
        }
    },

    async getTags({commit}) {
        const result = await reqTags()
        if (result.errcode === 0) {
            const tags = result.result
            commit(RECEIVE_TAGS, {tags})
        }
    },

    async getMycoupons({commit}) {
        const result = await reqMycoupons()
        if (result.errcode === 0) {
            const mycoupons = result.result
            console.log(mycoupons)
            commit(RECEIVE_MYCOUPONS, {mycoupons})
        }
    }
}