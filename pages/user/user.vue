<template>
	<view>
		<view>
			<u-avatar :src="avatar" shape="square"></u-avatar>
		</view>
		<view>当前code为:{{code}}</view>
		<u-button type="primary" :plain="true" text="微信登录" @click="login" @getuserinfo="userInfo"></u-button>
	</view>
</template>
<script>
	export default {
		components: {
		},
		data() {
			return {
				code: 0,
				avatar: 'https://himg.bdimg.com/sys/portrait/item/pp.1.16ffce1b.upEz2MMrdhUQQyrG853gNg?_t=1676210548816'
			}
		},
		methods: {
			login() {
				let that = this;
				console.log("login");
				uni.login({
				  provider: 'weixin',
				  onlyAuthorize: true,
				  success: function (loginRes) {
					  console.log(loginRes);
					  that.code = loginRes.code;
				  }
				});
				// 获取用户信息
					// uni.getUserProfile({
					//   desc:'测试',
					//   lang: 'zh_CN',
					//   success: function (infoRes) {
					//     console.log(infoRes.userInfo);
					// 	// this.username = infoRes.userInfo.nickName;
					//   },
					//   fail: function(failInfo) {
					// 	  console.log(failInfo);
					//   }
					// });
			},
			userInfo(info) {
				console.log(info);
				that.code = loginRes.code;
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
