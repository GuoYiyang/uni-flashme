<template>
	<view>
		<u-sticky bgColor="#F8F8F8">
			<view style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05)">
				<u-tabs :list="tabsList" lineWidth="40" lineHeight="3" lineColor="#191919"
					:activeStyle="{color: '#191919',fontWeight: 'bold', transform: 'scale(1)'}"
					:inactiveStyle="{color: '#808080',transform: 'scale(1)'}" :current="tabsCurrent" :scrollable='false'
					:duration="100" @change="tabsChange">
				</u-tabs>
			</view>
		</u-sticky>
		<view v-if="collectProductShow">
			<view style="padding: 14px 10px 0 10px;">
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
		<view v-if="collectPhotographerShow" style="padding-top: 10rpx;">
			<div v-for="item in pher.list" :key="item.id">

				<view @click="clickPherCard(item.id)"
					style="background: #FFFFFF;border-radius: 8px;margin: 7px 12px 7px 12px; padding: 20px 18px 20px 18px;">
					<u-row>
						<u-col span="3">
							<u-avatar :src="item.avatar" size='60'></u-avatar>
						</u-col>
						<u-col span="8">
							<u-row>
								<text style="font-weight: 600;font-size: 16px;color: #191919;">{{item.nickname}}</text>
							</u-row>
							<view style="margin: 8px;"></view>
							<u-row>
								<text style="font-weight: 300;font-size: 12px;color: #808080;">{{item.desc.whatsup}}</text>
							</u-row>
						</u-col>
						<u-col span="1">
							<u-icon name="arrow-right"></u-icon>
						</u-col>
					</u-row>

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
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				tabsList: [{
						name: '作品'
					},
					{
						name: '摄影师'
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
					item.desc = JSON.parse(item.desc);
					item.city = changeCity(item.city);
				})
			});
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 500);
		},
	}
</script>

<style lang="scss" scoped>
</style>
