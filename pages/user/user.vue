<template>
	<view>
		<view style="padding: 20rpx;">
		<fui-card @click="clickPherCard" :src="avatar" :title="username" tag="优质摄影师" full="true">
			<view class="fui-card__content" style="padding: 20rpx;">
				{{desc}}
			</view>
		</fui-card>	
		</view>

		
		<view style="padding: 20rpx;">
			
			<uni-list>
				<uni-list-item title="发布产品" showArrow link="navigateTo" to="../publish/publish"/>
				<uni-list-item title="发布的产品" showArrow link="navigateTo" to=""/>
				<uni-list-item title="发布的客片" showArrow link="navigateTo" to=""/>
				<uni-list-item title="成为摄影师" showArrow link="navigateTo" to=""/>
				<uni-list-item title="PhotoCall预定保障" showArrow link="navigateTo" to=""/>
				<uni-list-item title="问题反馈" showArrow link="navigateTo" to=""/>
			</uni-list>
		</view>


<!-- 		<uni-section title="开启点击反馈" type="line">

		</uni-section> -->

<!-- 		<view class="center">

			<button open-type="chooseAvatar" @chooseavatar="changeAvatar">
				<u-avatar :src="avatar" shape="square">
				</u-avatar>
			</button>
			<view style="font-size: 30rpx; font-weight: bold; padding-top: 10rpx;">{{username}}</view>
			点击修改昵称
			<u-input type="nickname" @blur="changeUsername"></u-input>
		</view> -->
	</view>
</template>
<script>
	import {
		updateUserInfo
	} from '@/api/user.js';
	export default {
		components: {},
		data() {
			return {
				userId: '',
				username: '',
				avatar: ''
			}
		},
		methods: {
			changeUsername(username) {
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
