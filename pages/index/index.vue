<template>
	<view>
		<view style="padding: 40rpx; font-weight: bold;">
			<view style="font-size: 35rpx;">HI 爱拍照的你</view>
			<view>在PhotoCall，探索自我</view>
		</view>

		<!-- 搜索 -->
		<view class="flex-row">
			<uni-data-picker popup-title="请选择城市" :localdata="cityList" v-model="city" :clear-icon="false"
				@change="cityChange">
			</uni-data-picker>
			<!-- <uni-data-select v-model="city" :localdata="cityList" :clear="false" @change="cityChange"></uni-data-select> -->
			<u-search :showAction="false" :animation="true" shape="square" placeholder="摄影师或者主题" bgColor="#FFFFFF"
				@search="search"></u-search>
		</view>


		<!-- 快捷入口 -->
		<view style="padding-top: 20rpx; padding-bottom: 20px;">
			<u-grid :border="false" col="4" @click="clickFastEnter">
				<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
					<u-icon :customStyle="{paddingTop:'20rpx'}" :name="listItem.name" :size="22" bold></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<!-- 		<view>
			<u-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
				<view v-for="(item, index) in scrollList" :key="index">
					<image :src="item.thumb""></image>
				</view>
			</u-scroll-list>
		</view> -->

		<!-- <u-divider text="分割线" :dot="true"></u-divider> -->

		<!-- 轮播图 -->
		<!-- 		<view style="padding: 0 10rpx;">
			<u-swiper :list="swiperList" indicator indicatorMode="line" circular></u-swiper>
		</view> -->


		<!-- tab切换 -->
		<!-- 		<template>
			<u-sticky bgColor="#FFFFFF">
				<u-tabs :list="tabList" @click="changeTab"></u-tabs>
			</u-sticky>
		</template> -->


		<!-- 返回顶部 -->
		<!-- 		<template>
			<u-back-top :scroll-top="scrollTop" icon="arrow-up" top="1000"></u-back-top>
		</template> -->



		<!--  瀑布流  -->
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
		productDetail,
		productRandom
	} from '@/api/product.js'
	import {
		getUserInfo
	} from '@/api/user.js'
	export default {
		data() {
			return {
				city: '0',
				cityList: [{
						value: "0",
						text: "深圳"
					},
					{
						value: "1",
						text: "北京"
					},
					{
						value: "2",
						text: "上海"
					},
					{
						value: "3",
						text: "广州"
					},
				],
				// scrollTop: 0,
				// tab bar
				// tabList: [{
				// 	name: '证件',
				// }, {
				// 	name: '写真',
				// }, {
				// 	name: '结婚'
				// }, {
				// 	name: '亲子'
				// }, {
				// 	name: '情侣'
				// }, {
				// 	name: '好友'
				// }, {
				// 	name: '宠物'
				// }],
				// 轮播图
				// swiperList: [
				// 	'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				// 	'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				// 	'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				// ],
				// 快捷入口
				fastList: [{
						name: 'camera',
						title: '写真'
					},
					{
						name: 'account',
						title: '证件照'
					},
					{
						name: 'gift',
						title: '婚纱'
					},
					{
						name: 'woman',
						title: '情侣'
					},
					{
						name: 'home',
						title: '亲子'
					},
					{
						name: 'lock',
						title: '宠物'
					},
					{
						name: 'photo',
						title: '旅拍'
					},
					{
						name: 'more-dot-fill',
						title: '其他'
					}
				],
				// scrollList: [{
				// 	thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				// }, {
				// 	thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				// }, {
				// 	thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				// }, {
				// 	thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				// }, {
				// 	thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				// }],
				// 产品瀑布流
				product: {
					list: []
				}
			}
		},
		methods: {
			cityChange(item) {
				this.city = item.detail.value[0].value;
				productRandom({
					city: item.detail.value[0].value
				}).then((res) => {
					let [error, success] = res;
					this.product.list = success.data;
					this.$refs.waterfallsFlowRef.refresh();
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
			},
			search(res) {
				uni.navigateTo({
					url: '/pages/filterProduct/filterProduct?query=' + res + '&city=' + this.city
				});
			},
			selectedBanner(item, index) {
				console.log(item, index)
			},
			clickFastEnter(index) {
				uni.navigateTo({
					url: '/pages/filterProduct/filterProduct?tag=' + index + '&city=' + this.city
				});
			},
			changeTab(index) {
				console.log(index);
				uni.showToast({
					title: index.name,
					icon: 'none'
				})
			}
		},
		onLoad: function(param) {
			let _this = this;
			// getUserInfo({
			// 	userId: getApp().globalData.USER_ID
			// }).then((res) => {
			// 	let [error, success] = res;
			// 	if (success.data.city != '') {
			// 		_this.city = success.data.city;
			// 	}
			let city = this.city;
			if (param.city != null) {
				this.city = param.city;
				city = param.city;
			}
			productRandom({
				city: city
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			})
			// })
		},
		onPullDownRefresh() {
			let _this = this;
			// uni.redirectTo({
			// 	url: '/pages/index/index?city=' + _this.city
			// });
			setTimeout(() => {
				_this.$refs.waterfallsFlowRef.refresh();
				uni.stopPullDownRefresh();
			}, 500);
			// productRandom({
			// 	city: this.city
			// }).then((res)=>{
			// 	let [error, success] = res;
			// 	this.product.list = success.data;
			// 	this.$refs.waterfallsFlowRef.refresh();
			// })
			// setTimeout(function() {
			// 	uni.stopPullDownRefresh();
			// }, 500);
		},
		onReachBottom() {
			productRandom({
				city: this.city
			}).then((res) => {
				let [error, success] = res;
				this.product.list = this.product.list.concat(success.data);
			})
		}

	}
</script>
<style>
	page {
		background-color: #f2f5f9;
	}
</style>
<style lang="scss" scoped>
	.flex-row {
		padding: 10px;
		flex-flow: row;
		justify-content: flex-start;
		display: flex;
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
