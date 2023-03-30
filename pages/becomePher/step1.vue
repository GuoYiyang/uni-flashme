<template>
	<view>
		<view
			style="margin: 10px 12px 12px 12px; padding: 30px 24px 28px 24px;background: #FFFFFF;border-radius: 12px;">
			<view style="font-weight: 500;font-size: 16px;line-height: 16px;color: #191919;">
				快速入驻，三步建立私域营销作品:
			</view>
			<view style="margin: 40px 0 40px 0;">
				<u-steps current="-1" inactiveColor="#3D6EC2">
					<u-steps-item title="完善信息"></u-steps-item>
					<u-steps-item title="创建拍摄方案"></u-steps-item>
					<u-steps-item title="发布作品"></u-steps-item>
				</u-steps>
			</view>

			<view style="margin:0px 0px 30px 0px">
				<u-button @click="toStep2" color="#3D6EC2"
					customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
					免费入驻为摄影师
				</u-button>
			</view>
		</view>

		<view
			style="margin: 10px 12px 12px 12px; padding: 30px 24px 28px 24px;background: #FFFFFF;border-radius: 12px;">
			<view style="font-weight: 500;font-size: 16px;line-height: 16px;color: #191919;">
				入驻摄影预约平台，您将会获得以下多重权益:
			</view>

			<view style="margin-top: 20px;">
				<u-row>
					<u-col span="1">
						<u-icon name="/static/duihao.png"></u-icon>
					</u-col>
					<u-col>
						<view style="font-weight: 400;font-size: 16px;line-height: 26px;color: #191919;">
							免费大容量作品空间
						</view>
					</u-col>
				</u-row>
				<u-row>
					<u-col span="1">
					</u-col>
					<view style="font-weight: 400;font-size: 14px;line-height: 26px;color: #808080;">
						提供 1000 张免费的作品空间，无需担心存储空间，支持自定义作品集，轻松整理和展示您的摄影作品。
					</view>
				</u-row>
			</view>
			<view style="margin-top: 20px;">
				<u-row>
					<u-col span="1">
						<u-icon name="/static/duihao.png"></u-icon>
					</u-col>
					<u-col>
						<view style="font-weight: 400;font-size: 16px;line-height: 26px;color: #191919;">
							便捷管理拍摄方案
						</view>
					</u-col>
				</u-row>
				<u-row>
					<u-col span="1">
					</u-col>
					<view style="font-weight: 400;font-size: 14px;line-height: 26px;color: #808080;">
						让客人一目了然地了解您的套餐价格和服务内容；同时支持发布限时活动以更好的促成营销转化。
					</view>
				</u-row>
			</view>
			<view style="margin-top: 20px;">
				<u-row>
					<u-col span="1">
						<u-icon name="/static/duihao.png"></u-icon>
					</u-col>
					<u-col>
						<view style="font-weight: 400;font-size: 16px;line-height: 26px;color: #191919;">
							享受平台流量，获取更大曝光
						</view>
					</u-col>
				</u-row>
				<u-row>
					<u-col span="1">
					</u-col>
					<view style="font-weight: 400;font-size: 14px;line-height: 26px;color: #808080;">
						享受平台流量，让您的作品集和拍摄方案获得更多曝光；支持一键分享主页名片及作品帮你触达用户。
					</view>
				</u-row>
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
			toStep2(){
				uni.navigateTo({
					url:'/pages/becomePher/step2'
				})
			}
		}
	}
</script>

<style>

</style>
