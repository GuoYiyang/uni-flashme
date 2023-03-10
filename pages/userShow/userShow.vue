<template>
	<view>
		<view style="background-color: #FFFFFF; padding-bottom: 10px; border-radius:0 0 15px 15px;">

			<view class="center">
				<u-row gutter="0" customStyle="padding: 10px;">
					<u-col span="12">
						<view @click="avatarClick">
							<u-avatar :src="avatar" size="80"></u-avatar>
						</view>
					</u-col>
				</u-row>
				<u-row customStyle="padding-top: 10px;">
					<u-col span="12">
						<text style="font-size: 20px; font-weight: bolder;">{{username}}</text>
					</u-col>
				</u-row>
			
				<u-row gutter="10" customStyle="padding-top: 10px;">
					<u-col span="6">
						<u-icon name="map" :label="city"></u-icon>
					</u-col>
					<u-col span="10">
						<u-icon name="checkmark-circle" label="已验证"></u-icon>
						<!-- <text style="font-size: 12px; color: #4E4E4E;">已验证</text> -->
					</u-col>
				</u-row>
				
				<u-row customStyle="padding-top: 10px;">
					<u-col span="12">
						<text style="font-size: 14px; color: #4E4E4E;">{{desc}}</text>
					</u-col>
				</u-row>

				<view style="padding: 10px;">
					<u-button @click="follow" :text="isFollow ? '取消关注': '关注'" type="primary" customStyle="border-radius:15px; width:100px"></u-button>
				</view>

			</view>

			<u-line></u-line>

			<view style="padding: 10px;">
				<u-grid :border="false" col="3" @click="clickFastEnter">
					<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding:10px"></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<view style="padding: 10px;">
		
		</view>

		<view style="background-color: #F7F9FB; padding-top: 0px; border-radius:15px 15px 0 0;">
			<view style="background-color: #FFFFFF; padding: 6px;">
				<u-sticky bgColor="FFFFFF">
					<u-tabs :list="tabsList" lineWidth="30" lineHeight="3" lineColor="#000000" :activeStyle="{
					        color: '#303133',
					        fontWeight: 'bold',
					        transform: 'scale(1)'
					    }" :inactiveStyle="{
					        color: '#606266',
					        transform: 'scale(1)'
					    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
					</u-tabs>
				</u-sticky>
			</view>

			<view style="padding: 10rpx;">
				<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
					@wapperClick="wapperClick" ref="waterfallsFlowRef">
					<!-- #ifdef MP-WEIXIN -->
					<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view class="title">{{item.title}}</view>
						<view class="desc">￥{{item.price}}</view>
					</view>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<template v-slot:default="item">
						<view class="item">
							<view class="title">{{item.title}}</view>
							<view class="desc">{{item.price}}</view>
						</view>
					</template>
					<!-- #endif -->
				</custom-waterfalls-flow>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getProductPage
	} from '@/api/product.js'
	import {
		getUserInfo,
		pherCollect,
		getPherCollectStatus
	} from '@/api/user.js';
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				userId: '',
				username: '',
				avatar: '',
				city: '',
				gender: '',
				desc: '',
				phone: '',
				page: 1,
				pageSize: 10,
				product: {
					list: []
				},
				tabsList: [{
					name: '全部'
				}],
				isFollow: false,
				fastList: [{
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
			}
		},
		methods: {
			follow() {
				let pherId = this.userId;
				this.isFollow = !this.isFollow;
				let deleted = 0;
				if (!this.isFollow) {
					deleted = 1;
				}
				pherCollect({
					userId: getApp().globalData.USER_ID,
					pherId: pherId,
					isDelete: deleted
				})
			},
			wapperClick(item) {
				uni.navigateTo({
					url: '../product/product?id=' + item.id
				})
			},
			imageClick(item) {
				uni.navigateTo({
					url: '../product/product?id=' + item.id
				})
			}
		},
		async onLoad(param) {
			await this.$onLaunched;
			this.userId = param.userId;
			let _this = this;
			getUserInfo({
				userId: this.userId
			}).then((res) => {
				let [error, success] = res;
				console.log(success)
				_this.username = success.data.nickname;
				_this.city = changeCity(success.data.city);
				_this.gender = success.data.gender;
				_this.avatar = success.data.avatar;
				_this.desc = success.data.desc;
				_this.phone = success.data.phone;
				uni.setNavigationBarTitle({
					title: this.username + "的主页"
				});

			})
			getProductPage({
				userId: this.userId,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			})
			getPherCollectStatus({
				userId: getApp().globalData.USER_ID,
				pherId: this.userId
			}).then((res) => {
				let [error, success] = res;
				_this.isFollow = success.data;
			})
			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			});
		},
		onReachBottom() {
			this.page = this.page + 1;
			getProductPage({
				userId: this.userId,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				this.product.list = this.product.list.concat(success.data);
			})
		},
		onShareAppMessage(res) {
			console.log(res)
			return {
				title: this.username,
				//如果有参数的情况可以写path
				path: "/pages/userShow/userShow?userId=" + this.userId,
			};
		}
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
