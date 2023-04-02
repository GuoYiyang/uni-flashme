/**
 * @description 导出默认通用配置
 */

// const accountInfo = ;
// console.log(accountInfo)
// // env类型 develop:开发版、trial:体验版、release:正式版
// const envWx = accountInfo;
// if (envWx === '') {
// 	path = require('../env/prod.js')
// } else {
// 	path = require('../env/dev.js')
// }
const setting = {
	baseUrl: wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://yiyangguo.xyz' : 'https://yiyangguo.xyz'
}
module.exports = setting
