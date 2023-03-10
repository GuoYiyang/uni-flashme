<template>
	<view>

		<!-- 轮播图 -->
		<view>
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular imgMode="aspectFit" height="550"
				@click="previewImg"></u-swiper>
		</view>



		<view style="background-color: #FFFFFF; border-radius:0 0 15px 15px; padding-top: 10px;">
			<view style="padding: 10px;">
				<view style="font-size: 25px; font-weight: bold; padding: 5px;">{{title}}</view>
				<u-row>
					<view v-for="(item,index) in tags" :key="index">
						<view style="padding: 5px;">
							<u-tag :text="item" bgColor="#F3F4F5" color="#191919" borderColor="#F3F4F5"></u-tag>
						</view>
					</view>
				</u-row>
			</view>
			<view style="padding: 5px;"></view>
		</view>

		<view style="padding: 10px;"></view>

		<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px;">
			<view style="padding: 5px;"></view>
			<uni-card :title="cameramanName" :subTitle="cameramanCity" extra="优质摄影师" :thumbnail="cameramanAvatar"
				@click="clickCard" is-full :is-shadow="false" :border="false">
				<text>{{cameramanDesc}}</text>
			</uni-card>
			<view style="padding: 5px;"></view>
		</view>


		<view style="padding: 10px;"></view>

		<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px; padding-bottom: 50px;">

			<view style="font-size: 20px; font-weight: bold; padding: 10px;">{{cameramanName}}的其他作品</view>

			<u-swiper :list="other.list" keyName="image" circular imgMode="aspectFill" @click="clickSwiper"
				height="300" previousMargin="100" nextMargin="100" :autoplay="false"></u-swiper>
			<!-- 			<view class="content-item">
			    <u-scroll-list :indicator="false">
			        <view class="pic-wrap">
			            <view v-for="(item, index) in other.list" :key="index" class="pic-item">
			              <u--image :src="item.image" :lazy-load="true" mode="heightFix" height="200"></u--image>
			            </view>
			        </view>
			    </u-scroll-list>
			</view> -->
		</view>

		<u-tabbar :border="false">
			<u-tabbar-item text="200" :icon='icon.collectIcon' @click="collectClick">
			</u-tabbar-item>
			<u-tabbar-item text="留言" icon='/static/message.png' @click="">
			</u-tabbar-item>
			<u-tabbar-item text="方案" icon='/static/price.png' @click="">
			</u-tabbar-item>

			<view style="padding-top: 5px;padding-right: 20px;">
				<u-button color="#000000" text="联系摄影师" @click="contactClick"></u-button>
			</view>

		</u-tabbar>

		<!-- 		<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px;">
			<u-row>
				<u-col span="2">
					<u-icon name='/static/heart.png' :size="22" customStyle="padding-left:10px; padding-right:10px"></u-icon>
					<text class="grid-text">200</text>
				</u-col>
				<u-col span="2">
					<u-icon name='/static/message.png' :size="22" customStyle="padding-left:10px; padding-right:10px"></u-icon>
					<text class="grid-text">留言</text>
				</u-col>
				<u-col span="2">
					<u-icon name='/static/price.png' :size="22" customStyle="padding-left:10px; padding-right:10px">
					</u-icon>
					<text class="grid-text">方案</text>
				</u-col>
				<u-col span="6">
					<u-button>联系摄影师</u-button>
				</u-col>
			</u-row>
		</view> -->


		<!-- <uni-goods-nav :options="tabbarOptions" :button-group="tabbarGroup" @click="optionClick" @buttonClick="buttonClick" :fill="true/> -->
		<!-- 

		<view class="center">
			<u-tabs :list="tabsList" lineWidth="60" lineHeight="3" lineColor="#000000" :activeStyle="{
			        color: '#303133',
			        fontWeight: 'bold',
			        transform: 'scale(1.1)'
			    }" :inactiveStyle="{
			        color: '#606266',
			        transform: 'scale(1)'
			    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
			</u-tabs>
		</view>

		<view v-if="productDetailShow" class="info">

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

		<view v-if="productCustomerShow" class="info">
			<uni-section title="客片展示" type="line" titleFontSize="30rpx">
			</uni-section>
		</view>



		<u-popup :show="popShow" :round="20" @close="this.popShow = false" mode="bottom" :safeAreaInsetBottom="false">

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
		</u-popup>

 -->


	</view>
</template>

<script>
	import {
		productDetail,
		productCollect,
		getProductPage,
		getProductCollectStatus
	} from '@/api/product.js'
	import {
		getUserInfo
	} from '@/api/user.js'
	import {
		changeCity,
		changeTag
	} from '@/common/method.js'
	export default {
		data() {
			return {
				icon: {
					collectIcon: '/static/heart.png'
				},
				other: {
					list: [],
				},
				windowWidth: '',
				swiperHeight: '',
				productId: '',
				cameramanId: '',
				cameramanAvatar: '',
				cameramanName: '',
				cameramanDesc: '',
				cameramanPhone: '',
				cameramanCity: '',
				options: [{
					icon: 'heart',
					text: '收藏'
				}],
				imgUrlList: [],
				title: '',
				price: '',
				tags: [],
				content: '',
				tabsList: [{
						name: '拍摄须知'
					},
					{
						name: '客片展示'
					},
				],
				tabsCurrent: 0,
				productDetailShow: true,
				productCustomerShow: false,
				isCollect: false,
				tabbarOptions: [{
					icon: '/static/message.png',
					text: '收藏'
				}, {
					icon: 'heart',
					text: '留言'
				}, {
					icon: 'heart',
					text: "方案"
				}],
				tabbarGroup: [{
					text: '联系摄影师',
					backgroundColor: '#000000',
					color: '#fff'
				}],
				info: '',
				introduction: '',
				popShow: false,
				image: '',
			}
		},
		methods: {
			clickSwiper(item) {
				let productId = this.other.list[item].id;
				uni.navigateTo({
					url: '../product/product?id=' + productId
				})
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
			previewImg(item) {
				uni.previewImage({
					current: item,
					urls: this.imgUrlList
				});
			},
			clickCard() {
				uni.navigateTo({
					url: '../userShow/userShow?userId=' + this.cameramanId
				})
			},
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
			collectClick() {
				this.isCollect = !this.isCollect;
				if (this.isCollect) {
					this.icon.collectIcon = '/static/heart-fill.png'
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 0
					})
				} else {
					this.icon.collectIcon = '/static/heart.png'
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 1
					})
				}
			},
			contactClick(item) {
				uni.makePhoneCall({
					phoneNumber: "18188606406" //电话号码
				})
			}
		},
		async onLoad(param) {
			await this.$onLaunched;
			this.productId = param.id;
			productDetail({
				id: param.id
			}).then((res) => {
				let [error, success] = res;
				this.imgUrlList = success.data.imgUrlList;
				this.title = success.data.title;
				this.price = success.data.price;
				this.tags = changeTag(success.data.tags);
				this.cameramanId = success.data.userId;
				this.content = success.data.content;
				this.image = success.data.image;

				uni.setNavigationBarTitle({
					title: this.title
				});

				let content = JSON.parse(success.data.userId);

				this.info = content.info;
				this.introduction = content.introduction;

				getUserInfo({
					userId: this.cameramanId
				}).then((res) => {
					let [error, success] = res;
					this.cameramanAvatar = success.data.avatar;
					this.cameramanName = success.data.nickname;
					this.cameramanDesc = success.data.desc;
					this.cameramanPhone = success.data.phone;
					this.cameramanCity = changeCity(success.data.city);
				})

				getProductPage({
					userId: this.cameramanId,
					page: 1,
					pageSize: 5
				}).then((res) => {
					let [error, success] = res;
					this.other.list = success.data;
				});
			});
			getProductCollectStatus({
				userId: getApp().globalData.USER_ID,
				productId: this.productId,
			}).then((res) => {
				let [error, success] = res;
				this.isCollect = success.data;
				if (this.isCollect) {
					this.icon.collectIcon = '/static/heart-fill.png'
				} else {
					this.icon.collectIcon = '/static/heart.png'
				}
			})
			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			});
		},
		onShow() {
			this.tabsCurrent = 0;
			this.productDetailShow = true;
			this.productCustomerShow = false;
		},
		onShareAppMessage(res) {
			return {
				title: this.title,
				path: '/pages/product/product?id=' + this.productId
			};
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

	.center {
		padding: 10rpx;
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.desc {
		padding: 10px;

		.font {
			font-size: 18px;
			font-weight: bolder;
		}
	}

	.info {
		padding: 10px;
		padding-bottom: 200rpx;

		.font {
			font-size: 18px;
			font-weight: bolder;
		}
	}


	.content-item {
		margin-bottom: 30rpx;

		.pic-wrap {
			display: flex;

			.pic-item {
				padding: 10px;
				// box-sizing: border-box;

				// width: 150px;
				// height: 300rpx;
				// margin: 20rpx 20rpx;
				// position: relative;
				border-radius: 10px 10px 10px 10px;
				// overflow: hidden;
			}

		}
	}


	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
