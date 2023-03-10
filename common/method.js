export function changeCity(index) {
	if (index == 0) {
		return "深圳"
	} else {
		return "未知城市"
	}
}

export function changeTag(tagstr) {
	let tagList = tagstr.split(',');
	let res = [];
	tagList.forEach(index=>{
		if (index == 0) {
			res.push("写真") 
		} else if (index == 1){
			res.push("证件照")
		} else if (index == 2){
			res.push("婚纱")
		} else if (index == 3){
			res.push("情侣")
		}else if (index == 4){
			res.push("亲子")
		}else if (index == 5){
			res.push("宠物")
		}else if (index == 6){
			res.push("旅拍")
		}else if (index == 7){
			res.push("其他")
		} 
	})
	
	return res;
	

}