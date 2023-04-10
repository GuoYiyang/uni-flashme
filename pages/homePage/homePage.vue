<template>
	<view v-if="userInfo.role != ''">
		<view style="margin: 20px 36px 20px 36px;">
			<u-row>
				<u-col span="3">
					<u-avatar :src="userInfo.avatar" size="60" @click="clickAvatar">
					</u-avatar>
				</u-col>
				<u-col span="8">
					<text style="font-weight: 600;font-size: 20px;line-height: 25px;color: #191919;">
						{{userInfo.username}}
					</text>
					<view style="margin: 8px;"></view>
					<u-row v-if="isPher">
						<text style="font-weight: 400;font-size: 12px;color: #3D6EC2;;"
							@click="toUserShow">查看个人主页></text>
					</u-row>
				</u-col>
				<u-col span="1">
					<uni-icons type="compose" size="25" @click="editClick"></uni-icons>
				</u-col>
			</u-row>
		</view>

		<view style="margin: 16px;background-color:#FFFFFF;border-radius: 10px" v-if="isPher">
			<view style="padding: 14px 18px 20px 18px">
				<u-row>
					<text style="font-size: 13px;color: #808080;font-weight: 400;">摄影师专区</text>
				</u-row>
			</view>
			<view>
				<u-grid :border="false" :col="pherList.length">
					<u-grid-item v-for="(listItem,listIndex) in pherList" :key="listIndex">
						<u-icon :name="listItem.name" :size="28" customStyle="padding: 0px 4px 10px 4px"
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
				<u-grid :border="false" :col="userList.length">
					<u-grid-item v-for="(listItem,listIndex) in userList" :key="listIndex">
						<u-icon :name="listItem.name" :size="28" customStyle="padding: 0px 4px 10px 4px"
							@click="clickUserList(listIndex)"></u-icon>
						<text
							style="font-weight: 400;font-size: 13px;color: #191919;line-height: 16px;padding-bottom: 24px;">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view style="margin: 16px;background-color:#FFFFFF;border-radius: 10px" v-if="isAdmin">
			<u-button color="#3D6EC2"
				customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;"
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
						name: '/static/publish.png',
						title: '发布作品'
					},
					{
						name: '/static/myproduct.png',
						title: '我的作品'
					},
					{
						name: '/static/plan.png',
						title: '拍摄方案'
					},
					{
						name: '/static/usershow.png',
						title: '作品集'
					}
				],
				userList: [{
						name: '/static/book.png',
						title: '我的预约'
					},
					{
						name: '/static/becomePher.png',
						title: '成为摄影师'
					},
					{
						name: '/static/photocall.png',
						title: '关于FlashMe'
					},
					{
						name: '/static/feedback.png',
						title: '使用反馈'
					},

				],
				userInfo: {
					username: '',
					avatar: '',
					desc: '',
					role: '',
				},
				isAdmin: false,
				isUser: false,
				isPher: false,
			}
		},
		methods: {
			clickAvatar() {
				if (this.isPher) {
					uni.navigateTo({
						url: '/pages/userShow/userShow?userId=' + this.userId
					})
				}
			},
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
						url: '/pages/product/myProduct'
					})
				}
				if (item == 2) {
					uni.navigateTo({
						url: '/pages/plan/plan'
					})
				}
				if (item == 3) {
					uni.navigateTo({
						url: '/pages/product/set'
					})
				}
			},
			clickUserList(item) {
				if (item == 0) {
					uni.navigateTo({
						url: '/pages/publish/publishSuccess'
					})
				}
				if (item == 1) {
					if (this.userInfo.role == 1) {
						uni.navigateTo({
							url: '/pages/becomePher/step1'
						})
					} else {
						uni.showToast({
							title: '您已经入驻'
						})
					}
				}
				if (item == 3) {
					uni.navigateTo({
						url: '/pages/homePage/feedback'
					})
				}
			},
			editClick() {
				uni.navigateTo({
					url: '/pages/homePage/editUserInfo'
				})
			},
			toUserShow() {
				uni.navigateTo({
					url: '/pages/userShow/userShow?userId=' + this.userId
				})
			},
		},
		async onLoad() {
			await this.$onLaunched;
			uni.showNavigationBarLoading()
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
				_this.userInfo.avatar = success.data.avatar;
				_this.userInfo.role = success.data.role;
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
			if (getApp().globalData.USER_ID == '1628712434095104002') {
				_this.isAdmin = true;
			}
		},
		onReady() {
			uni.hideNavigationBarLoading()
		},
		onShow() {

		},

	}
</script>

<style lang="scss" scoped>

</style>
