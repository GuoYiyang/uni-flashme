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
		data: {
			id: userInfo.userId,
			avatar: userInfo.avatar,
			nickname: userInfo.nickname
		}
	});
}

// 获取用户信息
export function getUserInfo(param) {
	return uni.request({
		url: baseUrl + '/user/user-info',
		method: "GET",
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
		data: {
			userId: req.userId,
			pherId: req.pherId
		}
	});
}