<template>
	<view>
		<template>
			<u-subsection :list="subsectionList" :current="subsectionCurrent" @change="subsectionChange" mode="button">
			</u-subsection>
		</template>
		<view v-if="collectProductShow">
			<view style="padding: 0 10rpx;">
				<custom-waterfalls-flow ref="waterfallsFlowRef" :value="product.list" :column="column"
					:columnSpace="1.5" :seat="2" @imageClick="imageClick" @loaded="loaded">
					<!-- #ifdef MP-WEIXIN -->
					<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view class="title">{{item.title}}</view>
						<view class="desc">{{item.desc}}</view>
						<view class="title">￥499</view>
					</view>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<template v-slot:default="item">
						<view class="item">
							<view class="title">{{item.title}}</view>
							<view class="desc">{{item.desc}}</view>
							<view class="title">￥499</view>
						</view>
					</template>
					<!-- #endif -->
				</custom-waterfalls-flow>
			</view>
		</view>
		<view v-if="collectPhotographerShow">
			<div v-for="item in cardList">
				<card :cardinfo="item"></card>
			</div>
		</view>
	</view>
</template>

<script>
	import card from '@/components/list-card/list-card.vue'
	export default {
		components: {
			card
		},
		data() {
			return {
				cardList: [{
						"authImg": 'https://himg.bdimg.com/sys/portrait/item/pp.1.16ffce1b.upEz2MMrdhUQQyrG853gNg?_t=1676210548816',
						"authName": "郭伊阳",
						"createTime": "2020-02-01",
						"content": " 内容",
						"goodNum": "100",
						"likeNum": "200",
						"commentNum": "500",
						"leave": 8,
						"tag": "每日随笔"
					},
					{
						"authImg": 'https://himg.bdimg.com/sys/portrait/item/pp.1.16ffce1b.upEz2MMrdhUQQyrG853gNg?_t=1676210548816',
						"authName": "郭伊阳",
						"createTime": "2020-02-01",
						"content": " 内容",
						"goodNum": "100",
						"likeNum": "200",
						"commentNum": "500",
						"leave": 8,
						"tag": "每日随笔"
					}
				],

				subsectionList: ['收藏的产品', '关注的摄影师'],
				// 或者如下，也可以配置keyName参数修改对象键名
				// list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
				subsectionCurrent: 0,
				collectProductShow: true,
				collectPhotographerShow: false,
				product: {
					list: [{
							image: 'https://seopic.699pic.com/photo/50108/2763.jpg_wh1200.jpg',
							title: '我是标题1',
							desc: '描述描述描述描述描述描述描述描述1'
						},
						{
							image: 'https://seopic.699pic.com/photo/50102/0571.jpg_wh1200.jpg',
							title: '我是标题2',
							desc: '描述描述描述描述描述描述描述描述2'
						},
						{
							image: 'https://seopic.699pic.com/photo/50119/0737.jpg_wh1200.jpg',
							title: '我是标题3',
							desc: '描述描述描述描述描述描述描述描述3'
						}
					]
				},
			}
		},
		methods: {
			subsectionChange(index) {
				this.subsectionCurrent = index;
				if (index == 0) {
					this.collectProductShow = true;
					this.collectPhotographerShow = false;
				}
				if (index == 1) {
					this.collectProductShow = false;
					this.collectPhotographerShow = true;
				}
			},
			imageClick(item) {
				console.log('图片点击事件', item);
				uni.navigateTo({
					url: '../product/product?img=' + item.image,
					fail: function(failInfo) {
						console.log(failInfo)
					}
				})
			},

		},
		onShow() {
			this.subsectionCurrent = 0;
			this.collectProductShow = true;
			this.collectPhotographerShow = false;
		}
	}
</script>

<style lang="scss" scoped>
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
