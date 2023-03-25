<template>
	<view>
		<view style="padding: 20px 36px 20px 36px;">
			<u-row>
				<u-col span="3">
					<u-avatar :src="userInfo.avatar" size="60">
					</u-avatar>
				</u-col>
				<u-col span="7">
					<text style="font-weight: 600;font-size: 18px;line-height: 25px;color: #191919;">
						{{userInfo.username}}
					</text>
				</u-col>
				<u-col span="2">
					<u-button  color="#E0E0E0;" @click="editClick" 
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
		
		<view style="background-color: #FFFFFF; border-radius: 14px; padding: 12px;">
			<view style="padding: 0px 18px 20px 18px">
				<u-row>
					<u-col span="9.5"><text style="font-size: 13px;color: #808080;font-weight: 400;">摄影师专区</text></u-col>
					<u-col span="2.5"><text style="font-size: 13px;color: #191919;font-weight: 400;">进入主页></text></u-col>
				</u-row>
			</view>
			<view style="padding: 0px 18px 20px 18px">
				<u-grid :border="false" col="3">
					<u-grid-item v-for="(listItem,listIndex) in pherList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding: 0px 4px 10px 4px"
							@click="clickFastList(listIndex)"></u-icon>
						<text style="font-weight: 500;font-size: 13px;color: #191919;line-height: 16px;padding-bottom: 10px;">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view style="padding: 12px;">

			<uni-list>
				<!-- <uni-list-item title="发布产品" showArrow link="navigateTo" to="../publish/publish"/> -->
				<uni-list-item title="我的作品" showArrow link="navigateTo" to="../myProduct/myProduct" />
				<view v-if="isAdmin">
					<uni-list-item title="待审核" showArrow link="navigateTo" to="../audit/audit" />
				</view>
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
				pherList: [{
						name: '/static/message.png',
						title: '留言'
					},
					{
						name: '/static/price.png',
						title: '套餐价格'
					},
					{
						name: '/static/phone.png',
						title: '联系方式'
					},
				],
				userInfo: {
					userId: '',
					username: '',
					avatar: '',
					desc: ''
				},
				isAdmin: false,
			}
		},
		methods: {
			editClick() {
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
				if (success.data.role == 0) {
					_this.isAdmin = true;
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
