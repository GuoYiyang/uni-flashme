<template>
	<view>
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
		</view>

		<view style="padding: 14px 10px 0 10px;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
						{{item.title}}</view>
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
					name: '已发布'
				},{
					name: '审核中'
				},{
					name: '已驳回'
				}],
				tabsCurrent:0,
				publishStatus: 'SUCCESS'
			}
		},
		methods: {
			tabsChange(index) {
				let _this = this;
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.publishStatus = 'SUCCESS'
				}
				if (index.index == 1) {
					this.publishStatus = 'REVIEW'
				}
				if (index.index == 2) {
					this.publishStatus = 'REJECT'
				}
				getProductPage({
					userId: getApp().globalData.USER_ID,
					status: this.publishStatus,
					page: 1,
					pageSize: this.pageSize,
				}).then((res) => {
					let [error, success] = res;
					if (success.data.length == 0) {}
					_this.product.list = success.data;
					_this.$refs.waterfallsFlowRef.refresh();
				})
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
				status: this.publishStatus,
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
				status: this.publishStatus,
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
				status: this.publishStatus,
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

</style>
