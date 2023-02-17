import {
	baseUrl
} from '@/config/setting.config.js'

// 登录
export function login(code) {

	return uni.request({
		url: baseUrl + '/login/login',
		method: "POST",
		data: {
			code: code
		}
	});
}

// 获取用户信息
export function getUserInfo(data) {

	return uni.request({
		url: baseUrl + '/login/user-info',
		method: "GET",
		data: {
			code: data.code
		}
	});
	
}

// 更新用户信息
export function updateUserInfo(data) {

	return uni.request({
		url: baseUrl + '/login/user-info',
		method: "POST",
		data: {
			id: data.userId,
			avatar: data.avatar,
			nickname: data.nickname
		}
	});
	
}
