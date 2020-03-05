
import {
  RECEIVE_BANNERS
} from './mutation-typs'

export default {
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  }
}