<template>
	<view>
		<view class="center">
			<u-row gutter="10" customStyle="padding: 10rpx;">
				<u-col span="12">
					<view @click="avatarClick">
						<u-avatar
							:src="userInfo.avatar"
							size="80">
							</u-avatar>
					</view>

				</u-col>
			</u-row>
			<u-row gutter="0" customStyle="padding: 10rpx;">
				<u-col span="12">
					<text>{{userInfo.username}}</text>
				</u-col>
			</u-row>
		</view>

<!-- 		<u-row gutter="0" customStyle="padding: 10rpx;">
			<u-col span="4">
				<u-button @click="aboutMe">
					关于我
				</u-button>
			</u-col>
			<u-col span="4">
				<u-button @click="contact">
					联系方式
				</u-button>
			</u-col>
			<u-col span="4">
				<u-button @click="priceDetail">
					套餐价格
				</u-button>
			</u-col>
		</u-row> -->

		<view style="padding: 20rpx;">

			<uni-list>
				<!-- <uni-list-item title="发布产品" showArrow link="navigateTo" to="../publish/publish"/> -->
				<uni-list-item title="我的作品" showArrow link="navigateTo" to="../myProduct/myProduct" />
				<uni-list-item title="成为摄影师" showArrow link="navigateTo" to="../becomePher/becomePher" />
				<uni-list-item title="PhotoCall预定保障" showArrow link="navigateTo" to="../policyDoc/policyDoc" />
				<uni-list-item title="问题反馈" showArrow link="navigateTo" to="../feedback/feedback" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	import {
		getProductPage
	} from '@/api/product.js'
	import {
		updateUserInfo,
		getUserInfo
	} from '@/api/user.js';
	export default {
		data() {
			return {
				userInfo:{
					userId: '',
					username: '',
					avatar: '',
					desc: '',
				}

			}
		},
		methods: {
			avatarClick() {
				uni.navigateTo({
					url: '../editUserInfo/editUserInfo'
				})
			}
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
				_this.userInfo.username = success.data.nickname;
				_this.userInfo.city = success.data.city;
				_this.userInfo.gender = success.data.gender;
				_this.userInfo.avatar = success.data.avatar;
				_this.userInfo.desc = success.data.desc;
				_this.userInfo.phone = success.data.phone;
			})
		},

	}
</script>

<style lang="scss" scoped>
	.center {
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item {
		padding: 10rpx 10rpx 20rpx;

		.title {
			line-height: 48rpx;
			font-size: 30rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
		}

		.grid-text {
			font-size: 14px;
			color: #909399;
			padding: 10rpx 0 20rpx 0rpx;
			/* #ifndef APP-PLUS */
			box-sizing: border-box;
			/* #endif */
		}
	}
</style>
