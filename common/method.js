export function changeProductStatus(index) {
	if (index == 'REVIEW') {
		return "审核中"
	} else if (index == 'REJECT') {
		return "驳回"
	} else if (index == 'SUCCESS') {
		return "已发布"
	}
}

export function changeCity(index) {
	if (index == '0') {
		return "深圳"
	}
	if (index == '1') {
		return "北京"
	}
	if (index == '2') {
		return "上海"
	}
	if (index == '3') {
		return "广州"
	} else {
		return "未知城市"
	}
}

export function changeTag(tagstr) {
	let tagList = tagstr.split(',');
	let res = [];
	tagList.forEach(index => {
		if (index == 0) {
			res.push("写真")
		} else if (index == 1) {
			res.push("证件照")
		} else if (index == 2) {
			res.push("婚纱")
		} else if (index == 3) {
			res.push("情侣")
		} else if (index == 4) {
			res.push("亲子")
		} else if (index == 5) {
			res.push("宠物")
		} else if (index == 6) {
			res.push("旅拍")
		} else if (index == 7) {
			res.push("其他")
		}
	})

	return res;
}

export function changePeopleNum(index) {
	if (index === 0) {
		return '单人'
	}
	if (index === 1) {
		return '双人'
	}
	if (index === 2) {
		return '多人'
	}
}

export function changeScene(index) {
	if (index === 0) {
		return '室内'
	}
	if (index === 1) {
		return '室外'
	}
	if (index === 2) {
		return '室内+室外'
	}
}

export function changeSceneNum(index) {
	if (index === 0) {
		return '一个'
	}
	if (index === 1) {
		return '两个'
	}
	if (index === 2) {
		return '三个'
	}
	if (index === 3) {
		return '四个及以上'
	}
}
