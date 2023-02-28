<template>
	<view>

		<!-- 轮播图 -->
		<view>
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular imgMode="aspectFit" height="550"
				@click="previewImg"></u-swiper>
		</view>

		<view style="padding: 10rpx;">
			<uni-row justify="">
				<uni-col :span="18">
					<view class="title">{{title}}</view>
				</uni-col>
				<uni-col :span="6">
					<view class="title">￥{{price}}</view>
				</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="24">
					<view class="desc">{{content}}</view>
				</uni-col>
			</uni-row>
		</view>

		<view style=" padding-bottom: 50rpx;">
			<fui-card :src="cameramanAvatar" :title="cameramanName" tag="优质摄影师" @click="clickCard" :full="true"></fui-card>
			<uni-goods-nav :options="tabbarOptions" :button-group="tabbarGroup" @click="optionClick"
				@buttonClick="buttonClick" />
		</view>
		

		
		

<!-- 

		<view class="center">
			<u-tabs :list="tabsList" lineWidth="60" lineHeight="3" lineColor="#000000" :activeStyle="{
			        color: '#303133',
			        fontWeight: 'bold',
			        transform: 'scale(1.1)'
			    }" :inactiveStyle="{
			        color: '#606266',
			        transform: 'scale(1)'
			    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
			</u-tabs>
		</view>

		<view v-if="productDetailShow" class="info">

			<uni-section title="基本信息" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄人数:1</view>
					<view>拍摄张数:15</view>
					<view>拍摄时长:1h</view>
				</uni-group>
			</uni-section>
			<uni-section title="拍摄须知" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄需要提前化妆。。。</view>
				</uni-group>
			</uni-section>
		</view>

		<view v-if="productCustomerShow" class="info">
			<uni-section title="客片展示" type="line" titleFontSize="30rpx">
			</uni-section>
		</view>



		<u-popup :show="popShow" :round="20" @close="this.popShow = false" mode="bottom" :safeAreaInsetBottom="false">

			<uni-section title="基本信息" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄人数:1</view>
					<view>拍摄张数:15</view>
					<view>拍摄时长:1h</view>
				</uni-group>
			</uni-section>
			<uni-section title="拍摄须知" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄需要提前化妆。。。</view>
				</uni-group>
			</uni-section>
		</u-popup>

 -->


	</view>
</template>

<script>
	import {
		productDetail,
		productCollect,
		getProductCollectStatus
	} from '@/api/product.js'
	import {
		getUserInfo
	} from '@/api/user.js'
	export default {
		data() {
			return {
				windowWidth: '',
				swiperHeight: '',
				productId: '',
				cameramanId: '',
				cameramanAvatar: '',
				cameramanName: '',
				cameramanDesc: '',
				cameramanPhone: '',
				options: [{
					icon: 'heart',
					text: '收藏'
				}],
				imgUrlList: [],
				title: '',
				price: '',
				tags: '',
				content:'',
				tabsList: [{
						name: '拍摄须知'
					},
					{
						name: '客片展示'
					},
				],
				tabsCurrent: 0,
				productDetailShow: true,
				productCustomerShow: false,
				isCollect: false,
				tabbarOptions: [{
					icon: 'heart',
					text: '收藏'
				}],
				tabbarGroup: [{
					text: '联系摄影师',
					backgroundColor: '#000000',
					color: '#fff'
				}],
				info: '',
				introduction: '',
				popShow: false
			}
		},
		methods: {
			previewImg(item) {
				uni.previewImage({
					current: item,
					urls: this.imgUrlList
				});
			},
			clickCard() {
				uni.navigateTo({
					url: '../userShow/userShow?userId=' + this.cameramanId
				})
			},
			tabsChange(index) {
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.productDetailShow = true;
					this.productCustomerShow = false;
				}
				if (index.index == 1) {
					this.productDetailShow = false;
					this.productCustomerShow = true;
				}
			},
			optionClick(item) {
				this.isCollect = !this.isCollect;
				if (this.isCollect) {
					this.tabbarOptions[0].icon = 'heart-filled'
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 0
					})
				} else {
					this.tabbarOptions[0].icon = 'heart'
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 1
					})
				}
			},
			buttonClick(item) {
				uni.makePhoneCall({
					phoneNumber: "18188606406" //电话号码
				})
			}
		},
		onLoad: function(param) {

			this.productId = param.id;
			productDetail({
				id: param.id
			}).then((res) => {
				let [error, success] = res;
				this.imgUrlList = success.data.imgUrlList;
				this.title = success.data.title;
				this.price = success.data.price;
				this.tags = success.data.tags;
				this.cameramanId = success.data.userId;
				this.content = success.data.content;

				uni.setNavigationBarTitle({
					title: this.title
				});

				let content = JSON.parse(success.data.userId);

				this.info = content.info;
				this.introduction = content.introduction;

				getUserInfo({
					userId: this.cameramanId
				}).then((res) => {
					let [error, success] = res;
					this.cameramanAvatar = success.data.avatar;
					this.cameramanName = success.data.nickname;
					this.cameramanDesc = success.data.desc;
					this.cameramanPhone = success.data.phone;
				})
			});
			getProductCollectStatus({
				userId: getApp().globalData.USER_ID,
				productId: this.productId,
			}).then((res) => {
				let [error, success] = res;
				this.isCollect = success.data;
				if (this.isCollect) {
					this.tabbarOptions[0].icon = 'heart-filled'
				} else {
					this.tabbarOptions[0].icon = 'heart'
				}
			})
			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			});
		},
		onShow() {
			this.tabsCurrent = 0;
			this.productDetailShow = true;
			this.productCustomerShow = false;
		},
		onShareAppMessage(res) {
			console.log(res)
			return {
				title: this.title,
				path: '/pages/product/product?id=' + this.productId
			};
		}

	}
</script>

<style lang="scss" scoped>
	.center {
		padding: 10rpx;
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		padding: 10px;
		font-size: 25px;
		font-weight: bold;
	}

	.desc {
		padding: 10px;

		.font {
			font-size: 18px;
			font-weight: bolder;
		}
	}

	.info {
		padding: 10px;
		padding-bottom: 200rpx;

		.font {
			font-size: 18px;
			font-weight: bolder;
		}
	}

	.collect-tabbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 50rpx;
		right: 50rpx;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 40rpx;
	}
</style>
