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

			<view style="font-weight: 500;font-size: 16px;line-height: 16px;color: #191919;">
				拍摄方案
			</view>

			<view style="margin: 20px 0 20px 0;">
				<view @click="addPlan"
					style="height: 330px;width: 220px;background: #FFFFFF;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
					<view
						style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
						<u-icon name="plus" size="50px"></u-icon>
						<view
							style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
							开始创建您的第一个拍摄方案</view>
					</view>
				</view>
			</view>

			<view style="font-weight: 500;font-size: 16px;line-height: 16px;color: #191919;">
				拍摄须知
			</view>

			<view style="margin: 20px 0 20px 0;">
				<view @click="addNotice"
					style="height: 200px;width: 350px;background: #FFFFFF;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
					<view
						style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
						<u-icon name="plus" size="50px"></u-icon>
						<view
							style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
							点击编辑您的拍摄须知</view>
					</view>
				</view>
			</view>

			<view style="font-weight: 300;font-size: 14px;line-height: 16px;color: #808080">
				*拍摄方案将展示在你的摄影师主页；
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
	export default {
		data() {
			return {

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
		}
	}
</script>

<style>

</style>
