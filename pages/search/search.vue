<template>
	<view>
		<view style="padding: 20rpx;">
			<u-search :showAction="false" :animation="true" shape="square" placeholder="摄影师或者主题" bgColor="#FFFFFF"
				@search="search" focus></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '',
			}
		},
		methods: {
			search(res) {
				uni.navigateTo({
					url: '/pages/filterProduct/filterProduct?query=' + res + '&city=' + this.city
				});
			},
		},
		onLoad: function(param) {
			this.city = param.city
		}
	}
</script>

<style>

</style>
