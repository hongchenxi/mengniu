import Mock from 'mockjs'
import banner from './banner.json'

Mock.mock('/banners', {errcode: 0, errmsg:"", result: banner.result})