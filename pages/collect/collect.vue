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
					<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view class="title">{{item.title}}</view>
					</view>
				</custom-waterfalls-flow>
			</view>
		</view>
		<view v-if="collectPhotographerShow" style="padding-top: 10rpx;">

			<div v-for="item in pher.list" :key="item.id">
				<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px;">
					<view style="padding: 5px;"></view>
					<uni-card :title="item.nickname" :subTitle="item.city" extra="优质摄影师" :thumbnail="item.avatar"
						@click="clickPherCard(item.id)" is-full :is-shadow="false" :border="false">
						<text>{{item.desc}}</text>
					</uni-card>
					<view style="padding: 5px;"></view>
				</view>
				<view style="padding: 10rpx;"></view>
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
	import {
		changeCity
	} from '@/common/method.js'
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
				_this.pher.list.forEach(item => {
					item.city = changeCity(item.city)
				})
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
				_this.pher.list.forEach(item => {
					item.city = changeCity(item.city)
				})
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
			font-weight: bold;
			line-height: 48rpx;
			font-size: 28rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
		}
	}
</style>
