<template>
	<view>
		<view class="center">
			<button open-type="chooseAvatar" @chooseavatar="changeAvatar">
				<u-avatar :src="avatar" shape="square">
				</u-avatar>
			</button>
			<view style="font-size: 30rpx; font-weight: bold; padding-top: 10rpx;">{{username}}</view>
			<u-input type="nickname" @blur="changeUsername"></u-input>
			<!-- {{code}} -->
		</view>
		<!-- {{loginStatus}} -->
		<!-- <u-button v-if="!loginStatus" type="success" :plain="true" text="微信登录" @click="login"></u-button> -->
		<!-- <u-button type="success" :plain="true" text="检查登录状态" @click="getUserInfo()"></u-button> -->
	</view>
</template>
<script>
	import {
		login,
		getUserInfo,
		updateUserInfo
	} from '@/api/user.js';
	export default {
		components: {},
		data() {
			return {
				userId:'',
				username: '',
				avatar: ''
			}
		},
		methods: {
			changeUsername(username){
				this.username = username;
				updateUserInfo({
					userId: this.userId,
					nickname: this.username,
					avatar: this.avatar
				}).then((res)=>{
					let [err, data] = res;
					console.log(res);
					if (data.data.code == 0) {
						
					} else {
						
					}
				})
			},
			changeAvatar(e) {
				this.avatar = e.detail.avatarUrl;
				updateUserInfo({
					userId: this.userId,
					nickname: this.username,
					avatar: this.avatar
				}).then((res)=>{
					let [err, data] = res;
					console.log(res);
					if (data.data.code == 0) {
						
					} else {
						
					}
				})
			}
		},
		onShow() {
			this.userId = getApp().globalData.userId;
			this.username = getApp().globalData.nickname;
			this.avatar = getApp().globalData.avatar;
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
