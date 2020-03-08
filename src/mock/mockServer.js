import Mock from 'mockjs'
import banner from './banner'
import nearcoupon from './nearcoupon'
import validshops from './validshops'
import address from './address'
import story from './story'
import activity from './activity'
import tags from './tags'
import mycoupons from './mycoupons'

Mock.mock('/banners', {errcode: 0, errmsg:"", result: banner.result})
Mock.mock('/getnearbycoupons', {errcode: 0, errmsg: "", result: nearcoupon.result})
Mock.mock('/validshops', {errcode: 0, errmsg: "", result: validshops.result})
Mock.mock('/address', {errcode: 0, errmsg: "", result: address.result})
Mock.mock('/storys', {errcode: 0, errmsg: "", result: story.result})
Mock.mock('/activitys', {errcode: 0, errmsg: "", result: activity.result})
Mock.mock('/tags', {errcode: 0, errmsg: "", result: tags.result})
Mock.mock('/mycoupons', {errcode: 0, errmsg: "", result: mycoupons.result})
