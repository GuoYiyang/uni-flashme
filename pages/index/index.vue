<template>
	<view>
		<image src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/69c44bef87cfecfa8b59140d1a5368b.jpg"
			style="margin-bottom: -25px; height: 280px; width: 100%;"></image>
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

		<u-picker confirmColor="#3D6EC2" :show="cityPickerShow" :columns="cityPickerList" @confirm="confirmCityPicker" keyName="text"
			@cancel="cityPickerShow = false"></u-picker>

		<view style="padding: 28px 10px 10px 10px">
			<u-scroll-list :indicator="false">
				<view v-for="(item, index) in tagList" :key="index" style="padding: 0 8px 0 0;">
					<image :src="item.image" mode="aspectFill" style="width: 90px;height: 110px;border-radius: 10px;"
						@click="clickFastEnter(index)">
					</image>
				</view>
			</u-scroll-list>
		</view>

		<view style="padding: 0px 0px 0px 20px">
			<text style="font-size: 16px;color: #191919;font-weight: 600;">精选作品</text>
		</view>
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
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/5d98d52b4d04febe9a110003be5d56d.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/29480bf599738a5f778127ce53d46ac.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/5868bad3e95549438bc4abd4bb7ee9e.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/7b755d2a1cda553cdda2faf4f4578e1.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/9a19f4373d495f7fa50697fefbb1152.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/c67df47ba65a30aa5027166b5ae9585.png"
					},
					{
						image: "https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/24fa061b3cb4cd0f45edb9bde7fc26f.png"
					}
				],
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
