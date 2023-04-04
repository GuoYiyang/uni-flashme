const setting = {
	baseUrl: wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://yiyangguo.xyz' : 'https://yiyangguo.xyz'
}
module.exports = setting
