<template>
	<view>
		<button @click="login">login</button>
	</view>
		
</template>
<script>
	export default {
		components: {
		},
		data() {
			return {
				
			}
		},
		methods: {
			login() {
				console.log("login")
				uni.login({ 
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event){
						const {code} = event
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						uni.request({
						    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
						    data: {
						        code: event.code
						    },
						    success: (res) => {
						        //获得token完成登录
								uni.setStorageSync('token',res.token)
						    }
						});
					},
					fail: function (err) {
				        // 登录授权失败  
				        // err.code是错误码
				    }
				})
			}
		}
	}
</script>
<style lang="scss">
	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color: #666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>
