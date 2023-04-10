const setting = {
	baseUrl: wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://yiyangguo.xyz' : 'https://yiyangguo.xyz:8880'
}
module.exports = setting
