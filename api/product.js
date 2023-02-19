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

// 收藏产品
export function productCollect(req) {
	return uni.request({
		url: baseUrl + '/product/collect',
		method: "POST",
		data: {
			userId: req.userId,
			productId: req.productId,
			isDelete: req.isDelete
		}
	});
}


// 获取用户收藏的产品
export function getProductCollect(req) {
	return uni.request({
		url: baseUrl + '/product/collect',
		method: "GET",
		data: {
			userId: req.userId
		}
	});
}

// 获取产品收藏状态
export function getProductCollectStatus(req) {
	return uni.request({
		url: baseUrl + '/product/collect/status',
		method: "GET",
		data: {
			userId: req.userId,
			productId: req.productId
		}
	});
}


// 上传图片
export function uploadImages(req) {
	return uni.uploadFile({
		url: baseUrl + '/product/image/upload',
		filePath: req.filePath,//这里是图片的本地文件路径列表（选择图片成功的时候可以拿到,在上边的success回调中res.tempFilePaths即可拿到）
		name: 'file'
	})
}