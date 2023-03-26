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


		<view style="padding: 14px 10px 0 10px;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
						{{item.title}}</view>
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

</style>
