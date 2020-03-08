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

export default {
    [RECEIVE_BANNERS](state, {banners}) {
        state.banners = banners
    },

    [RECEIVE_NEARCOUPONS](state, {nearcoupons}) {
        state.nearcoupons = nearcoupons
    },

    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops
    },

    [RECEIVE_ADDRESS](state, {address}) {
        state.address = address
    },

    [RECEIVE_STORYS](state, {storys}) {
        state.storys = storys
    },

    [RECEIVE_ACTIVITYS](state, {activitys}) {
        state.activitys = activitys
    },

    [RECEIVE_TAGS](state, {tags}) {
        state.tags = tags
    },

    [RECEIVE_MYCOUPONS](state, {mycoupons}) {
        state.mycoupons = mycoupons
    }
}

