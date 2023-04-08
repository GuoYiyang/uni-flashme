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
		
		<view style="margin: 0 10px 0 10px;">
			<u-tabs :list="setList" lineWidth="40" lineHeight="0" lineColor="#191919"
				:activeStyle="{color: '#191919',fontWeight: 'bold', transform: 'scale(1)'}"
				:inactiveStyle="{color: '#808080',transform: 'scale(1)'}" :current="setCurrent"
				:duration="100" @change="setChange">
			</u-tabs>
		</view>

		<view style="padding: 14px 10px 0 10px;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
						{{item.title}}
					</view>
					<view style="flex-flow: row; float: right;padding: 0 5px 5px;">
						<uni-icons type="more-filled" size="20" color="#1f1f1f"></uni-icons>
					</view>
				</view>
			</custom-waterfalls-flow>
		</view>


		<view>
			<u-action-sheet :actions="popList" @select="selectClick" :show="popShow" cancelText="取消"
				@close="this.popShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
				:safeAreaInsetBottom="true"></u-action-sheet>
		</view>
		
<!-- 		<uni-fab horizontal="right"  @fabClick="fabClick" :pattern="fabStyle" :popMenu="false">
			作品集
		</uni-fab> -->


		<u-overlay :show="overlayShow"></u-overlay>

		<view style="padding: 10px;">
			<u-loadmore :status="loadMoreStatus" />
		</view>

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
	import {
		createSet,
		deleteSet,
		getSetList
	} from '@/api/set.js'
	export default {
		data() {
			return {
				overlayShow: false,
				productStatus: '',
				selectedProductId: '',
				popShow: false,
				showSet:false,
				popList: [{
					name: '编辑'
				}, {
					name: '删除'
				}],
				page: 1,
				pageSize: 10,
				product: {
					list: []
				},
				tabsList: [{
					name: '已发布'
				}, {
					name: '审核中'
				}, {
					name: '已驳回'
				}],
				tabsCurrent: 0,
				publishStatus: 'SUCCESS',
				loadMoreStatus: 'loading',
				fabStyle: {
					buttonColor: '#191919',
					icon: 'more-filled'
				},
				setCurrent:0,
				setId:'',
				setList:[{
					id:"",
					name:"全部"
				}]
			}
		},
		methods: {
			setChange(index){
				this.setCurrent = index.index
				this.setId = index.id
				let _this = this;
				getProductPage({
					userId: getApp().globalData.USER_ID,
					status: this.publishStatus,
					setId: index.id,
					page: 1,
					pageSize: this.pageSize,
				}).then((res) => {
					let [error, success] = res;
					if (success.data.length == 0) {}
					_this.product.list = success.data;
					_this.$refs.waterfallsFlowRef.refresh();
				})
			},
			tabsChange(index) {
				let _this = this;
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.publishStatus = 'SUCCESS'
					if (this.popList.length == 1) {
						this.popList.splice(0, 0, {
							name: '编辑'
						})
					}
				}
				if (index.index == 1) {
					this.publishStatus = 'REVIEW'
					if (this.popList.length == 1) {
						this.popList.splice(0, 0, {
							name: '编辑'
						})
					}
				}
				if (index.index == 2) {
					this.publishStatus = 'REJECT'
					this.popList.shift();
				}
				getProductPage({
					userId: getApp().globalData.USER_ID,
					status: this.publishStatus,
					setId: this.setId,
					page: 1,
					pageSize: this.pageSize,
				}).then((res) => {
					let [error, success] = res;
					if (success.data.length == 0) {}
					_this.product.list = success.data;
					if (_this.product.list.length == 0) {
						uni.hideNavigationBarLoading()
					}
					_this.$refs.waterfallsFlowRef.refresh();
				})
			},
			selectClick(item) {
				if ("删除" == item.name) {
					this.delete();
				}
				if ("编辑" == item.name) {
					uni.navigateTo({
						url: '/pages/product/editProduct?id=' + this.selectedProductId
					})
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
				this.product.list.map((item, i) => {
					if (item.id == this.selectedProductId) {
						this.product.list.splice(i, 1)
					}
				})
				this.$refs.waterfallsFlowRef.refresh();
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
		onReady() {
			uni.hideNavigationBarLoading()
		},
		onLoad: function(param) {
			uni.showNavigationBarLoading()
			getSetList().then(res=>{
				let [error, success] = res;
				this.setList = this.setList.concat(success.data)
			})
			this.page = 1;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				status: this.publishStatus,
				page: 1,
				pageSize: this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
				if (success.data.length <= 10) {
					this.loadMoreStatus = 'nomore';
				}
			})
			
		},
		onReachBottom() {
			this.loadMoreStatus = 'loading';
			this.page = this.page + 1;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				status: this.publishStatus,
				page: _this.page,
				pageSize: _this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length <= 10) {
					_this.loadMoreStatus = 'nomore';
				}
				_this.product.list = _this.product.list.concat(success.data);
			})
		},
		onPullDownRefresh() {
			this.page = 1;
			this.setCurrent =0;
			let _this = this;
			getProductPage({
				userId: getApp().globalData.USER_ID,
				status: this.publishStatus,
				page: this.page,
				pageSize: this.pageSize,
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length <= 10) {
					this.loadMoreStatus = 'nomore';
				}
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
