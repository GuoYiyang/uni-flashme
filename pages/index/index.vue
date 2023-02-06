<template>
	<view>
		<template>
			<u-search :showAction="false" margin="10px" actionText="搜索" :animation="true" shape="square"></u-search>
		</template>
		<u-swiper :list="list1" previousMargin="30" nextMargin="30" circular :autoplay="false" radius="5"
			bgColor="#ffffff"></u-swiper>
		<u-divider text="分割线" :dot="true"></u-divider>
		<view>
			<u-grid :border="true" col="4" @click="click">
				<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>

		<u-divider text="分割线" :dot="true"></u-divider>

		<template>
			<u-tabs :list="tabList" @click="change"></u-tabs>
		</template>

		<view style="padding: 0 10rpx;">
			<!--       <view class="handle">
		            <button class="btn" type="default" @click="add()">增加数据</button>
		            <button class="btn" type="default" @click="changeColumn(1)">+列数({{column}})</button>
		            <button class="btn" type="default" @click="changeColumn(0)">-列数({{column}})</button>
		            <button class="btn" type="default" @click="reset()">刷新数据</button>
		        </view> -->
			<custom-waterfalls-flow ref="waterfallsFlowRef" :value="data.list" :column="column" :columnSpace="1.5"
				:seat="2" @wapperClick="wapperClick" @imageClick="imageClick" @loaded="loaded">
				<!-- #ifdef MP-WEIXIN -->
				<!--            <view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
		                <view class="title">{{item.title}}</view>
		                <view class="desc">{{item.desc}}</view>
		            </view> -->
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<template v-slot:default="item">
					<view class="item">
						<view class="title">{{item.title}}</view>
						<view class="desc">{{item.desc}}</view>
					</view>
				</template>
				<!-- #endif -->
			</custom-waterfalls-flow>
		</view>

	</view>
</template>
<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		components: {
			carousel
		},
		data() {
			return {
				tabList: [{
					name: '证件',
				}, {
					name: '写真',
				}, {
					name: '结婚'
				}, {
					name: '亲子'
				}, {
					name: '情侣'
				}, {
					name: '好友'
				}, {
					name: '宠物'
				}],
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list: [{
						name: 'photo',
						title: '我要拍照'
					},
					{
						name: 'lock',
						title: '我要入驻'
					},
					{
						name: 'star',
						title: '新人专享'
					},
					{
						name: 'hourglass',
						title: '收藏'
					}
				],
				data: {
					list: [{
							image: 'https://via.placeholder.com/200x500.png/ff0000',
							title: '我是标题1',
							desc: '描述描述描述描述描述描述描述描述1'
						},
						{
							image: 'https://via.placeholder.com/200x200.png/2878ff',
							title: '我是标题2',
							desc: '描述描述描述描述描述描述描述描述2'
						},
						{
							image: 'https://via.placeholder.com/200x100.png/FFB6C1',
							title: '我是标题3',
							desc: '描述描述描述描述描述描述描述描述3'
						},
						{
							image: 'https://via.placeholder.com/200x300.png/9400D3',
							title: '我是标题4',
							desc: '描述描述描述描述描述描述描述描述4'
						},
						{
							image: 'https://via.placeholder.com/100x240.png/B0E0E6',
							title: '我是标题5',
							desc: '描述描述描述描述描述描述描述描述5'
						},
						{
							image: 'https://via.placeholder.com/140x280.png/7FFFAA',
							title: '我是标题6',
							desc: '描述描述描述描述描述描述描述描述6'
						},
						{
							image: 'https://via.placeholder.com/40x60.png/EEE8AA',
							title: '我是标题7',
							desc: '描述描述描述描述描述描述描述描述7'
						}
					]
				},
				column: 2,
				keyword: '',
				imgList: [{
					url: 'https://via.placeholder.com/140x280.png/EEE8AA',
					id: 1
				}, {
					url: 'https://via.placeholder.com/140x280.png/EEE8FF',
					id: 2
				}, {
					url: 'https://via.placeholder.com/140x280.png/7FFFAA',
					id: 3
				}]
			}
		},
		methods: {
			add() {
				const newArr = [{
						image: 'https://via.placeholder.com/1000x600.png/FF7F50',
						title: '我是标题100',
						desc: '描述描述描述描述描述描述描述描述8'
					},
					{
						image: 'https://via.placeholder.com/600x1000.png/C0C0C0',
						title: '我是标题101',
						desc: '描述描述描述描述描述描述描述描述9'
					},
					{
						image: 'https://via.placeholder.com/1200x2000.png/FAEBD7',
						title: '我是标题102',
						desc: '描述描述描述描述描述描述描述描述10'
					}
				]
				this.data.list = this.data.list.concat(newArr);
			},
			changeColumn(h) {
				this.column = !h ? this.column - 1 : this.column + 1;
			},
			loaded() {
				console.log('加载完成')
			},
			wapperClick(item) {
				console.log('单项点击事件', item)
			},
			imageClick(item) {
				console.log('图片点击事件', item)
			},
			reset() {
				this.data.list = [{
					image: 'https://via.placeholder.com/200x500.png/ff0000',
					title: '我是标题1',
					desc: '描述描述描述描述描述描述描述描述1'
				}]
				this.$refs.waterfallsFlowRef.refresh();
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			selectedBanner(item, index) {
				console.log(item, index)
			},
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			change(index) {
				console.log(index)
				uni.showToast({
					title: index.name,
					icon: 'none'
				})
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.$refs.waterfallsFlowRef.refresh();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			console.log('bottom');
			this.add();
		}

	}
</script>
<style>
	page {
		background-color: #f2f5f9;
	}
</style>
<style lang="scss" scoped>
	.handle {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		padding: 10rpx;

		.btn {
			margin: 20rpx 10rpx;
			padding: 0 20rpx;
			background: #2878FF;
			font-size: 28rpx;
			color: #fff;

			&::after {
				border: 0;
			}
		}
	}

	.item {
		padding: 10rpx 10rpx 20rpx;

		.title {
			line-height: 48rpx;
			font-size: 28rpx;
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
