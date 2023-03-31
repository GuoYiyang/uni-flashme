<template>
	<view>
		<view>
			<u--textarea :showConfirmBar="false" cursorSpacing="20px" count focus maxlength=600 border="none" v-model="value" :placeholder="placeholder"  height="500"></u--textarea>
		</view>
		<view style="padding:40px 24px 40px 24px">
			<u-button @click="done" color="#3D6EC2"
				customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
				完成
			</u-button>
		</view>

		
	</view>
</template>

<script>
	import {
		updateUserInfo
	} from '@/api/user.js'
	export default {
		data() {
			return {
				placeholder:'拍摄须知可能包括拍摄的注意事项、拍摄方案的预付定金、拍摄过程中产生的费用问题、预约的有效期、成品的使用权等信息',
				value:''
			}
		},
		methods: {
			done(){
				updateUserInfo({
					notice: this.value
				}).then(res=>{
					let [error, success] = res;
					if (success.data) {
						uni.showToast({
							icon: success,
							title: '创建成功'
						})
						uni.navigateBack()
					} else {
						uni.showToast({
							icon: success,
							title: '创建失败'
						})
					}
				})
				
			}
		}
	}
</script>

<style>

</style>
