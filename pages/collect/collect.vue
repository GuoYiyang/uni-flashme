<template>
	<view>
		<view class="center">
			<u-tabs :list="tabsList" lineWidth="60" lineHeight="3" lineColor="#000000" :activeStyle="{
			        color: '#303133',
			        fontWeight: 'bold',
			        transform: 'scale(1.05)'
			    }" :inactiveStyle="{
			        color: '#606266',
			        transform: 'scale(1)'
			    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" :current="tabsCurrent" scrollable=false
				@change="tabsChange">
			</u-tabs>
		</view>
		<view v-if="collectProductShow">
			<view style="padding:10rpx;">
				<custom-waterfalls-flow ref="waterfallsFlowRef" :value="product.list" :column="2" :columnSpace="1.5"
					:seat="2" @imageClick="imageClick" @loaded="loaded">
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
		<view v-if="collectPhotographerShow" style="padding-top: 30rpx;">
			<fui-card @click="clickCard"
				src="https://himg.bdimg.com/sys/portrait/item/pp.1.16ffce1b.upEz2MMrdhUQQyrG853gNg?_t=1676210548816"
				title="Slimshady" tag="优质摄影师">
				<view class="fui-card__content">这是一个基础卡片的示例，此处为自定义内容区域，自行控制内容样式。</view>
			</fui-card>
		</view>
	</view>
</template>

<script>
	import card from '@/components/list-card/list-card.vue'
	export default {
		components: {
			card
		},
		loaded() {
			console.log('加载完成')
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

				tabsList: [{
						name: '收藏的产品'
					},
					{
						name: '关注的摄影师'
					}
				],
				tabsCurrent: 0,
				collectProductShow: true,
				collectPhotographerShow: false,
				product: {
					list: [{
							image: 'https://seopic.699pic.com/photo/50154/9963.jpg_wh1200.jpg',
							title: '我是标题1',
							price: '499.99'
						}
					]
				},
			}
		},
		methods: {
			clickCard(item) {

			},
			loaded() {},
			tabsChange(index) {
				this.tabsCurrent = index.index;
				if (index.index == 0) {
					this.collectProductShow = true;
					this.collectPhotographerShow = false;
				}
				if (index.index == 1) {
					this.collectProductShow = false;
					this.collectPhotographerShow = true;
				}
			},
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
		onShow() {
			this.tabsCurrent = 0;
			this.collectProductShow = true;
			this.collectPhotographerShow = false;
		},
		onPullDownRefresh() {
			uni.redirectTo({
				url: '/pages/collect/collect'
			});
		},
	}
</script>

<style lang="scss" scoped>
	.center {
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
