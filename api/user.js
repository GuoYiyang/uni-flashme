import {
	baseUrl
} from '@/config/setting.config.js'

// 登录
export function login(code) {
	return uni.request({
		url: baseUrl + '/login/login',
		method: "GET",
		data: {
			code: code
		}
	});
}

// 更新用户信息
export function updateUserInfo(userInfo) {
	return uni.request({
		url: baseUrl + '/user/user-info',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			id: userInfo.id,
			avatar: userInfo.avatar,
			nickname: userInfo.name,
			phone: userInfo.phone,
			desc: userInfo.desc,
			gender: userInfo.sex,
			city: userInfo.city,
			notice:userInfo.notice
		}
	});
}

// 获取用户信息
export function getUserInfo(param) {
	return uni.request({
		url: baseUrl + '/user/user-info',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: param.userId,
		}
	});
}


// 收藏摄影师
export function pherCollect(req) {
	return uni.request({
		url: baseUrl + '/user/collect',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId,
			pherId: req.pherId,
			isDelete: req.isDelete
		}
	});
}


// 获取用户收藏的摄影师
export function getPherCollect(req) {
	return uni.request({
		url: baseUrl + '/user/collect',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId
		}
	});
}

// 获取摄影师收藏状态
export function getPherCollectStatus(req) {
	return uni.request({
		url: baseUrl + '/user/collect/status',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId,
			pherId: req.pherId
		}
	});
}

// 获取用户作品数、粉丝数
export function getUserFansCnt(req) {
	return uni.request({
		url: baseUrl + '/user/fans/cnt',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId
		}
	});
}

export function becomePher(req){
	return uni.request({
		url: baseUrl + '/user/becomePher',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		}
	});
}


// 获取拍摄方案列表
export function getUserPlanList(req) {
	return uni.request({
		url: baseUrl + '/user/plan/list',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			userId: req.userId
		}
	});
}

// 获取拍摄方案详情
export function getUserPlanDetail(req) {
	return uni.request({
		url: baseUrl + '/user/plan/detail',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			planId: req.planId
		}
	});
}

// 新增拍摄方案
export function addUserPlan(req) {
	return uni.request({
		url: baseUrl + '/user/plan/add',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			content: req.content
		}
	});
}

// 更新拍摄方案
export function updateUserPlan(req) {
	return uni.request({
		url: baseUrl + '/user/plan/update',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			planId: req.planId,
			content: req.content
		}
	});
}

// 删除拍摄方案
export function deleteUserPlan(req) {
	return uni.request({
		url: baseUrl + '/user/plan/delete',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			planId: req.planId
		}
	});
}


export function getPherExploreList(req) {
	let userId = req.userId ==null ? '': req.userId
	let query = req.query ==null ? '': req.query
	let city = req.city ==null ? '': req.city
	return uni.request({
		url: baseUrl + '/user/pher/explore/random',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			city: city,
			query:query,
			userId: userId,
			isRandom: req.isRandom
		}
	});
}