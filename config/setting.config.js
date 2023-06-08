const setting = {
	baseUrl: wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://flashme.cloud' : 'https://flashme.cloud:8880'
}
module.exports = setting
