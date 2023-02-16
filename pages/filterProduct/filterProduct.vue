<template>
	<view>
		筛选条件为：{{filter}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filter: '',
			}
		},
		methods: {
			
		},
		onLoad: function(param) { //option为object类型，会序列化上个页面传递的参数
			if (param.query != null) {
				this.filter = param.query;
			}
			if (param.index != null) {
				this.filter = param.index;
			}
			
			
		},
	}
</script>

<style>

</style>
