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
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<u-row>
						<view class="title">{{item.title}}</view>
					</u-row>
					<u-row>
						<u-col span="10" justify="flex-start">
							<view class="desc">￥{{item.price}}</view>
						</u-col>
						<u-col span="2" justify="flex-end">
							<uni-icons type="more-filled" size="20" color="#1f1f1f"></uni-icons>
						</u-col>
					</u-row>
				</view>
			</custom-waterfalls-flow>
		</view>

		<view>
			<u-action-sheet :actions="popList" @select="selectClick" :show="popShow" cancelText="取消"
				@close="this.popShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
				:safeAreaInsetBottom="true"></u-action-sheet>
		</view>

	</view>
</template>

<script>
	import {
		getProductPage,
		updateProductStatus
	} from '@/api/product.js'
	export default {
		data() {
			return {
				remark: '',
				selectedProductId: '',
				popShow: false,
				popList: [{
						name: '通过'
					},
					{
						name: '驳回'
					},
				],
				page: 1,
				pageSize: 10,
				product: {
					list: []
				},
				tabsList: [{
						name: '待审核'
					},
					{
						name: '已驳回'
					}
				],
				tabsCurrent: 0,
				status: 'REJECT'

			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.status = 'REVIEW'
				}
				if (index.index == 1) {
					this.status = 'REJECT'
				}
				this.page = 1;
				let _this = this;
				getProductPage({
					userId: getApp().globalData.USER_ID,
					page: this.page,
					pageSize: this.pageSize,
					status: this.status
				}).then((res) => {
					let [error, success] = res;
					_this.product.list = success.data;
					_this.$refs.waterfallsFlowRef.refresh();
				})
			},
			selectClick(item) {
				if ("通过" == item.name) {
					this.status = 'SUCCESS'
				}
				if ("驳回" == item.name) {
					this.status = 'REJECT'
				}

				updateProductStatus({
					productId: this.selectedProductId,
					status: this.status,
					remark: this.remark
				}).then(res => {
					let [error, success] = res;
					if (success.data) {
						uni.showToast({
							title: '操作成功'
						})
					} else {
						uni.showToast({
							title: '操作失败'
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
		onLoad: function(param) { //option为object类型，会序列化上个页面传递的参数
			this.page = 1;
			let _this = this;
			getProductPage({
				page: this.page,
				pageSize: this.pageSize,
				status: 'REVIEW'
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			})
		},
		onReachBottom() {
			this.page = this.page + 1;
			let _this = this;
			getProductPage({
				page: _this.page,
				pageSize: _this.pageSize,
				status: 'REVIEW'
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
				page: this.page,
				pageSize: this.pageSize,
				status: 'REVIEW'
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
		bottom: 40rpx;
	}
</style>
