<template>
	<view>
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
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef" @loaded="loaded">
				<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<u-row>
						<view class="title">{{item.title}}</view>
					</u-row>
					<u-row>
						<u-col span="6">
							<u-tag :text="item.status" bgColor="#F3F4F5" color="#191919" borderColor="#F3F4F5"></u-tag>
							<!-- <view class="desc">￥{{item.price}}</view> -->
						</u-col>
						<u-col span="4">
						</u-col>
						<u-col span="2">
							<uni-icons type="more-filled" size="20" color="#1f1f1f"></uni-icons>
						</u-col>
					</u-row>
				</view>
			</custom-waterfalls-flow>
		</view>

		<!-- 		<u-popup :show="popShow" @close="this.popShow=false" :round="10">
			<view>
				<u-button @click="deleteProduct">删除</u-button>
			</view>
		</u-popup> -->

		<view>
			<u-action-sheet :actions="popList" @select="selectClick" :show="popShow" cancelText="取消"
				@close="this.popShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
				:safeAreaInsetBottom="true"></u-action-sheet>
		</view>

		<uni-fab horizontal="right" :popMenu="false" @fabClick="buttonClick" :pattern="{buttonColor: '#000000'}" />

		<!-- 		<view class="collect-tabbar">
			<u-button @click="buttonClick">发布新作品</u-button>
		</view> -->
		
		<u-overlay :show="overlayShow"></u-overlay>

	</view>
</template>

<script>
	import {
		getProductPage,
		deleteProduct
	} from '@/api/product.js'
	import {
		changeProductStatus
	} from '@/common/method.js'
	export default {
		data() {
			return {
				overlayShow:false,
				productStatus: '',
				selectedProductId: '',
				popShow: false,
				popList: [{
					name: '删除'
				}],
				page: 1,
				pageSize: 10,
				product: {
					list: []
				},
				tabsList: [{
					name: '全部'
				}],
				tabbarGroup: [{
					text: '发布新产品',
					backgroundColor: '#000000',
					color: '#fff'
				}],
			}
		},
		methods: {
			loaded() {
			},
			selectClick(item) {
				console.log(item.name)
				if ("删除" == item.name) {
					this.delete();
				}
			},
			delete() {
				deleteProduct({
					userId: getApp().globalData.USER_ID,
					productId: this.selectedProductId
				}).then((res) => {
					let [error, success] = res;
					if (success.data) {
						uni.showToast({
							title: '删除成功'
						})
					} else {
						uni.showToast({
							title: '删除失败'
						})
					}
				})
			},
			wapperClick(item) {
				this.selectedProductId = item.id;
				this.popShow = true;
				// uni.navigateTo({
				// 	url: '../product/product?id=' + item.id
				// })
			},
			imageClick(item) {
				uni.navigateTo({
					url: '../product/product?id=' + item.id
				})
			},
			buttonClick(item) {
				uni.navigateTo({
					url: '../publish/publish'
				})
			}
		},
		onLoad: function(param) {
			this.page = 1;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			})
		},
		onReachBottom() {
			this.page = this.page + 1;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: _this.page,
				pageSize: _this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				_this.product.list = _this.product.list.concat(success.data);
			})
		},
		onPullDownRefresh() {
			this.page = 1;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				_this.product.list = success.data;
				_this.$refs.waterfallsFlowRef.refresh();
			})
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500)
		},
	}
</script>

<style lang="scss" scoped>
	.item {
		padding: 10rpx 10rpx 20rpx;

		.title {
			font-weight: bold;
			line-height: 48rpx;
			font-size: 30rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
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
