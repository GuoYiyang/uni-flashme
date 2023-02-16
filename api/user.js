import {
	baseUrl
} from '@/config/setting.config.js'

// 登录
export function login(data) {

	uni.request({
		url: baseUrl + '/login',
		method: "POST",
		data: {
			code: data.code
		},
		success: (res) => {
			return res;
		},
		fail: (res) => {
			return res;
		}
	});
}

// 获取用户信息
export function getUserInfo(data) {

	uni.request({
		url: baseUrl + '/login/user-info',
		method: "GET",
		data: {
			code: data.code
		},
		success: (res) => {
			console.log(res);
			return res.data;
		},
		fail: (res) => {
			return res.data;
		}
	});
}
