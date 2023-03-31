<template>
	<view>

		<!-- 轮播图 -->
		<view>
			<u-swiper :list="imgUrlList" indicator indicatorMode="line" circular imgMode="aspectFit" height="550"
				@click="previewImg" bgColor="#ffffff"></u-swiper>
		</view>



		<view style="background-color: #FFFFFF; border-radius:0px 0px 15px 15px;">
			<view style="padding: 10px;">
				<view style="font-size: 25px; font-weight: bold; padding: 5px;">{{title}}</view>
				<u-row>
					<view v-for="(item,index) in tags" :key="index">
						<view style="padding: 4px;">
							<u-tag :text="item" bgColor="#F3F4F5" color="#191919" borderColor="#F3F4F5"></u-tag>
						</view>
					</view>
				</u-row>
			</view>
			<view style="padding: 5px;"></view>
		</view>

		<view style="padding: 5px;"></view>

		<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px;">
			<view @click="clickCard" style="background: #FFFFFF;border-radius: 8px;padding: 20px 18px 20px 18px;">
				<u-row>
					<u-col span="2.5">
						<u-avatar :src="cameramanAvatar" size='60'></u-avatar>
					</u-col>
					<u-col span="8.5">
						<u-row>
							<text style="font-weight: 600;font-size: 16px;color: #191919;">{{cameramanName}}</text>
						</u-row>
						<view style="margin: 8px;"></view>
						<u-row>
							<text
								style="font-weight: 300;font-size: 12px;color: #808080;">{{cameramanDesc.whatsup}}</text>
						</u-row>
					</u-col>
					<u-col span="1">
						<u-icon name="arrow-right"></u-icon>
					</u-col>
				</u-row>
			</view>
		</view>


		<view style="padding: 5px;"></view>

		<view style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px; padding-bottom: 40px;">

			<u-row>
				<u-col span="10">
					<view style="font-weight:bold; font-size: 16px; padding: 14px;">
						{{cameramanName}}的其他作品
					</view>
				</u-col>
				<u-col span="2">
					<view style="font-size: 12px; color: #808080;" @click="clickCard">
						查看更多
					</view>
				</u-col>
			</u-row>



			<!-- 			<u-swiper :list="other.list" keyName="image" circular imgMode="aspectFill" @click="clickSwiper" height="300"
				previousMargin="100" nextMargin="100" :autoplay="false" bgColor="#ffffff"></u-swiper> -->
			<u-scroll-list indicatorActiveColor="#000000">
				<view v-for="(item, index) in other.list" :key="index" style="padding: 6px;">
					<image :src="item.image" mode="aspectFill" style="height: 240px; width: 180px;border-radius: 10px;"
						@click="clickSwiper(item)"></image>
				</view>
			</u-scroll-list>
		</view>

		<view @touchmove.stop.prevent="">
			<u-popup :show="popPlanShow" :round="10" @close="this.popPlanShow = false" mode="bottom" closeable>
				<view style="padding: 30px 0 0 0;"></view>
				<scroll-view :scroll-y="true" style="height: 600px;">
					<view style="font-weight: bold; font-size: 16px; padding: 20px;">拍摄方案</view>

					<u-scroll-list :indicator="false">
						<view v-for="(item, index) in planCardList" :key="index" style="padding: 10px;">
							<view
								style="width: 220px; height: 330px; padding: 20px;border: 1px solid #D3D3D3;border-radius: 12px;">
								<view style="font-weight: bold;font-size: 14px; text-align: center;">{{item.name}}
								</view>
								<view style="font-weight: bold;font-size: 22px; text-align: center;">{{item.price}}
								</view>
								<u-line></u-line>
								<view style="font-size: 14px; padding: 10px;">
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">拍摄人数</u-col>
										<u-col span="8">拍摄人数</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">服装套数</u-col>
										<u-col span="8">服装套数</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">精修张数</u-col>
										<u-col span="8">精修张数</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">底片张数</u-col>
										<u-col span="8">底片张数</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">设备型号</u-col>
										<u-col span="8">设备型号</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">服装造型</u-col>
										<u-col span="8">服装造型</u-col>
									</u-row>
									<u-row customStyle="padding-bottom:18px">
										<u-col span="4">其他说明</u-col>
										<u-col span="8">其他说明</u-col>
									</u-row>
								</view>
							</view>
						</view>
					</u-scroll-list>

					<view style="font-weight: bold;font-size: 16px; padding: 20px;">拍摄须知</view>
					<view style="background: #F6F7F9;border-radius: 6px;padding: 16px">
						<u-row>
							1.提供部分尺码的服装可供选择
						</u-row>
						<u-row>
							2.周未及节假日取片时间会有延迟，具体取片时间可联系摄影师沟通
						</u-row>
						<u-row>
							3.可以在拍摄或看片时提出您对照片的要求，若修图最终效果不满意，可以除定金外推款处理
						</u-row>
						<u-row>
							4.如有其他疑问可通过我的主页【联系摄影师】咨询我，或者在【留言&咨询】处进行留言
						</u-row>
					</view>

				</scroll-view>
			</u-popup>
		</view>
		
		
		<view>
			<u-action-sheet :actions="popList" @select="selectClick" :show="popShow" cancelText="取消"
				@close="this.popShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
				:safeAreaInsetBottom="true"></u-action-sheet>
		</view>


		<u-tabbar :border="false"
			customStyle="box-shadow: 0px -6px 20px rgba(0, 0, 0, 0.06); border-radius: 8px 8px 0px 0px;">
			<u-col span="2">
				<view style="padding: 15px;">
					<u-icon :name="icon.collectIcon" @click="collectClick" :size="20" :label="collectCnt"
						labelPos="bottom"></u-icon>
				</view>
			</u-col>
			<u-col span="5">
				<view style="padding: 10px;">
					<u-button @click="this.popPlanShow=true">拍摄方案</u-button>
				</view>
			</u-col>
			<u-col span="5">
				<view style="padding: 10px;">
					<u-button color="#3D6EC2" @click="this.popShow=true">咨询预约</u-button>
				</view>
			</u-col>

			<!-- 			<u-tabbar-item text="200" :icon='icon.collectIcon' @click="collectClick">
			</u-tabbar-item>
			<u-tabbar-item text="联系TA" icon='/static/phone.png' @click="this.popShow=true">
			</u-tabbar-item>
			<u-tabbar-item text="方案" icon='/static/price.png' @click="this.popPlanShow=true">
			</u-tabbar-item> -->

			<!-- 			<view style="padding-top: 5px;padding-right: 20px;">
				<u-button color="#000000" text="联系摄影师" @click="contactClick"></u-button>
			</view> -->

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





	</view>
</template>

<script>
	import {
		productDetail,
		productCollect,
		getProductPage,
		getProductCollectStatus,
		getProductCollectCnt
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
				cameramanDesc: {},
				cameramanPhone: '',
				cameramanCity: '',
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
				info: '',
				introduction: '',
				popShow: false,
				popPlanShow: false,
				image: '',
				popList: [{
					name: '电话'
				}, {
					name: '微信'
				}],
				collectCnt: 0,
				planCardList: [{
						name: '12123',
						price: 111
					},
					{
						name: '657567',
						price: 111
					},
					{
						name: '907567',
						price: 111
					},
					{
						name: '907567',
						price: 111
					},
					{
						name: '907567',
						price: 111
					}
				],
			}
		},
		methods: {
			selectClick(item) {
				if ("电话" == item.name) {
					uni.makePhoneCall({
						phoneNumber: "18188606406" //电话号码
					})
				}
				if ("微信" == item.name) {
					uni.setClipboardData({
						data: 'Slimshadys_'
					})
				}
			},
			clickSwiper(item) {
				let productId = item.id;
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
					this.collectCnt++;
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 0
					})
				} else {
					this.icon.collectIcon = '/static/heart.png'
					this.collectCnt--;
					productCollect({
						userId: getApp().globalData.USER_ID,
						productId: this.productId,
						isDelete: 1
					})
				}
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
					this.cameramanDesc = JSON.parse(success.data.desc);
					this.cameramanPhone = success.data.phone;
					this.cameramanCity = changeCity(success.data.city);
				})

				getProductPage({
					userId: this.cameramanId,
					page: 1,
					pageSize: 5,
					status: 'SUCCESS',
					excludeProductId: param.id
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
			getProductCollectCnt({
				productId: this.productId,
			}).then((res) => {
				let [error, success] = res;
				this.collectCnt = success.data;
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
