<template>
	<view>
		<view class="center">
<!-- 			<button open-type="chooseAvatar" @chooseavatar="selectAvatar">
				<u-avatar :src="avatar" shape="square"></u-avatar>
			</button>
			<button open-type="contact" @login="login">Login</button>
			请输入昵称：<input type="nickname"/>
			
			<view style="font-size: 30rpx; font-weight: bold; padding-top: 10rpx;">{{username}}</view>
			<!-- {{code}} --> -->
		</view>
		{{loginStatus}}
		<u-button v-if="!loginStatus" type="success" :plain="true" text="微信登录" @click="login"></u-button>
		<u-button type="success" :plain="true" text="检查登录状态" @click="getUserInfo()"></u-button>
	</view>
</template>
<script>
	import { getUserInfo } from '@/api/user.js';
	export default {
		components: {
		},
		data() {
			return {
				data:{},
				loginStatus:false,
				username:'Slimshady',
				code: 0,
				avatar: ''
			}
		},
		methods: {
			getphone(e){
				console.log(e);
			},
			selectAvatar(e) {
				console.log(e.detail.avatarUrl);
				this.avatar = e.detail.avatarUrl;
			},
			login(e) {
				// console.log(e);
				// let that = this;
				// console.log("login");
				// uni.login({
				//   provider: 'weixin',
				//   onlyAuthorize: true,
				//   success: function (loginRes) {
				// 	  console.log(loginRes);
				// 	  that.code = loginRes.code;
				//   }
				// });
			},
			getUserInfo(info) {
				let that = this;
				uni.login({
				  provider: 'weixin',
				  onlyAuthorize: true,
				  success: (res) => {
					  console.log(res);
					  that.data = getUserInfo(res)
					  console.log(that.data);
				  }
				});
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
