<template>
	<view>
		<view class="center">
			<u-avatar :src="avatar" shape="square"></u-avatar>
			<view style="font-size: 30rpx; font-weight: bold; padding-top: 10rpx;">{{username}}</view>
		</view>
		<u-button v-if="!loginStatus" type="success" :plain="true" text="微信登录" @getuserinfo="userInfo"></u-button>
	</view>
</template>
<script>
	export default {
		components: {
		},
		data() {
			return {
				loginStatus:false,
				username:'Slimshady',
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
				console.log("info");
				console.log(info);
				that.code = loginRes.code;
			}
		}
	}
</script>
<style lang="scss">
	.center {
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
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
