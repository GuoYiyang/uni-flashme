import {
	baseUrl
} from '@/config/setting.config.js'

// 获取产品详情
export function productDetail(req) {
	return uni.request({
		url: baseUrl + '/product/detail',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			id: req.id
		}
	});
}

// 根据tag分页获取商品
export function getProductPage(req) {
	let userId = req.userId == null ? "" : req.userId;
	let city = req.city == null ? "" : req.city;
	let tag = req.tag == null ? "" : req.tag;
	let query = req.query == null ? "" : req.query;
	let status = req.status == null ? "" : req.status;
	return uni.request({
		url: baseUrl + '/product/page',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: userId,
			city: city,
			tag: tag,
			query: query,
			page: req.page,
			pageSize: req.pageSize,
			status: status
		}
	});
}

// 随机获取10条产品
export function productRandom(req) {
	return uni.request({
		url: baseUrl + '/product/random',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
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
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
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
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
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
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
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
		name: 'file',
		header: {
			"X-USER-ID": getApp().globalData.USER_ID
		}
	})
}


// 发布产品
export function publishProduct(req) {
	return uni.request({
		url: baseUrl + '/product/publish',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId,
			title: req.title,
			content: req.content,
			tags: req.tags,
			price: req.price,
			imgName: req.imgName,
			imgNameList: req.imgNameList
		}
	});
}


// 删除产品
export function deleteProduct(req) {
	return uni.request({
		url: baseUrl + '/product/delete',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId,
			productId: req.productId
		}
	});
}


// 审核产品
export function updateProductStatus(req) {
	return uni.request({
		url: baseUrl + '/product/status/update',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			status: req.status,
			productId: req.productId,
			remark: req.remark
		}
	});
}