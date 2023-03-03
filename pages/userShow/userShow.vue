<template>
	<view>
		<view class="center">

			<u-row gutter="0" customStyle="padding: 10rpx;">
				<u-col span="12">
					<view @click="avatarClick">
						<u-avatar
							:src="avatar"
							size="80"></u-avatar>
					</view>

				</u-col>
			</u-row>

			<u-row gutter="10" customStyle="padding: 10rpx;">
				<u-col span="12">
					<text>{{username}}</text>
				</u-col>
			</u-row>

			<u-row gutter="30" customStyle="padding: 10rpx;">
				<u-col span="4">
					<view @click="aboutMe">关于TA</view>
				</u-col>
				<u-col span="4">
					<view @click="contact">联系TA</view>
					<!-- <text @click="contact">联系TA</text> -->
				</u-col>
				<u-col span="6">
					<view @click="priceDetail">套餐价格</view>
					<!-- <text @click="priceDetail">套餐价格</text> -->
				</u-col>
			</u-row>
		</view>
		
		<u-button  @click="follow" :text="isFollow ? '取消关注': '关注'"></u-button>
	
		<view>
			<u-sticky bgColor="#f5f5f5">
				<u-tabs :list="tabsList" lineWidth="30" lineHeight="3" lineColor="#000000" :activeStyle="{
				        color: '#303133',
				        fontWeight: 'bold',
				        transform: 'scale(1.1)'
				    }" :inactiveStyle="{
				        color: '#606266',
				        transform: 'scale(1)'
				    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
				</u-tabs>
			</u-sticky>
		</view>

		<view style="padding: 10rpx;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1.5" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<!-- #ifdef MP-WEIXIN -->
				<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view class="title">{{item.title}}</view>
					<view class="title">￥{{item.price}}</view>
				</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<template v-slot:default="item">
					<view class="item">
						<view class="title">{{item.title}}</view>
						<view class="title">{{item.price}}</view>
					</view>
				</template>
				<!-- #endif -->
			</custom-waterfalls-flow>
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
					},
					{
						name: '情侣'
					},
					{
						name: '写真'
					},
				],
				isFollow:false,
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
			this.userId = param.userId;
			let _this = this;
			getUserInfo({
				userId: this.userId
			}).then((res) => {
				let [error, success] = res;
				_this.username = success.data.nickname;
				_this.city = success.data.city;
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
			}).then((res)=>{
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
