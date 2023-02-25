<template>
	<view>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">三步即可轻松发布产品</text>
			</uni-card>
			<uni-section title="第一步:选择封面" type="line">
				<view class="example-body">
					<uni-file-picker limit="1" title="最多选择1张图片" mode="grid" file-mediatype="image" ref="images"
						:auto-upload="false" :sizeType='["compressed"]' :sourceType='["album"]'
						:imageStyles="imageStyles" :autoUpload='false' @select="selectMainImg" @delete="deleteMainImg">
					</uni-file-picker>
				</view>
			</uni-section>
			<uni-section title="第二步:选择图片" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片" mode="grid" file-mediatype="image" ref="images"
						:auto-upload="false" :sizeType='["compressed"]' :sourceType='["album"]'
						:imageStyles="imageStyles" :autoUpload='false' @select="seleteImage" @delete="deleteImage">
					</uni-file-picker>
				</view>
			</uni-section>
			<uni-section title="第三步:填充信息" type="line">
				<view class="example-body">
					<!-- 基础用法，不包含校验规则 -->
					<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
						<uni-forms-item label="标题" required>
							<uni-easyinput v-model="baseFormData.title" />
						</uni-forms-item>
						<uni-forms-item label="价格" required>
							<uni-easyinput v-model="baseFormData.price" type="digit" />
						</uni-forms-item>
						<uni-forms-item label="主题" required>
							<uni-data-checkbox v-model="baseFormData.tag" multiple :localdata="tags" />
						</uni-forms-item>
						<uni-forms-item label="基本信息" required>
							<uni-easyinput type="textarea" v-model="baseFormData.info" />
						</uni-forms-item>
						<uni-forms-item label="拍摄须知" required>
							<uni-easyinput type="textarea" v-model="baseFormData.introduction" />
						</uni-forms-item>
					</uni-forms>
				</view>
			</uni-section>
			<u-button @click="submit">点击上传</u-button>
		</view>
	</view>
</template>

<script>
	import {
		uploadImages,
		publishProduct
	} from '@/api/product.js'
	import upload from '../../uni_modules/uview-ui/libs/config/props/upload';
	export default {
		data() {
			return {
				imagePath: '',
				imageName: '',
				imagePathList: [],
				imageNameList: [],
				imageStyles: {
					"height": 100, // 边框高度
					"width": 100, // 边框宽度
					"border": { // 如果为 Boolean 值，可以控制边框显示与否
						"color": "#eee", // 边框颜色
						"width": "1px", // 边框宽度
						"style": "solid", // 边框样式
						"radius": "10%" // 边框圆角，支持百分比
					}
				},
				baseFormData: {
					title: '',
					price: '',
					introduction:'',
					tag: [],
					info:'',
					notice:''
				},
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				tags: [{
					text: '写真',
					value: 0
				}, {
					text: '证件照',
					value: 1
				}, {
					text: '婚纱',
					value: 2
				}, {
					text: '情侣',
					value: 3
				}, {
					text: '亲子',
					value: 4
				}, {
					text: '宠物',
					value: 5
				}, {
					text: '旅拍',
					value: 6
				}, {
					text: '其他',
					value: 7
				}]
			}
		},
		methods: {
			selectMainImg(e) {
				console.log(e)
				this.imagePath = e.tempFilePaths[0];
				this.imageName = e.tempFiles[0].name;
			},
			deleteMainImg(e) {
				this.imagePath = "";
				this.imageName = "";
			},
			seleteImage(e) {
				console.log(e)
				e.tempFilePaths.map(item => {
					this.imagePathList.push(item)
				});
				e.tempFiles.map(item => {
					this.imageNameList.push(item.name)
				});
			},
			deleteImage(e) {
				this.imagePathList.map((item, i) => {
					if (item == e.tempFilePath) {
						this.imagePathList.splice(i, 1)
					}
				});
				this.imageNameList.map((item, i) => {
					if (item == e.tempFile.name) {
						this.imageNameList.splice(i, 1)
					}
				});
			},
			upload() {
				let _this = this;
				if (this.imagePath != "") {
					uploadImages({
						filePath: this.imagePath
					})
				}
				if (this.imagePathList.length > 0) {
					this.imagePathList.forEach(item => {
						uploadImages({
							filePath: item
						})
					})
				}
			},
			publish() {
				let content = {
					'info': this.baseFormData.info,
					'introduction': this.baseFormData.introduction
				}
				publishProduct({
					userId: getApp().globalData.USER_ID,
					title: this.baseFormData.title,
					content: JSON.stringify(content),
					tags: this.baseFormData.tag.toString(),
					price: this.baseFormData.price,
					imgName: this.imageName,
					imgNameList: this.imageNameList,
				}).then((res) => {
					let [error, success] = res;
					if (success.data == true) {
						uni.showToast({
							title: '发布成功'
						})
					} else{
						uni.showToast({
							title: '发布失败'
						})
					}
				})
			},
			async submit() {
				console.log(this.imageName)
				console.log(this.imageNameList)
				uni.showLoading();
				this.upload();
				this.publish();
				setTimeout(() => {
					uni.hideLoading();
					uni.navigateBack();
				}, 2000)
			}
		}
	}
</script>

<style>
	.example-body {
		padding: 10px;
		padding-top: 0;
	}
</style>
