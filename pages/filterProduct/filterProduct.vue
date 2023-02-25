<template>
	<view>
		<u-row justify="center" gutter="10">
<!-- 			<u-col span="4">
				<uni-data-picker popup-title="城市" :localdata="cityList" v-model="city" :clear-icon="false"
					@change="cityChange" placeholder="城市">
				</uni-data-picker>
			</u-col>
			<u-col span="4">
				<uni-data-picker popup-title="主题" :localdata="tagList" v-model="tag" :clear-icon="false"
					@change="cityChange" placeholder="主题">
				</uni-data-picker>
			</u-col> -->
<!-- 			<u-col span="4">
				<uni-data-picker popup-title="价格" :localdata="cityList" v-model="city" :clear-icon="false"
					@change="cityChange" placeholder="价格">
				</uni-data-picker>
			</u-col> -->
		</u-row>
		<u-line></u-line>
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
				},
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

<style lang="scss" scoped>
	.item {
		padding: 10rpx 10rpx 20rpx;

		.title {
			line-height: 48rpx;
			font-size: 30rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
		}

		.grid-text {
			font-size: 14px;
			color: #909399;
			padding: 10rpx 0 20rpx 0rpx;
			/* #ifndef APP-PLUS */
			box-sizing: border-box;
			/* #endif */
		}
	}
</style>
