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
			    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" :current="tabsCurrent" :scrollable='false'
				:duration="100" @change="tabsChange">
			</u-tabs>
		</view>
		<view v-if="collectProductShow">
			<view style="padding:10rpx;">
				<custom-waterfalls-flow ref="waterfallsFlowRef" :value="product.list" :column="2" :columnSpace="1.5"
					:seat="2" @imageClick="imageClick" @loaded="loaded" @wapperClick="wapperClick">
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
		<view v-if="collectPhotographerShow" style="padding-top: 10rpx;">
			<div v-for="item in pher.list" :key="item.id">
				<fui-card @click="clickPherCard" :src="item.avatar" :title="item.nickname" tag="优质摄影师">
					<view class="fui-card__content" style="padding: 20rpx;">{{item.desc}}</view>
				</fui-card>
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
		loaded() {
			console.log('加载完成')
		},
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
				}
			}
		},
		methods: {
			clickPherCard(item) {
				console.log(item)
			},
			loaded() {},
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
			let _this = this;
			_this.tabsCurrent = 0;
			_this.collectProductShow = true;
			_this.collectPhotographerShow = false;
		},
		onPullDownRefresh() {
			let _this = this;
			setTimeout(() => {
				_this.$refs.waterfallsFlowRef.refresh();
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
