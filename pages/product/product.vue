<template>
	<view>
		<u--image :src=imgUrl>
		</u--image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: '',
			}
		},
		methods: {

		},
		onLoad: function(product) { //option为object类型，会序列化上个页面传递的参数
			console.log(product.img); //打印出上个页面传递的参数。
			// console.log(product.name); //打印出上个页面传递的参数。
			this.imgUrl = product.img;
		},
	}
</script>

<style>

</style>
