<template>
	<view>
		<view style="padding: 14px 10px 0 10px;">
			<custom-waterfalls-flow :value="product.list" :column="2" :columnSpace="1" @imageClick="imageClick"
				@wapperClick="wapperClick" ref="waterfallsFlowRef">
				<view style="padding: 5px;" v-for="(item,index) in product.list" :key="index" slot="slot{{index}}">
					<view style="font-weight: 600;font-size: 15px;line-height: 20px;padding: 6px 6px 6px 6px">
						{{item.title}}

					</view>
					<view style="padding: 0px 6px 6px 6px">
						<u-row>
							<u-col span="1.5" align="center">
								<u-avatar :src="item.userInfo.avatar" size='18'></u-avatar>
							</u-col>
							<u-col span="10.5" align="center">
								<text style="font-size: 12px; color: #4e4e4e;">{{item.userInfo.nickname}}</text>
							</u-col>
						</u-row>
					</view>
				</view>
			</custom-waterfalls-flow>
		</view>
		
		<view style="padding: 10px;"><u-loadmore :status="loadMoreStatus"/></view>
		
		
	</view>
</template>

<script>
	import {
		getProductPage
	} from '@/api/product.js'
	import {
		changeTag
	} from '@/common/method.js'
	export default {
		data() {
			return {
				loadMoreStatus:'loading',
				page: 1,
				pageSize: 10,
				city: '',
				tag: '',
				query: '',
				product: {
					list: []
				},
				cityList: [{
						value: "0",
						text: "深圳"
					},
					{
						value: "1",
						text: "北京"
					},
					{
						value: "2",
						text: "上海"
					},
					{
						value: "3",
						text: "广州"
					},
				],
			}
		},
		methods: {
			wapperClick(item) {
				uni.navigateTo({
					url: '../product/product?id=' + item.id
				})
			},
			imageClick(item) {
				uni.navigateTo({
					url: '../product/product?id=' + item.id
				})
			},
		},
		onLoad: function(param) {
			let _this = this;
			this.city = getApp().globalData.CITY;
			if (param.tag != null) {
				this.tag = param.tag;
				getProductPage({
					city: this.city,
					tag: this.tag,
					query: this.query,
					status: 'SUCCESS',
					page: this.page,
					pageSize: this.pageSize
				}).then((res) => {
					let [error, success] = res;
					_this.product.list = success.data;
					if (success.data.length < 10){
						this.loadMoreStatus = 'nomore'
					}
				})
			}
			if (param.query != null) {
				this.query = param.query;
				getProductPage({
					city: this.city,
					tag: this.tag,
					query: this.query,
					status: 'SUCCESS',
					page: this.page,
					pageSize: this.pageSize
				}).then((res) => {
					let [error, success] = res;
					_this.product.list = success.data;
					if (success.data.length < 10){
						this.loadMoreStatus = 'nomore'
					}
				})
			}
			
			uni.setNavigationBarTitle({
				title: changeTag(param.tag) +  '的相关作品'
			});

		},
		onReachBottom() {
			this.page = this.page + 1;
			getProductPage({
				city: this.city,
				tag: this.tag,
				query: this.query,
				status: 'SUCCESS',
				page: this.page,
				pageSize: this.pageSize
			}).then((res) => {
				let [error, success] = res;
				if (success.data.length == 0) {
					this.loadMoreStatus = 'nomore'
				}
				this.product.list = this.product.list.concat(success.data);
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>
