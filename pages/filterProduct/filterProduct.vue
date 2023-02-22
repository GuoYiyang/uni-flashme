<template>
	<view>
		<view style="padding: 10rpx;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1.5" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
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
</template>

<script>
	import {
		getProductPage
	} from '@/api/product.js'
	export default {
		data() {
			return {
				page: 1,
				pageSize: 10,
				city: '',
				tag: '',
				query: '',
				product: {
					list: []
				}
			}
		},
		methods: {
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
		},
		onLoad: function(param) { //option为object类型，会序列化上个页面传递的参数
			let _this = this;
			this.city = param.city;
			if (param.tag != null) {
				this.tag = param.tag;
			}
			if (param.query != null) {
				this.query = param.query;
			}
			getProductPage({
				city: this.city,
				tag: this.tag,
				query: this.query,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
				console.log(this.product.list)
				// this.$refs.waterfallsFlowRef.refresh();
			})
			
		},
		onReachBottom() {
			this.page = this.page + 1;
			getProductPage({
				city: this.city,
				tag: this.tag,
				query: this.query,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {

				}
				this.product.list = this.product.list.concat(success.data);
				// this.$refs.waterfallsFlowRef.refresh();
			})
		}
	}
</script>

<style>

</style>
