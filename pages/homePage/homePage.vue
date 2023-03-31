<template>
	<view>

		<view style="padding: 20px 36px 20px 36px;">
			<u-row>
				<u-col span="3">
					<u-avatar :src="userInfo.avatar" size="60" @click="toUserShow">
					</u-avatar>
				</u-col>
				<u-col span="7">
					<text style="font-weight: 600;font-size: 20px;line-height: 25px;color: #191919;">
						{{userInfo.username}}
					</text>
				</u-col>
				<u-col span="2">
					<u-button color="#E0E0E0;" @click="editClick"
						customStyle="border-radius:6px; width: 50px;height: 24px;">
						<text style="color: #191919; font-weight: 400;font-size: 12px;line-height: 16px;">编辑</text>
					</u-button>
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


		<view style="margin: 16px;background-color:#FFFFFF;border-radius: 10px" v-if="isPher">
			<view style="padding: 14px 18px 20px 18px">
				<u-row>
					<u-col span="9.5"><text style="font-size: 13px;color: #808080;font-weight: 400;">摄影师专区</text>
					</u-col>
					<u-col span="2.5"><text @click="toUserShow"
							style="font-size: 13px;color: #808080;font-weight: 400;">进入主页></text></u-col>
				</u-row>
			</view>
			<view>
				<u-grid :border="false" col="3">
					<u-grid-item v-for="(listItem,listIndex) in pherList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding: 0px 4px 10px 4px"
							@click="clickPherList(listIndex)"></u-icon>
						<text
							style="font-weight: 400;font-size: 13px;color: #191919;line-height: 16px;padding-bottom: 24px;">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view style="margin: 16px;background-color:#FFFFFF;border-radius: 10px" v-if="isUser">
			<view style="padding: 14px 18px 20px 18px">
				<text style="font-size: 13px;color: #808080;font-weight: 400;">用户专区</text>
			</view>
			<view>
				<u-grid :border="false" col="3">
					<u-grid-item v-for="(listItem,listIndex) in userList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding: 0px 4px 10px 4px"
							@click="clickUserList(listIndex)"></u-icon>
						<text
							style="font-weight: 400;font-size: 13px;color: #191919;line-height: 16px;padding-bottom: 24px;">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<!-- <view style="margin: 16px;background-color:#FFFFFF;border-radius: 10px;">
			<u-list height="130px">
				<u-list-item>
					<u-cell title="PhotoCall预定保障" url="../policyDoc/policyDoc"
						customStyle="font-weight: 400;font-size: 14px;line-height: 24px;">
						<u-icon slot="icon" name="/static/price.png" customStyle="margin: -3px 5px -3px 0"></u-icon>
										<u-avatar slot="icon" shape="square" size="35"
							src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/index_background.jpg"
							customStyle="margin: -3px 5px -3px 0"></u-avatar>
					</u-cell>
					<u-cell title="问题反馈" url="../feedback/feedback"
						customStyle="font-weight: 400;font-size: 14px;line-height: 24px;">
						<u-icon slot="icon" name="/static/price.png" customStyle="margin: -3px 5px -3px 0"></u-icon>
												<u-avatar slot="icon" shape="square" size="35"
							src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/index_background.jpg"
							customStyle="margin: -3px 5px -3px 0"></u-avatar>
					</u-cell>
					<view v-if="isAdmin">
						<u-cell title="待审核" url="../audit/audit"
							customStyle="font-weight: 400;font-size: 14px;line-height: 24px;" :border="false">
							<u-icon slot="icon" name="/static/price.png" customStyle="margin: -3px 5px -3px 0"></u-icon>
														<u-avatar slot="icon" shape="square" size="35"
								src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/index_background.jpg"
								customStyle="margin: -3px 5px -3px 0"></u-avatar>
						</u-cell>
					</view>
				</u-list-item>
			</u-list>
		</view> -->
		<view v-if="isAdmin">
			<u-button color="#3D6EC2"
				customStyle="border-radius:10px;width:100px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;"
				@click="toAudit">待审核</u-button>
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
				pherList: [{
						name: '/static/price.png',
						title: '发布作品'
					}, 
					{
						name: '/static/price.png',
						title: '我的作品'
					},
					{
						name: '/static/price.png',
						title: '拍摄方案'
					}
					// ,
					// {
					// 	name: '/static/price.png',
					// 	title: '查看预约'
					// },
				],
				userList: [{
						name: '/static/price.png',
						title: '我的预约'
					},
					{
						name: '/static/price.png',
						title: '成为摄影师'
					},
					{
						name: '/static/price.png',
						title: '关于PhotoCall'
					},

				],
				userInfo: {
					username: '',
					avatar: '',
					desc: ''
				},
				isAdmin: false,
				isUser: false,
				isPher: false,
			}
		},
		methods: {
			toAudit() {
				uni.navigateTo({
					url: '/pages/audit/audit'
				})
			},
			clickPherList(item) {
				if (item == 0) {
					uni.navigateTo({
						url: '/pages/publish/publish'
					})
				}
				if (item == 1) {
					uni.navigateTo({
						url: '/pages/myProduct/myProduct'
					})
				}
				if (item == 2) {
					uni.navigateTo({
						url: '/pages/plan/plan'
					})
				}
			},
			clickUserList(item) {
				if (item == 0) {
				}
				if (item == 1) {
					uni.navigateTo({
						url: '/pages/becomePher/step1'
					})
				}

			},
			editClick() {
				uni.navigateTo({
					url: '../editUserInfo/editUserInfo'
				})
			},
			toUserShow() {
				uni.navigateTo({
					url: '../userShow/userShow?userId=' + this.userId
				})
			},
		},
		async onLoad() {
			await this.$onLaunched;
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
				if (success.data.role == 0) {
					_this.isAdmin = true;
					_this.isPher = true;
					_this.isUser = true;
				} else if (success.data.role == 1) {
					_this.isUser = true;
				} else if (success.data.role == 2) {
					_this.isUser = true;
					_this.isPher = true;
				}
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
	}
</style>
