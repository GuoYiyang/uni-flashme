<template>
	<view>

		<!-- <nv :config="nvConfig"></nv> -->

		<view style="padding: 40rpx; font-weight: bold;">
			<view style="font-size: 35rpx; padding-left: 20rpx;">HI 爱拍照的你</view>
			<view style="padding-left: 20rpx;">在PhotoCall，探索自我</view>
		</view>

		<!-- 搜索 -->
		<u-row gutter="0" customStyle="padding: 20rpx; mar">
			<u-col span="3">
				<uni-data-picker popup-title="请选择城市" :localdata="cityList" v-model="city" :clear-icon="false"
					@change="cityChange">
				</uni-data-picker>
			</u-col>
			<u-col span="9">
				<u-search disabled @click="searchClick" :showAction="false" :animation="true" shape="square"
					placeholder="摄影师或者主题" bgColor="#FFFFFF">
				</u-search>
			</u-col>
		</u-row>


		<!-- 快捷入口 -->
		<view style="padding-top: 20rpx; padding-bottom: 20px;">
			<u-grid :border="false" col="4" @click="clickFastEnter">
				<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
					<u-icon :customStyle="{paddingTop:'20rpx'}" :name="listItem.name" :size="22" bold></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<!-- 返回顶部 -->
		<!-- 		<template>
			<u-back-top :scroll-top="scrollTop" icon="arrow-up" top="1000"></u-back-top>
		</template> -->

		<!--  瀑布流  -->
		<view style="padding: 10rpx;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view class="title">{{item.title}}</view>
					<view>
						<u-row>
							<u-col span="1.5" align="center">
								<u-avatar :src="item.userInfo.avatar" size='18'></u-avatar>
							</u-col>
							<u-col span="10.5" align="center">
								<text style="font-size: 12px; color: #4e4e4e;">{{item.userInfo.nickname}}</text>
							</u-col>
						</u-row>
					</view>
				</view>
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
				nvConfig: {
					title: 'PhotoCall',
					bgColor: '#ffffff',
					type: 'search',
					search: {
						value: '摄影主题',
						input: false,
						url: '/pages/search/search'
					},
					back: {
						hide: true
					}
					// transparent:{
					// 	type: 'content',
					// },
					// address:{

					// }
				},
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
				product: {
					list: []
				},
				tabClickCnt: 0,
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
			selectedBanner(item, index) {
				console.log(item, index)
			},
			clickFastEnter(index) {
				uni.navigateTo({
					url: '/pages/filterProduct/filterProduct?tag=' + index + '&city=' + this.city
				});
			},
			changeTab(index) {
				uni.showToast({
					title: index.name,
					icon: 'none'
				})
			},
			searchClick() {
				uni.navigateTo({
					url: '/pages/search/search?city=' + this.city
				});
			},

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
		async onLoad(param) {
			await this.$onLaunched;
			let _this = this;
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
			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			});
			// })
		},
		onPullDownRefresh() {
			productRandom({
				city: this.city
			}).then((res) => {
				let [error, success] = res;
				this.product.list = success.data;
				this.$refs.waterfallsFlowRef.refresh();
			})
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500);
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

	$nav-height: 30px;

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
</style>
