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
				<uni-list-item title="发布的产品" showArrow link="navigateTo" to="../myProduct/myProduct"/>
				<uni-list-item title="发布的客片" showArrow link="navigateTo" to=""/>
				<uni-list-item title="成为摄影师" showArrow link="navigateTo" to=""/>
				<uni-list-item title="PhotoCall预定保障" showArrow link="navigateTo" to=""/>
				<uni-list-item title="问题反馈" showArrow link="navigateTo" to=""/>
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
				desc:'',
			}
		},
		methods: {
			clickPherCard() {
				uni.navigateTo({
					url: '/pages/editUserInfo/editUserInfo'
				})
			},
		},
		onShow() {
			this.userId = getApp().globalData.USER_ID;
			this.username = getApp().globalData.USER_NAME;
			this.avatar = getApp().globalData.AVATAR;
			let _this = this;
			getUserInfo({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				console.log(success);
				_this.name = success.data.nickname;
				_this.city = success.data.city;
				_this.gender = success.data.gender;
				_this.avatar = success.data.avatar;
				_this.desc = success.data.desc;
				_this.phone = success.data.phone;
			})
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
