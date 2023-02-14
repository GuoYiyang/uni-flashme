<template>
	<view>
		<!-- 轮播图 -->
		<view style="padding: 0 10rpx;">
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular height="500"></u-swiper>
		</view>
		
		<view class="title">{{title}}</view>

		<u-subsection :list="subsectionList" :current="subsectionCurrent" @change="subsectionChange"></u-subsection>
		
		<view class="desc">
			<view class="font">服务说明:{{title}}</view>
			<view>拍摄人数:{{title}}</view>
			<view>拍摄张数:{{title}}</view>
			<view>拍摄时长:{{title}}</view>
			<view class="font">拍摄须知</view>
			<view class="font">样片展示</view>
		</view>

		
		

		<u-tabbar
			@change="changeTabbar"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
		>
			<u-tabbar-item text="收藏" icon="heart" ></u-tabbar-item>
			<u-tabbar-item text="联系摄影师" icon="photo" ></u-tabbar-item>
			<u-tabbar-item text="线上预约" icon="play-right" ></u-tabbar-item>
		</u-tabbar>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrlList: [],
				title: '轻婚纱写真',
				subsectionList: ['产品方案', '拍摄须知', '客片展示'],
				subsectionCurrent: 0
			}
		},
		methods: {
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

<style  lang="scss" scoped>
	.title{
		padding: 10px;
		font-size: 25px;
		font-weight: bold;
	}
	.desc{
		background-color: lightgrey;
		padding: 10px;
		
		.font{
			font-size: 20px;
			font-weight: bold;
		}
	}

</style>
