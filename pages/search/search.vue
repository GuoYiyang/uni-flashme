<template>
	<view>
		<view 
		style="padding: 10px 60px 10px 60px;">
			<uni-segmented-control :current="sectionCurrent" :values="sectionList" active-color="#3D6EC2"
			@clickItem="clicksubsection">
			</uni-segmented-control>
		</view>		
		<view style="padding: 20px 20px 10px 20px;">
			<u-search :placeholder="searchText" height="40px"
			:showAction="false" :animation="true" shape="round" bgColor="#F0F1F3" @search="search" focus>
			</u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText:'搜索作品',
				city: '',
				sectionCurrent: 0,
				sectionList: [
					"作品", "摄影师"
				]
			}
		},
		methods: {
			clicksubsection(item){
				this.sectionCurrent = item.currentIndex;
				if (item.currentIndex == 0) {
					this.searchText = "搜索作品";
				} else {
					this.searchText = "搜索摄影师";
				}
				
			},
			search(res) {
				if (this.sectionCurrent == 0) {
					uni.navigateTo({
						url: '/pages/product/filterProduct?query=' + res + '&city=' + this.city
					});
				}
				if (this.sectionCurrent == 1) {
					uni.navigateTo({
						url: '/pages/explore/filterExplore?query=' + res + '&city=' + this.city
					});
				}
			},
		},
		onLoad: function(param) {
			this.city = param.city
		}
	}
</script>

<style>

</style>
