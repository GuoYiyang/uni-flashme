<template>
	<view>
		<!-- 轮播图 -->
		<view style="padding: 0 10rpx;">
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular height="500"></u-swiper>
		</view>

		<view style="padding: 10rpx;">
			<uni-row>
				<uni-col :span="18">
					<view class="title">{{title}}</view>
				</uni-col>
				<uni-col :span="6">
					<view class="title">¥499</view>
				</uni-col>
			</uni-row>
		</view>


		<!-- <u-line></u-line> -->

		<!-- <u-subsection :list="subsectionList" :current="subsectionCurrent" @change="subsectionChange"></u-subsection> -->



		<view class="desc" style="padding-bottom: 200rpx;">

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

		<view class="goods-carts">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="optionsClick"
				@buttonClick="buttonClick" />
		</view>






		<!-- 
		<u-tabbar @change="changeTabbar" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="收藏" icon="heart"></u-tabbar-item>
			<u-tabbar-item text="联系摄影师" icon="photo"></u-tabbar-item>
			<u-tabbar-item text="线上预约" icon="play-right"></u-tabbar-item>
		</u-tabbar> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					icon: 'heart',
					text: '收藏'
				}],
				buttonGroup: [{
						text: '联系摄影师',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '线上预约',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
				imgUrlList: [],
				title: '轻婚纱写真',
				subsectionList: ['产品方案', '拍摄须知', '客片展示'],
				subsectionCurrent: 0
			}
		},
		methods: {
			buttonClick(index, content) {
				console.log(index.content.text);
				// console.log(content);
			},
			optionsClick(index, content) {
				console.log(index.content.text);
				// console.log(content);
			},
			changeTabbar(object) {

			},
			subsectionChange(index) {
				this.subsectionCurrent = index;
			}
		},
		onLoad: function(product) { //option为object类型，会序列化上个页面传递的参数

			this.imgUrlList = this.imgUrlList.concat(product.img);
		},
	}
</script>

<style lang="scss" scoped>
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
