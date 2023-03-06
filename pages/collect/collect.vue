<template>
	<view>
		<view class="center">
			<u-tabs :list="tabsList" lineWidth="60" lineHeight="3" lineColor="#000000" :activeStyle="{
			        color: '#303133',
			        fontWeight: 'bold',
			        transform: 'scale(1.05)'
			    }" :inactiveStyle="{
			        color: '#606266',
			        transform: 'scale(1)'
			    }" itemStyle="padding: 15rpx; padding-bottom: 10rpx; height: 60rpx;" :current="tabsCurrent" :scrollable='false'
				:duration="100" @change="tabsChange">
			</u-tabs>
		</view>
		<view v-if="collectProductShow">
			<view style="padding:10rpx;">
				<custom-waterfalls-flow ref="waterfallsFlowRef" :value="product.list" :column="2" :columnSpace="1"
					:seat="2" @imageClick="imageClick" @wapperClick="wapperClick">
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
		<view v-if="collectPhotographerShow" style="padding-top: 10rpx;">
			<div v-for="item in pher.list" :key="item.id">
				<view style="padding: 10rpx;">
<!-- 					<fui-card @click="clickPherCard(item.id)" :src="item.avatar" :title="item.nickname" tag="优质摄影师">
						<view style="padding: 20rpx;">{{item.desc}}</view>
					</fui-card> -->
					<uni-card :title="item.nickname"  extra="优质摄影师" :thumbnail="item.avatar"
						@click="clickPherCard(item.id)" is-shadow is-full>
						<text>{{item.desc}}</text>
					</uni-card>
				</view>

			</div>

		</view>
	</view>
</template>

<script>
	import {
		getProductCollect
	} from '@/api/product.js'
	import {
		getPherCollect
	} from '@/api/user.js'
	export default {
		data() {
			return {
				tabsList: [{
						name: '我的收藏'
					},
					{
						name: '我的关注'
					}
				],
				tabsCurrent: 0,
				collectProductShow: true,
				collectPhotographerShow: false,
				product: {
					list: []
				},
				pher: {
					list: []
				},
				tabClickCnt: 0,
			}
		},
		methods: {
			clickPherCard(userId) {
				uni.navigateTo({
					url: '../userShow/userShow?userId=' + userId
				})
			},
			tabsChange(index) {
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.collectProductShow = true;
					this.collectPhotographerShow = false;
				}
				if (index.index == 1) {
					this.collectProductShow = false;
					this.collectPhotographerShow = true;
				}
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
		onTabItemTap() {
			this.tabClickCnt++;
			setTimeout(() => {
				if (this.tabClickCnt >= 2) {
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 200,
					});
				}
				this.tabClickCnt = 0
			}, 250)
		},
		onLoad() {
			let _this = this;
			getProductCollect({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			});
			getPherCollect({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.pher.list = success.data;
			});
		},
		onShow() {
			// this.tabsCurrent = 0;
			// this.collectProductShow = true;
			// this.collectPhotographerShow = false;
		},
		onPullDownRefresh() {
			let _this = this;
			getProductCollect({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
				_this.$refs.waterfallsFlowRef.refresh();
			});
			getPherCollect({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.pher.list = success.data;
			});
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 500);
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
			font-size: 28rpx;
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
