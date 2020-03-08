import Mock from 'mockjs'
import banner from './banner.json'
import nearcoupon from './nearcoupon.json'
import validshops from './validshops.json'
import address from './address.json'
import story from './story'
import activity from './activity'
import tags from './tags'

Mock.mock('/banners', {errcode: 0, errmsg:"", result: banner.result})
Mock.mock('/getnearbycoupons', {errcode: 0, errmsg: "", result: nearcoupon.result})
Mock.mock('/validshops', {errcode: 0, errmsg: "", result: validshops.result})
Mock.mock('/address', {errcode: 0, errmsg: "", result: address.result})
Mock.mock('/storys', {errcode: 0, errmsg: "", result: story.result})
Mock.mock('/activitys', {errcode: 0, errmsg: "", result: activity.result})
Mock.mock('/tags', {errcode: 0, errmsg: "", result: tags.result})
