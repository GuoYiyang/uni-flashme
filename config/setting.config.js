const setting = {
	baseUrl: wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://yiyangguo.xyz:6666' : 'https://yiyangguo.xyz'
}
module.exports = setting
