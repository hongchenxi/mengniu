import Mock from 'mockjs'
import banner from './banner.json'
import nearcoupon from './nearcoupon.json'

Mock.mock('/banners', {errcode: 0, errmsg:"", result: banner.result})
Mock.mock('/getnearbycoupons', {errcode: 0, errmsg: "", result: nearcoupon.result})