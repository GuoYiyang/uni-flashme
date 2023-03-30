<template>
	<view>
		<view
			style="margin: 10px 12px 12px 12px; padding: 30px 24px 28px 24px;background: #FFFFFF;border-radius: 12px;">
		
			<view style="font-weight: 500;font-size: 16px;line-height: 16px;color: #191919;">
				拍摄方案
			</view>
		
			<view style="margin: 20px 0 20px 0;">
				<u-scroll-list :indicator="false">
					<view @click="addPlan"
						style="margin: 10px; height: 330px;width: 220px;background: #FFFFFF;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);border-radius: 12px;">
						<view
							style="height: 100%;flex: auto;display:flex;flex-direction:column;justify-content:center;align-items: center;">
							<u-icon name="plus" size="50px"></u-icon>
							<view
								style="font-weight: 400;font-size: 13px;line-height: 18px;text-align: center;color:#808080;">
								开始创建您的第一个拍摄方案</view>
						</view>
					</view>
				</u-scroll-list>
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
				*拍摄方案将展示在你的摄影师主页
			</view>

		
			<view style="margin:40px 0px 40px 0px">
				<u-button @click="done" color="#3D6EC2"
					customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
					完成
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
				
			},
			done(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>

</style>
