import {
	baseUrl
} from '@/config/setting.config.js'

// 获取产品详情
export function productDetail(req) {
	return uni.request({
		url: baseUrl + '/product/detail',
		method: "GET",
		data: {
			id: req.id
		}
	});
}


// 随机获取10条产品
export function productRandom(req) {
	return uni.request({
		url: baseUrl + '/product/random',
		method: "GET",
		data: {
			city: req.city,
			tag: req.tag,
			query: req.query
		}
	});
}