import {
	baseUrl
} from '@/config/setting.config.js'

// 登录

// 获取用户信息
export function getUserInfo(data) {

	uni.request({
		url: baseUrl + '/test/test1',
		method: "GET",
		data: {
			text: 'uni.request'
		},
		success: (res) => {
			return res;
		},
		fail: (res) => {
			return res;
		}
	});
}
