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
