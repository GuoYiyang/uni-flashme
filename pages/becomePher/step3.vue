<template>
	<view>
		<view style="margin: 40px 0 40px 0;">
			<u-steps current="1" inactiveColor="#3D6EC2" activeColor="#3D6EC2">
				<u-steps-item title="完善信息"></u-steps-item>
				<u-steps-item title="创建拍摄方案"></u-steps-item>
				<u-steps-item title="发布作品"></u-steps-item>
			</u-steps>
		</view>

		<view
			style="margin: 10px 12px 12px 12px; padding: 30px 24px 28px 24px;background: #FFFFFF;border-radius: 12px;">

			<view style="font-weight: 600;font-size: 16px;line-height: 16px;color: #191919;">
				拍摄方案
			</view>
			
			<view style="margin: 20px 0 20px 0;">
				<u-scroll-list :indicator="false">
					<view v-if="planList.length == 0" @click="addPlan"
						style="margin: 5px; height: 360px;width:240px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
						<view
							style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
							<u-icon name="plus" size="50px"></u-icon>
							<view
								style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
								开始创建您的第一个拍摄方案</view>
						</view>
					</view>
			
					<view v-if="planList.length > 0" v-for="(item, index) in planList" :key="index" style="margin: 5px;">
						<view @click="clickPlan(item.planId)"
							style="padding: 20px 20px 20px 20px; margin: 5px;width: 240px;height: 380px;background: #F8F9FA;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
			
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
			
							<view style="font-weight: 500;font-size: 20px;line-height: 24px;color: #191919;">
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
						<u-icon name="plus" size="50px"></u-icon>
						<view
							style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
							开始创建您的第一个拍摄方案</view>
					</view>
				</view>
				<view v-if="notice != null" @click="addNotice"
					style="padding: 20px;background-color: #F8F9FA;display: flex">
					<text style="font-size: 14px;color: #4E4E4E;line-height: 150%;">{{notice}}</text>
				</view>
			</view>
			
			<view style="font-weight: 300;font-size: 14px;line-height: 16px;color: #808080">
				*拍摄方案将展示在你的摄影师主页
			</view>

			<view style="font-weight: 300;font-size: 14px;line-height: 16px;color: #808080">
				*你可以到「个人中心」处创建更多的方案。
			</view>

			<view style="margin:40px 0px 40px 0px">
				<u-button @click="toStep4" color="#3D6EC2"
					customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
					下一步
				</u-button>
			</view>

		</view>

	</view>
</template>

<script>
	import {
		getUserPlanList,
		getUserInfo,
		updateUserInfo,
		deleteUserPlan
	} from '@/api/user.js'
	import {
		changePeopleNum,
		changeScene,
		changeSceneNum
	} from '@/common/method.js'
	export default {
		data() {
			return {
				planList:[],
				notice:'',
			}
		},
		methods: {
			addPlan(){
				uni.navigateTo({
					url: '/pages/plan/addPlan'
				})
			},
			addNotice(){
				uni.navigateTo({
					url: '/pages/plan/editNotice'
				})
			},
			toStep4() {
				uni.navigateTo({
					url: '/pages/becomePher/step4'
				})
			}
		},
		onShow() {
			getUserPlanList({
				userId: getApp().globalData.USER_ID
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
			getUserInfo({
				userId: getApp().globalData.USER_ID
			}).then(res=>{
				let [error, success] = res;
				this.notice = success.data.notice;
			})
		},
	}
</script>

<style>

</style>
