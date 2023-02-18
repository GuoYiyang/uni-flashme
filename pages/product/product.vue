<template>
	<view>
		<!-- 轮播图 -->
		<view style="padding: 0 10rpx;">
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular height="500"></u-swiper>
		</view>

		<view style="padding: 10rpx;">
			<uni-row>
				<uni-col :span="16">
					<view class="title">{{title}}</view>
				</uni-col>
				<uni-col :span="8">
					<view class="title">￥{{price}}</view>
				</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="16">
					<view class="desc">{{tags}}</view>
				</uni-col>
			</uni-row>
		</view>

		<fui-card @click="clickCard" :src="cameramanAvatar" :title="cameramanName" tag="优质摄影师">
			<view class="fui-card__content" style="padding: 20rpx;">{{cameramanDesc}}</view>
		</fui-card>

		<view class="center">
			<u-tabs :list="tabsList" lineWidth="60" lineHeight="3" lineColor="#000000" :activeStyle="{
			        color: '#303133',
			        fontWeight: 'bold',
			        transform: 'scale(1.05)'
			    }" :inactiveStyle="{
			        color: '#606266',
			        transform: 'scale(1)'
			    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange">
			</u-tabs>

		</view>

		<view v-if="productDetailShow" class="desc" style="padding-bottom: 100rpx;">

			<uni-section title="基本信息" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄人数:1</view>
					<view>拍摄张数:15</view>
					<view>拍摄时长:1h</view>
				</uni-group>
			</uni-section>
			<uni-section title="拍摄须知" type="line" titleFontSize="30rpx">
				<uni-group>
					<view>拍摄需要提前化妆。。。</view>
				</uni-group>
			</uni-section>
		</view>
		
		<view v-if="productCustomerShow" class="desc" style="padding-bottom: 100rpx;">
			客片展示
		</view>
	</view>
</template>

<script>
	import {
		productDetail
	} from '@/api/product.js'
	import {
		getUserInfo
	} from '@/api/user.js'
	export default {
		data() {
			return {
				cameramanId: '',
				cameramanAvatar: '',
				cameramanName: '',
				cameramanDesc: '',
				options: [{
					icon: 'heart',
					text: '收藏'
				}],
				imgUrlList: [],
				title: '',
				price: '',
				tags: '',
				tabsList: [{
						name: '拍摄须知'
					},
					{
						name: '客片展示'
					},
				],
				tabsCurrent: 0,
				productDetailShow:true,
				productCustomerShow:false,
			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.productDetailShow = true;
					this.productCustomerShow = false;
				}
				if (index.index == 1) {
					this.productDetailShow = false;
					this.productCustomerShow = true;
				}
			},
		},
		onLoad: function(param) { //param为object类型，会序列化上个页面传递的参数
			productDetail({
				id: param.id
			}).then((res) => {
				let [error, success] = res;
				this.imgUrlList = this.imgUrlList.concat(success.data.image);
				this.title = success.data.title;
				this.price = success.data.price;
				this.tags = success.data.tags;
				this.cameramanId = success.data.userId;

				getUserInfo({
					userId: success.data.userId
				}).then((res) => {
					let [error, success] = res;
					this.cameramanAvatar = success.data.avatar;
					this.cameramanName = success.data.nickname;
					this.cameramanDesc = success.data.desc;
				})
			});
		},
		onShow() {
			this.tabsCurrent = 0;
			this.productDetailShow = true;
			this.productCustomerShow = false;
		}
	}
</script>

<style lang="scss" scoped>
	.center {
		padding: 10rpx;
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		padding: 10px;
		font-size: 25px;
		font-weight: bold;
	}

	.desc {
		padding: 10px;

		.font {
			font-size: 18px;
			font-weight: bolder;
		}
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0rpx;
	}
</style>
