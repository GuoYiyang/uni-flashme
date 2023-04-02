<template>
	<view>
		<view>
			<div v-for="item in pherList">
				<view @click="clickPherCard(item.userVo.id)"
					style="background: #FFFFFF;border-radius: 8px; padding: 20px 18px 10px 18px;">
					<u-row>
						<u-col span="3">
							<u-avatar :src="item.userVo.avatar" size='60'></u-avatar>
						</u-col>
						<u-col span="8">
							<u-row>
								<text
									style="font-weight: 600;font-size: 16px;color: #191919;">{{item.userVo.nickname}}</text>
							</u-row>
							<view style="margin: 8px;"></view>
							<u-row>
								<text
									style="font-weight: 300;font-size: 12px;color: #808080;">{{item.userVo.desc.whatsup}}</text>
							</u-row>
						</u-col>
						<u-col span="1">
							<u-icon name="arrow-right"></u-icon>
						</u-col>
					</u-row>
				</view>
				<view style="background-color: #FFFFFF;">
					<u-scroll-list :indicator="false">
						<view style="margin-left: 10px;"></view>
						<view v-for="(product, index) in item.productVOS" :key="product.id" style="padding: 4px;">
							<image :src="product.image" mode="aspectFill" style="height: 200px; width: 150px;border-radius: 8px;"
								@click="clickSwiper(product)"></image>
						</view>
					</u-scroll-list>
				</view>

			</div>
		</view>
		
		
		<view style="padding: 10px;"><u-loadmore :status="loadMoreStatus"/></view>
	</view>
</template>

<script>
	import {
		getPherExploreList
	} from '@/api/user.js'
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				loadMoreStatus: 'loading',
				pherList: []
			}
		},
		methods: {
			clickPherCard(userId) {
				uni.navigateTo({
					url: '../userShow/userShow?userId=' + userId
				})
			},
			clickSwiper(item) {
				console.log(item)
				let productId = item.id;
				uni.navigateTo({
					url: '../product/product?id=' + productId
				})
			},
		},
		async onLoad() {
			await this.$onLaunched;
			getPherExploreList({
				city: getApp().globalData.CITY,
				isRandom: true
			}).then(res => {
				let [error, success] = res;
				this.pherList = success.data
				this.pherList.forEach(item => {
					item.userVo.desc = JSON.parse(item.userVo.desc);
					item.userVo.city = changeCity(item.userVo.city)
				})
			})
		},
		onPullDownRefresh() {
			getPherExploreList({
				city: getApp().globalData.CITY,
				isRandom: true
			}).then(res => {
				let [error, success] = res;
				this.pherList = success.data
				this.pherList.forEach(item => {
					item.userVo.desc = JSON.parse(item.userVo.desc);
					item.userVo.city = changeCity(item.userVo.city)
				})
			})
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500);
		},
		onReachBottom() {
			getPherExploreList({
				city: getApp().globalData.CITY,
				isRandom: true
			}).then(res => {
				let [error, success] = res;
				success.data.forEach(item => {
					item.userVo.desc = JSON.parse(item.userVo.desc);
					item.userVo.city = changeCity(item.userVo.city)
				})
				this.pherList = this.pherList.concat(success.data);
			})
		}
	}
</script>

<style>

</style>
