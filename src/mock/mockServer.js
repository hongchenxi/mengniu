import Mock from 'mockjs'
import banner from './banner.json'
import nearcoupon from './nearcoupon.json'
import validshops from './validshops.json'
import address from './address.json'

Mock.mock('/banners', {errcode: 0, errmsg:"", result: banner.result})
Mock.mock('/getnearbycoupons', {errcode: 0, errmsg: "", result: nearcoupon.result})
Mock.mock('/validshops', {errcode: 0, errmsg: "", result: validshops.result})
Mock.mock('/address', {errcode: 0, errmsg: "", result: address.result})