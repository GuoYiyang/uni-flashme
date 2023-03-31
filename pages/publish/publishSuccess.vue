<template>
	<view>
		<view class="center" style="background: #FFFFFF;border-radius: 14px;margin: 10px 16px 0 16px;">

			<view style="margin: 60px 0 30px 0; font-weight: 600;font-size: 24px;line-height: 34px;color: #191919;">
				发布成功!
			</view>

			<view style="margin-bottom: 30px;">
				<image src="https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/publish_success.jpg?imageView2/2/w/800"></image>
			</view>
			<view style="margin:0 36px 80px 36px;font-weight: 400;font-size: 14px;line-height: 28px;text-align: center;letter-spacing: 0.005em;color: #191919;">
				我们会对所有的发布作品进行审核，审核通过后将会展示在您的主页。您也可以进一步发布拍摄方案，以完善您的摄影服务信息。
			</view>
			<view style="margin:0 36px 60px 36px">
				<u-button @click="toUserShow" color="#3D6EC2"
					customStyle="border-radius:10px;width:100px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
					查看主页
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
			
			toUserShow(){
				uni.redirectTo({
					url: '/pages/userShow/userShow?userId=' + getApp().globalData.USER_ID
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.center {
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
