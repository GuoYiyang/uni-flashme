<template>
	<view>
		<image src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/942e904ffb6ec20dd202b1bee234cfe.png"
			style="margin-bottom: -40px; height: 130px; width: 100%;"></image>

		<view class="topright">
			<u-button color="#3D6EC2" @click="follow" :text="isFollow ? '已关注': '关注'"
				customStyle="border-radius:10px; width: 80px;height: 30px;"></u-button>
		</view>

		<view style="background-color: #FFFFFF; padding-bottom: 10px; border-radius:15px">
			<view class="center">
				<u-row>
					<view @click="this.popDescShow = true">
						<u-avatar :src="avatar" size="80" customStyle="border: 4px solid #FFFFFF;"></u-avatar>
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
						<text>{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view style="background-color: #F7F9FB; margin-top: 20px; border-radius:15px 15px 0 0;">
			<view style="background-color: #FFFFFF; padding: 6px;">
				<u-tabs :list="tabsList" lineWidth="30" lineHeight="3" lineColor="#000000" :activeStyle="{
					        color: '#303133',
					        fontWeight: 'bold',
					        transform: 'scale(1)'
					    }" :inactiveStyle="{
					        color: '#606266',
					        transform: 'scale(1)'
					    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="tabsChange" :duration="100">
				</u-tabs>
			</view>
			<view style="padding: 14px 10px 0 10px;">
				<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
					@wapperClick="wapperClick" ref="waterfallsFlowRef" @loaded="waterfallsLoaded">
					<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
						<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
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

				<view style="margin: 26px 24px 100px 24px;background: #F6F7F9;border-radius: 6px;">
					<view
						style="font-weight: 300;font-size: 14px;line-height: 150%;text-align: center;color: #191919;margin: 36px 15px 36px 15px;">
						{{desc.intro}}
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
									<view @click="clickPlan(item.planId)"
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
							<view v-if="notice==null || notice == ''" @click="addNotice"
								style="height: 200px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
								<view
									style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
									<u-icon name="info-circle" size="50px"></u-icon>
									<view
										style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
										暂无拍摄须知</view>
								</view>
							</view>
							<view v-if="notice != null" @click="addNotice"
								style="padding: 20px;background: #F8F9FA height: 200px;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;height: 400px;">
								{{notice}}
							</view>
						</view>

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
		getUserFansCnt,
		getUserPlanList
	} from '@/api/user.js';
	import {
		changeCity,
		changePeopleNum,
		changeScene,
		changeSceneNum
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
				],
				popDescShow: false,
				notice: '',
				planList: [],
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
		async onLoad(param) {
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
				uni.setNavigationBarTitle({
					title: this.username + "的主页"
				});

			});
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
				if (success.data.length == 0) {}
				this.product.list = this.product.list.concat(success.data);
			})
		},
		onShareAppMessage(res) {
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
		top: 150px;
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
</style>
