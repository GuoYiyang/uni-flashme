import {
	baseUrl
} from '@/config/setting.config.js'


// 创建作品集
export function createSet(req) {
	let id = req.id ==null? "" : req.id
	return uni.request({
		url: baseUrl + '/set/add',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			id:id,
			name: req.name
		}
	});
}

// 删除作品集
export function deleteSet(req) {
	return uni.request({
		url: baseUrl + '/set/delete',
		method: "POST",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		},
		data: {
			setId: req.setId
		}
	});
}

// 获取作品集列表
export function getSetList() {
	return uni.request({
		url: baseUrl + '/set/list',
		method: "GET",
		header:{
			"X-USER-ID": getApp().globalData.USER_ID
		}
	});
}