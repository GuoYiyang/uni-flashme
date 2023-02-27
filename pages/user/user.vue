<template>
	<view>
		<view style="padding: 20rpx;">
			<fui-card @click="clickAvatar" :src="avatar" :title="username" tag="优质摄影师" full="true">
				<view class="fui-card__content" style="padding: 20rpx;">
					{{desc}}
				</view>
			</fui-card>
		</view>


		<view style="padding: 20rpx;">

			<uni-list>
				<uni-list-item title="发布产品" showArrow link="navigateTo" to="../publish/publish" />
				<uni-list-item title="修改资料" showArrow link="navigateTo" to="../editUserInfo/editUserInfo" />
				<uni-list-item title="成为摄影师" showArrow link="navigateTo" to="../becomePher/becomePher" />
				<uni-list-item title="PhotoCall预定保障" showArrow link="navigateTo" to="../policyDoc/policyDoc" />
				<uni-list-item title="问题反馈" showArrow link="navigateTo" to="../feedback/feedback" />
			</uni-list>
		</view>
	</view>
</template>
<script>
	import {
		updateUserInfo,
		getUserInfo
	} from '@/api/user.js';
	export default {
		components: {},
		data() {
			return {
				userId: '',
				username: '',
				avatar: '',
				desc: '',
			}
		},
		methods: {
			clickAvatar() {
				uni.navigateTo({
					url: '/pages/homePage/homePage'
				})
			},
		},
		onLoad() {
			this.userId = getApp().globalData.USER_ID;
			this.username = getApp().globalData.USER_NAME;
			this.avatar = getApp().globalData.AVATAR;
			let _this = this;
			getUserInfo({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.username = success.data.nickname;
				_this.city = success.data.city;
				_this.gender = success.data.gender;
				_this.avatar = success.data.avatar;
				_this.desc = success.data.desc;
				_this.phone = success.data.phone;
			});
		
		},
		onShow() {
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
