<template>
	<view>
		<image src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/index_background.jpg"
			style="margin-bottom: -40px; height: 160px; width: 100%;"></image>
		<view class="topright">
			<u-button color="#3D6EC2" @click="follow" :text="isFollow ? '已关注': '关注'"
				customStyle="border-radius:10px; width: 80px;height: 30px;"></u-button>
		</view>
		<view style="background-color: #FFFFFF; padding-bottom: 10px; border-radius:15px">

			<view class="center">
				<u-row>
					<view @click="avatarClick">
						<u-avatar :src="avatar" size="80"></u-avatar>
					</view>
				</u-row>
				<u-row customStyle="padding-top: 10px;">
					<u-col span="12">
						<text style="font-size: 20px; font-weight: bolder;">{{username}}</text>
					</u-col>
				</u-row>

				<u-row customStyle="padding-top: 10px;">
					<u-icon name="map" :label="city"></u-icon>
				</u-row>

				<u-row customStyle="padding-top: 10px; padding-bottom: 10px;">
					<view style="flex-flow: row;">
						<text style="font-size: 14px; color: #4E4E4E;padding-right: 20px;">作品数 {{productCnt}}</text>
						<text style="font-size: 14px; color: #4E4E4E;">粉丝数 {{fansCnt}}</text>
					</view>
				</u-row>
			</view>


			<u-line></u-line>

			<view style="padding: 10px;">
				<u-grid :border="false" col="2">
					<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding:10px"
							@click="clickFastList(listIndex)"></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view style="padding: 10px;">

		</view>

		<view style="background-color: #F7F9FB; padding-top: 0px; border-radius:15px 15px 0 0;">
			<view style="background-color: #FFFFFF; padding: 6px;">
				<u-sticky bgColor="FFFFFF">
					<u-tabs :list="tabsList" lineWidth="30" lineHeight="3" lineColor="#000000" :activeStyle="{
					        color: '#303133',
					        fontWeight: 'bold',
					        transform: 'scale(1)'
					    }" :inactiveStyle="{
					        color: '#606266',
					        transform: 'scale(1)'
					    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
					</u-tabs>
				</u-sticky>
			</view>

			<view style="padding: 10rpx;">
				<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
					@wapperClick="wapperClick" ref="waterfallsFlowRef">
					<view class="item" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view class="title">{{item.title}}</view>
					</view>
				</custom-waterfalls-flow>
			</view>
		</view>

		<view>

			<u-action-sheet :actions="popContactList" @select="selectClick" :show="popContactShow" cancelText="取消"
				@close="this.popContactShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
				:safeAreaInsetBottom="true"></u-action-sheet>

			<u-popup :show="popPlanShow" :round="10" @close="this.popPlanShow = false" mode="bottom">
				<scroll-view scroll-y="true" style="height: 700px;">
					<view style="font-weight: bold; font-size: 16px; padding: 10px;">拍摄方案</view>

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


					<view style="font-weight: bold;font-size: 16px; padding: 10px;">拍摄须知</view>

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


					<view style="padding: 10px;">
						<u-button color="#000000" @click="this.popShow=true">在线预约</u-button>
					</view>

				</scroll-view>
			</u-popup>
		</view>

	</view>
</template>

<script>
	import {
		getProductPage
	} from '@/api/product.js'
	import {
		getUserInfo,
		pherCollect,
		getPherCollectStatus,
		getUserFansCnt
	} from '@/api/user.js';
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				userId: '',
				username: '',
				avatar: '',
				city: '',
				gender: '',
				desc: {},
				phone: '',
				productCnt: 0,
				fansCnt: 0,
				page: 1,
				pageSize: 10,
				product: {
					list: []
				},
				tabsList: [{
					name: '全部'
				}],
				isFollow: false,
				fastList: [{
						name: '/static/price.png',
						title: '拍摄方案'
					},
					{
						name: '/static/phone.png',
						title: '联系方式'
					},
				],
				popContactShow: false,
				popPlanShow: false,
				popContactList: [{
					name: '电话'
				}, {
					name: '微信'
				}],
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
				]
			}
		},
		methods: {
			clickFastList(item) {
				if (item == 0) {
					this.popPlanShow = true;
				}
				if (item == 1) {
					this.popContactShow = true;
				}
			},
			selectClick(item) {
				if ("电话" == item.name) {
					uni.makePhoneCall({
						phoneNumber: this.phone
					})
				}
				if ("微信" == item.name) {
					uni.setClipboardData({
						data: 'Slimshadys_'
					})
				}
			},
			follow() {
				let pherId = this.userId;
				this.isFollow = !this.isFollow;
				let deleted = 0;
				if (!this.isFollow) {
					deleted = 1;
				}
				pherCollect({
					userId: getApp().globalData.USER_ID,
					pherId: pherId,
					isDelete: deleted
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
			}
		},
		async onLoad(param) {
			await this.$onLaunched;
			this.userId = param.userId;
			let _this = this;
			getUserInfo({
				userId: param.userId
			}).then((res) => {
				let [error, success] = res;
				_this.username = success.data.nickname;
				_this.city = changeCity(success.data.city);
				_this.gender = success.data.gender;
				_this.avatar = success.data.avatar;
				_this.desc = JSON.parse(success.data.desc);
				_this.phone = success.data.phone;
				uni.setNavigationBarTitle({
					title: this.username + "的主页"
				});

			});
			getProductPage({
				userId: this.userId,
				status:'SUCCESS',
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
			});
			getPherCollectStatus({
				userId: getApp().globalData.USER_ID,
				pherId: this.userId
			}).then((res) => {
				let [error, success] = res;
				_this.isFollow = success.data;
			});
			getUserFansCnt({
				userId: this.userId
			}).then((res) => {
				let [error, success] = res;
				_this.productCnt = success.data[0];
				_this.fansCnt = success.data[1];
			});
			uni.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"]
			});
		},
		onReachBottom() {
			this.page = this.page + 1;
			getProductPage({
				userId: this.userId,
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {}
				this.product.list = this.product.list.concat(success.data);
			})
		},
		onShareAppMessage(res) {
			console.log(res)
			return {
				title: this.username,
				//如果有参数的情况可以写path
				path: "/pages/userShow/userShow?userId=" + this.userId,
			};
		}
	}
</script>

<style lang="scss" scoped>
	.topright {
		position: absolute;
		top: 170px;
		right: 16px;
		font-size: 15px;
	}

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
			font-weight: bold;
			line-height: 48rpx;
			font-size: 30rpx;
			color: #222;
		}

		.desc {
			font-size: 24rpx;
			color: #666;
		}
	}
</style>
