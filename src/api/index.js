import ajax from './ajax'

export const reqBanners = () => ajax('/banners')
export const reqNearCoupons = () => ajax('/getnearbycoupons')
export const reqValidShops = () => ajax('/validshops')