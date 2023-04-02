export function onFeedTap() {
	
	let platform=uni.getSystemInfoSync().platform
	// #ifdef APP-PLUS
	if (platform == "ios") {
		let UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');
		let impact = new UIImpactFeedbackGenerator();
		impact.prepare();
		impact.init(1);
		impact.impactOccurred();
		console.log('feedTap ios')
	}
	if (platform == "android") {
		uni.vibrateShort();
		console.log('feedTap android')
	}
	// #endif
}

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
			res.push("情侣")
		} else if (index == 2) {
			res.push("婚纱")
		} else if (index == 3) {
			res.push("职场")
		} else if (index == 4) {
			res.push("孕妇")
		} else if (index == 5) {
			res.push("宝宝")
		} else if (index == 6) {
			res.push("家庭")
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
