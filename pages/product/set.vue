<template>
	<view>
		<view style="margin: 18px 34px 20px 34px;background: #FFFFFF;border-radius: 10px;">
			<u-button @click="addSet">
				<text style="font-weight: 500;line-height: 17px;align-items: center;color: #808080;">
					+ 创建新作品集
				</text>
			</u-button>
		</view>

		<div v-for="item in setList" :key="item.id">
			<view style="margin:0px 30px 16px 30px;padding:10px 0 10px 0;background: #FFFFFF;border-radius: 10px;">
				<view style="font-weight: 400;line-height: 20px; text-align: center; color: #191919;">
					{{item.name}}
				</view>
				<view style="padding-top: 10px;display: flex; flex-direction: row;justify-content: center;align-items: center;">
					<u-icon label="修改" size="20" name="edit-pen-fill" @click="updateSet(item)"></u-icon>
					<view style="padding: 0 10px 0 10px;"></view>
					<u-icon label="删除" size="20" name="trash"@click="removeSet(item.id)"></u-icon>
				</view>
			</view>
		</div>

		<u-popup :show="popShow" @close="this.popShow=false" round="10">
			<view>
				<view style="margin: 40px 40px 20px 40px;">
					<u--input placeholder="请输入作品集名称" inputAlign="center" shape="circle" v-model="setText"
						maxlength=6 cursorSpacing="50px"></u--input>
				</view>
				<view style="font-size: 12px;line-height: 16px;text-align: center;color: #808080;">
					已发布的作品将按照作品集进行分类展示
				</view>
				<view style="margin: 20px 40px 40px 40px;">
					<u-button @click="createSet" color="#3D6EC2" customStyle="border-radius:10px;">完成</u-button>
				</view>
			</view>

		</u-popup>

	</view>
</template>

<script>
	import {
		createSet,
		deleteSet,
		getSetList
	} from '@/api/set.js'
	export default {
		data() {
			return {
				setList: [],
				popShow: false,
				setId:'',
				setText: ''
			}
		},
		methods: {
			removeSet(id) {
				deleteSet({
					setId: id
				}).then(res => {
					let [error, success] = res;
					if (success.data == true) {
						getSetList().then(res => {
							let [error, success] = res;
							this.setList = success.data
						})
					} else {
						uni.showToast({
							icon: 'error',
							title: '删除失败'
						})
					}
				})
			},
			updateSet(item){
				this.setId = item.id
				this.popShow = true
				this.setText = item.name
			},
			addSet() {
				this.popShow = true
				this.setText = ""
				this.setId = ""
			},
			createSet(){
				this.popShow = false
				createSet({
					id: this.setId,
					name: this.setText
				}).then(res => {
					let [error, success] = res;
					if (success.data == true) {
						getSetList().then(res => {
							let [error, success] = res;
							this.setList = success.data
						})
					} else {
						uni.showToast({
							icon: 'error',
							title: '创建失败'
						})
					}
				})
			}
		},
		onLoad() {
			let _this = this;
			getSetList().then(res => {
				let [error, success] = res;
				_this.setList = success.data
			})
		}
	}
</script>

<style>

</style>
