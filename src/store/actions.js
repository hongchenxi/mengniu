import {
  RECEIVE_BANNERS
} from './mutation-typs'

import {
  reqBanners
} from '../api/index'

export default {
  async getBanners ({commit}) {
    const result = await reqBanners()
    console.log('result === ', result)
    if (result.errcode == 0) {
      const banners = result.result

      console.log('banners ==== ',banners)
      commit(RECEIVE_BANNERS, {banners})
    }
  }
}