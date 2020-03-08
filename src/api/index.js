import ajax from './ajax'

export const reqBanners = () => ajax('/banners')
export const reqNearCoupons = () => ajax('/getnearbycoupons')
export const reqValidShops = () => ajax('/validshops')
export const reqAddress = () => ajax('/address')
export const reqStorys = () =>  ajax('/storys')
export const reqActivitys = () =>  ajax('/activitys')