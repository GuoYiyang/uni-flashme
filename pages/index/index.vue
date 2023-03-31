<template>
	<view>

		<!-- <nv :config="nvConfig"></nv> -->

		<!-- 		<view style="padding: 40rpx; font-weight: bold;">
			<view style="font-size: 35rpx; padding-left: 20rpx;">HI 爱拍照的你</view>
			<view style="padding-left: 20rpx;">在PhotoCall，探索自我</view>
		</view> -->
		<!-- 		<view style="margin-bottom: -25px; height: 190px; background-color: #437691">
			
		</view> -->

		

		<image src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/index_background.jpg"
			style="margin-bottom: -25px; height: 240px; width: 100%;"></image>
		<view>
			<view>
				<u-button icon="map" iconColor="#191919" @click="cityPickerShow = true"
					customStyle="width: 300px;height: 50px;font-weight: 500;font-size: 16px;line-height: 21px;background: #FFFFFF;border: 1px solid #EEEEEE;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);border-radius: 100px">
					<view
						style="color: #191919;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 16px;line-height: 21px;">
						{{cityName}}</view>

				</u-button>
			</view>
			<view style="padding-top: 18px;">
				<u-button icon="search" iconColor="#FFFFFF" @click="searchClick"
					customStyle="width: 300px;height: 50px;background: #3D6EC2;border: 1px solid #EEEEEE;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);border-radius: 100px">
					<view
						style="color: #FFFFFF;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 16px;line-height: 21px;">
						搜索作品或摄影师</view>
				</u-button>
			</view>
		</view>

		<u-picker :show="cityPickerShow" :columns="cityPickerList" @confirm="confirmCityPicker" keyName="text"
			@cancel="cityPickerShow = false"></u-picker>

		<!-- 搜索 -->
		<!-- 		<u-row gutter="0" customStyle="padding: 20rpx; mar">
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
		</u-row> -->


		<!-- 快捷入口 -->
		<view style="padding: 28px 10px 10px 10px">
			<u-scroll-list :indicator="false">
				<view v-for="(item, index) in tagList" :key="index" style="padding: 0 8px 0 0;">
					<image :src="item.image" mode="aspectFill" style="width: 90px;height: 110px;border-radius: 10px;"
						@click="clickFastEnter(index)">
					</image>
				</view>
			</u-scroll-list>


			<!-- 			<u-grid :border="false" col="4" @click="clickFastEnter">
				<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
					<u-icon :customStyle="{paddingTop:'20rpx'}" :name="listItem.name" :size="22" bold></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid> -->
		</view>

		<!-- 返回顶部 -->
		<!-- 		<template>
			<u-back-top :scroll-top="scrollTop" icon="arrow-up" top="1000"></u-back-top>
		</template> -->

		<view style="padding: 0px 0px 0px 20px">
			<u-row>
				<u-col span="10.5"><text style="font-size: 16px;color: #191919;font-weight: 600;">精选作品</text></u-col>
				<u-col span="1.5"><text style="font-size: 13px;color: #808080;font-weight: 400;">更多</text></u-col>
			</u-row>
		</view>

		<!--  瀑布流  -->
		<view style="padding: 18px 10px 0 10px;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
						{{item.title}}</view>
					<view style="padding: 0px 6px 6px 6px">
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
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				cityPickerShow: false,
				tagList: [{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/%E5%A9%9A%E7%A4%BC.png"
					}
				],
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
				cityPickerList: [
					[{
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
						}
					]
				],
				city: '0',
				cityName: '深圳',
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
				this.cityName = changeCity(this.city);
			},
			confirmCityPicker(item) {
				this.city = item.value[0].value;
				productRandom({
					city: item.value[0].value
				}).then((res) => {
					let [error, success] = res;
					this.product.list = success.data;
					this.$refs.waterfallsFlowRef.refresh();
				})
				this.cityPickerShow = false;
				console.log()
				this.cityName = changeCity(this.city);
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
		async onLoad(param) {
			await this.$onLaunched;
			let _this = this;
			let city = this.city;
			if (param.city != null) {
				this.city = param.city;
				city = param.city;
			}
			this.cityName = changeCity(this.city);
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
		},
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
</style>
