<template>
	<view v-if = "this.cameramanAvatar != ''">
		<view>
			<u-swiper :list="imgUrlList" indicator imgMode="aspectFit" height="550" :autoplay="false" circular
				@click="previewImg" bgColor="#ffffff" indicatorStyle="right: 20px"
				@change="e => currentNum = e.current">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ imgUrlList.length }}</text>
				</view>
			</u-swiper>
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

		<view v-if="other.list.length > 0"
			style="background-color: #FFFFFF; border-radius:15px 15px 15px 15px; padding-bottom: 40px;">

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
				<view style="margin-left: 10px;"></view>
				<view v-for="(item, index) in other.list" :key="index" style="padding: 4px;">
					<image :src="item.image" mode="aspectFill" style="height: 200px; width: 150px;border-radius: 8px;"
						@click="clickSwiper(item)"></image>
				</view>
			</u-scroll-list>


		</view>

		<view @touchmove.stop.prevent="">
			<u-popup :show="popPlanShow" :round="10" @close="this.popPlanShow = false" mode="bottom" closeable>
				<view style="padding: 30px 0 0 0;"></view>
				<scroll-view :scroll-y="true" style="height: 600px;">
					<view style="padding: 0px 24px 28px 24px;background: #FFFFFF;border-radius: 12px;">

						<view style="font-weight: 600;font-size: 16px;line-height: 16px;color: #191919;flex-flow: row;">
							拍摄方案
						</view>

						<view style="margin: 20px 0 20px 0;">
							<u-scroll-list :indicator="false">
								<view v-if="planList== [] || planList.length == 0"
									style="margin: 5px; height: 360px;width:240px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
									<view
										style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
										<u-icon name="info-circle" size="50px"></u-icon>
										<view
											style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
											暂无拍摄方案</view>
									</view>
								</view>

								<view v-if="planList.length > 0" v-for="(item, index) in planList" :key="index"
									style="margin: 5px;">
									<view
										style="padding: 20px 20px 20px 20px; margin: 5px;width: 240px;height: 360px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">

										<view style="font-size: 14px;color: #191919;">
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">拍摄人数</u-col>
												<u-col span="8">{{item.content.peopleNum}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">拍摄张数</u-col>
												<u-col span="8">{{item.content.photoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">精修张数</u-col>
												<u-col span="8">{{item.content.jingxiuPhotoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">底片赠送</u-col>
												<u-col span="8">{{item.content.zengsongPhotoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">拍摄场景</u-col>
												<u-col span="8">{{item.content.scene}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">场景数量</u-col>
												<u-col span="8">{{item.content.sceneNum}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">设备型号</u-col>
												<u-col span="8">{{item.content.equipment}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">提供化妆</u-col>
												<u-col span="8">{{item.content.isMakeup}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">提供服装</u-col>
												<u-col span="8">{{item.content.isDress}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:10px">
												<u-col span="4">其他说明</u-col>
												<u-col span="8">{{item.content.other}}</u-col>
											</u-row>
										</view>

										<u-line></u-line>

										<view
											style="font-weight: 550;font-size: 24px;line-height: 24px;color: #191919;margin: 15px 0 10px 0;">
											{{item.content.name}}
										</view>

										<view
											style="font-weight: 500;font-size: 20px;line-height: 24px;color: #191919;">
											￥{{item.content.price}}
										</view>

									</view>
								</view>
							</u-scroll-list>
						</view>

						<view style="font-weight: 600;font-size: 16px;line-height: 16px;color: #191919;">
							拍摄须知
						</view>
						<view style="margin: 20px 0 20px 0;">
							<view v-if="notice==null || notice == ''"
								style="height: 200px;background-color: #F8F9FA;">
								<view
									style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
									<u-icon name="info-circle" size="50px"></u-icon>
									<view
										style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
										暂无拍摄须知</view>
								</view>
							</view>
							<view v-if="notice != null" @click="addNotice"
								style="padding: 10px;background-color: #F8F9FA;display: flex">
								<text style="font-size: 14px;color: #4E4E4E;line-height: 150%;">{{notice}}</text>
							</view>
						</view>
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
					<u-button color="#191919" @click="this.popShow=true">咨询预约</u-button>
				</view>
			</u-col>
		</u-tabbar>
	</view>
</template>

<script>
	import {
		productDetail,
		productCollect,
		getProductPage,
		getProductCollectStatus,
		getProductCollectCnt,
		productRandom
	} from '@/api/product.js'
	import {
		getUserInfo,
		getUserPlanList
	} from '@/api/user.js'
	import {
		changeCity,
		changeTag
	} from '@/common/method.js'
	import {
		changePeopleNum,
		changeScene,
		changeSceneNum
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
				tabsCurrent: 0,
				productDetailShow: true,
				productCustomerShow: false,
				isCollect: false,
				info: '',
				introduction: '',
				currentNum: 0,
				popShow: false,
				popPlanShow: false,
				image: '',
				popList: [{
					name: '电话'
				}],
				collectCnt: 0,
				notice: '',
				planList: [],
			}
		},
		methods: {
			selectClick(item) {
				if ("电话" == item.name) {
					uni.makePhoneCall({
						phoneNumber: this.cameramanPhone
					})
				}
				if ("微信" == item.name) {
					uni.setClipboardData({
						data: this.cameramanDesc.wxid
					})
				}
				if ("小红书" == item.name) {
					uni.setClipboardData({
						data: this.cameramanDesc.xiaohongshu
					})
				}
				if ("抖音" == item.name) {
					uni.setClipboardData({
						data: this.cameramanDesc.douyin
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
		onReady() {
			uni.hideNavigationBarLoading()
		},
		async onLoad(param) {
			uni.showNavigationBarLoading()
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
				if (success.data.status != "SUCCESS") {
					uni.hideShareMenu()
				} else {
					uni.showShareMenu({
						withShareTicket: true,
						menus: ["shareAppMessage", "shareTimeline"]
					});
				}
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
					this.notice = success.data.notice;
					if (this.cameramanDesc.wxid != null) {
						this.popList.push({
							name: '微信'
						})
					}
					if (this.cameramanDesc.xiaohongshu != null) {
						this.popList.push({
							name: '小红书'
						})
					}
					if (this.cameramanDesc.douyin != null) {
						this.popList.push({
							name: '抖音'
						})
					}
				})

				productRandom({
					userId: this.cameramanId,
					status: 'SUCCESS',
					excludeProductId: param.id
				}).then((res) => {
					let [error, success] = res;
					this.other.list = success.data;
				});

				getUserPlanList({
					userId: this.cameramanId
				}).then(res => {
					let [error, success] = res;
					this.planList = success.data
					this.planList.map(item => {
						item.content = JSON.parse(item.content);
						item.content.peopleNum = changePeopleNum(item.content.peopleNum);
						item.content.scene = changeScene(item.content.scene);
						item.content.sceneNum = changeSceneNum(item.content.sceneNum);
						item.content.isDress = item.content.isDress ? '是' : '否'
						item.content.isMakeup = item.content.isMakeup ? '是' : '否'
					})
				})
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

		},
		onShow() {
			this.tabsCurrent = 0;
			this.productDetailShow = true;
			this.productCustomerShow = false;
		},
		onShareAppMessage(res) {
			return {
				title: "我分享了一个作品,快来看看吧",
				path: '/pages/product/product?id=' + this.productId
			};
		}

	}
</script>

<style lang="scss" scoped>
	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}
</style>
