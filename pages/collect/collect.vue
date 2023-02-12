<template>
	<view>
		<template>
			<u-subsection :list="subsectionList" :current="subsectionCurrent" @change="subsectionChange"></u-subsection>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subsectionList: ['收藏的产品', '关注的摄影师'],
				// 或者如下，也可以配置keyName参数修改对象键名
				// list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
				subsectionCurrent: 0
			}
		},
		methods: {
			subsectionChange(index) {
				this.subsectionCurrent = index;
			}

		}
	}
</script>

<style>

</style>
