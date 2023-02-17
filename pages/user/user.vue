<template>
	<view>
		<view class="center">
			<button open-type="chooseAvatar" @chooseavatar="changeAvatar">
				<u-avatar :src="avatar" shape="square">
				</u-avatar>
			</button>
			<view style="font-size: 30rpx; font-weight: bold; padding-top: 10rpx;">{{username}}</view>
			点击修改昵称
			<u-input type="nickname" @blur="changeUsername"></u-input>
		</view>
	</view>
</template>
<script>
	import {
		login,
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
					nickname: this.username
				})
			},
			changeAvatar(info) {
				this.avatar = info.detail.avatarUrl;
				updateUserInfo({
					userId: this.userId,
					avatar: this.avatar
				})
			}
		},
		onShow() {
			this.userId = getApp().globalData.USER_ID;
			this.username = getApp().globalData.USER_NAME;
			this.avatar = getApp().globalData.AVATAR;
			console.log(this.username)
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
</style>
