<template>
	<view>
		<!-- <image :src="bgImg" style="margin-bottom: -40px; height: 130px; width: 100%;"></image> -->

		<view class="topright">

			<u-button color="#FFFFFF" @click="follow"
				customStyle="width: 45px;height: 30px;background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 30px;">
				<uni-icons :type="isFollow ? 'auth': 'personadd'" size="25"
					:color="isFollow ? '#808080': '#191919'"></uni-icons>
			</u-button>
			<view style="margin: 0 5px 0 0;"></view>
			<u-button color="#FFFFFF" openType="share"
				customStyle="width: 45px;height: 30px;background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 30px;">
				<uni-icons type="paperplane-filled" size="25"></uni-icons>
			</u-button>
		</view>


		<view style="background-color: #FFFFFF; padding-bottom: 10px; border-radius:15px">
			<view class="center" style="padding-top: 20px;">
				<view @click="this.popDescShow = true">
					<u-avatar :src="avatar" size="80" customStyle="border: 4px solid #FFFFFF;"></u-avatar>
				</view>
				<view style="padding-top: 10px;">
					<text style="font-size: 20px; font-weight: bolder;">{{username}}</text>
				</view>
				<view style="padding-top: 10px;">
					<u-icon name="map" :label="city"></u-icon>
				</view>

				<view style="padding-top: 10px; padding-bottom: 10px;flex-flow: row;">
<!-- 					<text style="font-size: 14px; color: #4E4E4E;padding-right: 20px;">作品数 {{productCnt}}</text>
					<text style="font-size: 14px; color: #4E4E4E;">粉丝数 {{fansCnt}}</text> -->
				</view>
			</view>

			<u-line></u-line>

			<view style="padding: 10px;">
				<u-grid :border="false" :col="fastList.length">
					<u-grid-item v-for="(listItem,listIndex) in fastList" :key="listIndex">
						<u-icon :name="listItem.name" :size="22" customStyle="padding:10px"
							@click="clickFastList(listIndex)"></u-icon>
						<text>{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view style="background-color: #F7F9FB; margin-top: 10px; border-radius:15px 15px 0 0;">
			<view style="margin: 0 10px 0 10px;">
				<u-tabs :list="setList" lineWidth="40" lineHeight="0" lineColor="#191919"
					:activeStyle="{color: '#191919',fontWeight: 'bold', transform: 'scale(1)'}"
					:inactiveStyle="{color: '#808080',transform: 'scale(1)'}" :current="setCurrent" :duration="100"
					@change="setChange">
				</u-tabs>
			</view>
			<view style="padding: 0px 10px 0 10px;">
				<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
					@wapperClick="wapperClick" ref="waterfallsFlowRef">
					<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view style="font-weight: 600;font-size: 15px;line-height: 32px;padding: 2px 6px 10px 6px">
							{{item.title}}
						</view>
					</view>
				</custom-waterfalls-flow>
			</view>
		</view>

		<view @touchmove.stop.prevent="">
			<u-popup :show="popDescShow" :round="10" @close="this.popDescShow = false" mode="bottom" closeable>
				<view
					style="font-weight: 700;font-size: 22px;line-height: 100%;text-align: center;color: #191919; margin-top: 50px;">
					{{username}}
				</view>

				<view style="font-style: normal;font-size: 12px;text-align: center;color: #4E4E4E; margin-top: 20px;">
					{{desc.whatsup}}
				</view>

				<view style="font-style: normal;font-size: 12px;text-align: center;color: #4E4E4E; margin-top: 10px;">
					{{city}}
				</view>

				<view style="margin: 26px 24px 100px 24px;background: #F6F7F9;border-radius: 6px;display: flex;">
					<view v-if="desc.intro != ''"
						style="font-weight: 300;font-size: 14px;line-height: 150%;text-align: center;color: #191919;margin: 36px 15px 36px 15px;">
						<text>{{desc.intro}}</text>
					</view>
					<view v-if="desc.intro == ''"
						style="font-weight: 300;font-size: 14px;line-height: 150%;text-align: center;color: #191919;margin: 36px 15px 36px 15px;">
						<text>暂未补充简介</text>
					</view>
				</view>
			</u-popup>
		</view>

		<u-action-sheet :actions="popContactList" @select="selectClick" :show="popContactShow" cancelText="取消"
			@close="this.popContactShow=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
			:safeAreaInsetBottom="true"></u-action-sheet>

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
								<view v-if="planList== [] || planList.length == 0" @click="addPlan"
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
										style="padding: 28px 20px 28px 20px; margin: 8px;width: 212px;height: 336px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.20);border-radius: 10px;">
										<view
											style="font-weight: 350;font-size: 14px;color: #4E4E4E;margin: 0px 8px 8px 8px;">
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">拍摄人数</u-col>
												<u-col span="6">{{item.content.peopleNum}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">拍摄张数</u-col>
												<u-col span="6">{{item.content.photoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">精修张数</u-col>
												<u-col span="6">{{item.content.jingxiuPhotoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">底片赠送</u-col>
												<u-col span="6">{{item.content.zengsongPhotoCnt}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">拍摄场景</u-col>
												<u-col span="6">{{item.content.scene}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">场景数量</u-col>
												<u-col span="6">{{item.content.sceneNum}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">设备型号</u-col>
												<u-col span="6">{{item.content.equipment}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">提供化妆</u-col>
												<u-col span="6">{{item.content.isMakeup}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">提供服装</u-col>
												<u-col span="6">{{item.content.isDress}}</u-col>
											</u-row>
											<u-row customStyle="padding-bottom:6px">
												<u-col span="6">其他说明</u-col>
												<u-col span="6">{{item.content.other}}</u-col>
											</u-row>
										</view>

										<u-line></u-line>

										<view
											style="font-weight: 400;font-size: 16px;line-height: 20px;color: #191919;margin: 12px 8px 12px 8px;">
											{{item.content.name}}
										</view>

										<view
											style="font-weight: 550;font-size: 22px;line-height: 20px;color: #191919;margin: 0 8px 0px 8px;">
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
							<view v-if="notice==null || notice == ''" @click="addNotice"
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
								style="padding: 20px;background-color: #F8F9FA;display: flex;">
								<text style="font-size: 14px;color: #4E4E4E;line-height: 150%;">{{notice}}</text>
							</view>
						</view>

					</view>
				</scroll-view>
			</u-popup>
		</view>

		<view style="padding: 10px;">
			<u-loadmore :status="loadMoreStatus" />
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
		getUserFansCnt,
		getUserPlanList
	} from '@/api/user.js';
	import {
		changeCity,
		changePeopleNum,
		changeScene,
		changeSceneNum,
		onFeedTap
	} from '@/common/method.js'
	import {
		getSetList
	} from '@/api/set.js'
	export default {
		data() {
			return {
				bgImg: 'https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/942e904ffb6ec20dd202b1bee234cfe.png',
				selectedbgImgPath: '',
				loadMoreStatus: 'loading',
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
						name: '/static/about.png',
						title: '关于TA'
					}, {
						name: '/static/plan.png',
						title: '拍摄方案'
					},
					{
						name: '/static/contact.png',
						title: '联系方式'
					},
				],
				popContactShow: false,
				popPlanShow: false,
				popContactList: [{
					name: '电话'
				}],
				popDescShow: false,
				notice: '',
				planList: [],
				setCurrent: 0,
				setId: '',
				setList: [{
					id: "",
					name: "全部"
				}]
			}
		},
		methods: {
			setChange(index) {
				this.loadMoreStatus = 'loading';
				this.setCurrent = index.index
				this.setId = index.id
				let _this = this;
				getProductPage({
					userId: this.userId,
					status: "SUCCESS",
					setId: index.id,
					page: 1,
					pageSize: this.pageSize,
				}).then((res) => {
					let [error, success] = res;
					if (success.data.length == 0) {}
					_this.product.list = success.data;
					_this.$refs.waterfallsFlowRef.refresh();
					if (success.data.length < 10) {
						this.loadMoreStatus = 'nomore';
					}
				})
			},
			clickFastList(item) {
				if (item == 0) {
					this.popDescShow = true
				}
				if (item == 1) {
					this.popPlanShow = true;
				}
				if (item == 2) {
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
						data: this.desc.wxid
					})
				}
				if ("小红书" == item.name) {
					uni.setClipboardData({
						data: this.desc.xiaohongshu
					})
				}
				if ("抖音" == item.name) {
					uni.setClipboardData({
						data: this.desc.douyin
					})
				}
			},
			follow() {
				let pherId = this.userId;
				this.isFollow = !this.isFollow;
				let deleted = 0;
				if (!this.isFollow) {
					deleted = 1;
					this.fansCnt--;
				} else {
					this.fansCnt++;
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
		onReady() {
			uni.hideNavigationBarLoading()
		},
		async onLoad(param) {
			uni.showNavigationBarLoading()
			await this.$onLaunched;
			this.userId = param.userId;
			let _this = this;
			getUserInfo({
				userId: this.userId
			}).then((res) => {
				let [error, success] = res;
				this.username = success.data.nickname;
				this.city = changeCity(success.data.city);
				this.gender = success.data.gender;
				this.avatar = success.data.avatar;
				this.desc = JSON.parse(success.data.desc);
				this.phone = success.data.phone;
				this.notice = success.data.notice;
				if (this.desc.wxid != null && this.desc.wxid != '') {
					this.popContactList.push({
						name: '微信'
					})
				}
				if (this.desc.xiaohongshu != null && this.desc.xiaohongshu != '') {
					this.popContactList.push({
						name: '小红书'
					})
				}
				if (this.desc.douyin != null && this.desc.douyin != '') {
					this.popContactList.push({
						name: '抖音'
					})
				}
				uni.setNavigationBarTitle({
					title: this.username + "的主页"
				});
			});
			getSetList({
				userId: this.userId
			}).then(res => {
				let [error, success] = res;
				this.setList = this.setList.concat(success.data)
			})
			getUserPlanList({
				userId: this.userId
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
			getProductPage({
				userId: this.userId,
				status: 'SUCCESS',
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				_this.product.list = success.data;
				if (success.data.length < 10) {
					this.loadMoreStatus = 'nomore';
				}
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
				status: 'SUCCESS',
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length === 0) {
					this.loadMoreStatus = 'nomore';
				}
				this.product.list = this.product.list.concat(success.data);
			})
		},
		onShareAppMessage(res) {
			return {
				title: "分享了摄影师" + this.username,
				path: "/pages/userShow/userShow?userId=" + this.userId,
				imageUrl: this.avatar
			};
		}
	}
</script>

<style lang="scss" scoped>
	.topright {
		display: flex;
		flex-direction: row;
		position: absolute;
		top: 15px;
		right: 20px;
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
</style>