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
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1.5" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<!-- #ifdef MP-WEIXIN -->
				<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<u-row>
						<view class="title">￥{{item.title}}</view>
					</u-row>
					<u-row>
						<u-col span="10" justify="flex-start">
							<view class="title">￥{{item.price}}</view>
						</u-col>
						<u-col span="2" justify="flex-end">
							<uni-icons type="more-filled" size="20" color="#1f1f1f"></uni-icons>
						</u-col>
					</u-row>

				</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<template v-slot:default="item">
					<view class="item">

						<u-row>
							<view class="title">{{item.title}}</view>
						</u-row>
						<u-row>
							<u-col span="10" justify="flex-start">
								<view class="title">￥{{item.price}}</view>
							</u-col>
							<u-col span="2" justify="flex-end">
								<uni-icons type="more-filled" size="20" color="#1f1f1f"></uni-icons>
							</u-col>
						</u-row>


					</view>
				</template>
				<!-- #endif -->
			</custom-waterfalls-flow>
		</view>

		<!-- 		<u-popup :show="popShow" @close="this.popShow=false" :round="10">
			<view>
				<u-button @click="deleteProduct">删除</u-button>
			</view>
		</u-popup> -->

		<view>
			<u-action-sheet :actions="popList" @select="selectClick" :show="popShow" cancelText="取消" @close="this.popShow=false"
			:closeOnClickOverlay="true" :closeOnClickAction="true" :safeAreaInsetBottom="true"></u-action-sheet>
		</view>

		<view class="collect-tabbar">
			<uni-goods-nav :options="[]" :button-group="tabbarGroup" @buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script>
	import {
		getProductPage,
		deleteProduct
	} from '@/api/product.js'
	export default {
		data() {
			return {
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
					},
					{
						name: '情侣'
					},
					{
						name: '写真'
					},
				],
				tabbarGroup: [{
					text: '发布新产品',
					backgroundColor: '#000000',
					color: '#fff'
				}],
			}
		},
		methods: {
			// shouMoreAction(item) {
			// 	console.log(item)
			// },
			selectClick(item){
				console.log(item)
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
				console.log(item);
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
		onLoad: function(param) { //option为object类型，会序列化上个页面传递的参数
			let _this = this;
			getProductPage({
				city: '',
				tag: '',
				query: '',
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
				console.log(_this.product.list)
			})
		},
		onShow() {
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				this.product.list = success.data;
				this.$refs.waterfallsFlowRef.refresh();
			})
		},
		onReachBottom() {
			this.page = this.page + 1;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				this.product.list = this.product.list.concat(success.data);
			})
		},
		onPullDownRefresh() {
			this.page = 1;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				this.product.list = success.data;
				this.$refs.waterfallsFlowRef.refresh();
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
		bottom: 30rpx;
	}
</style>
