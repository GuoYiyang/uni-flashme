<template>
	<view>
		<view>
			<view style="background-color: #FFFFFF;border-radius: 10px">
				<view style="padding: 18px 16px 18px 16px; color: #808080;">上传作品，最多选择9张照片</view>
				<view style="padding: 0px 16px 16px 16px; margin-bottom: 12px;">
					<uni-file-picker limit="9" mode="grid" file-mediatype="image" :sizeType='["compressed"]'
						:sourceType='["album"]' :imageStyles="imageStyles" @select="seleteImage" @delete="deleteImage">
					</uni-file-picker>
				</view>
			</view>

			<view style="padding: 6px 26px 6px 26px; border-radius: 10px; background-color: #FFFFFF;">
				<u--form labelPosition="top" :rules="rules" ref="Form" :model="form"
					:labelStyle="{'font-weight':300,'font-size':'14px','line-height':'16px','color':'#808080'}">
					<u-form-item labelWidth="100px" label="作品名称" prop="title" borderBottom>
						<u--input v-model="form.title" border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="100px" label="作品类型" prop="tag" @click="showCate = true;">
						<u--input readonly v-model="form.tagText" placeholder="请选择作品类型" border="none">
						</u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
				</u--form>
				<u-picker :show="showCate" :columns="cateList" @confirm="cateSelect" keyName="text"
					@cancel="showCate = false">
				</u-picker>
			</view>

			<view style="padding:16px 0px 50px 0">
				<u-button @click="submit" color="#3D6EC2"
					customStyle="border-radius:10px;width:100px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
					发布
				</u-button>
			</view>

		</view>


		<u-overlay :show="overlayShow"></u-overlay>

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
				overlayShow: false,
				tempFiles: [],
				form: {
					title: '',
					tag: '',
					tagText: '',
					price: '',
					content: {}
				},
				imageStyles: {
					"height": 110, // 边框高度
					"width": 110, // 边框宽度
					"border": { // 如果为 Boolean 值，可以控制边框显示与否
						"color": "#E6E6E6", // 边框颜色
						"width": "1px", // 边框宽度
						"style": "solid", // 边框样式
						"radius": "8px" // 边框圆角，支持百分比
					}
				},
				showCate: false,
				cateList: [
					[{
						text: '写真',
						value: 0
					}, {
						text: '情侣',
						value: 1
					}, {
						text: '婚纱',
						value: 2
					}, {
						text: '职场',
						value: 3
					}, {
						text: '孕妇',
						value: 4
					}, {
						text: '宝宝',
						value: 5
					}, {
						text: '家庭',
						value: 6
					}]
				],
				rules: {
					'title': {
						type: 'string',
						required: true,
						min: 2,
						max: 20,
						message: '长度为2-20个字符',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		methods: {
			cateSelect(e) {
				this.form.tag = e.value[0].value
				this.form.tagText = e.value[0].text
				this.showCate = false;
			},
			seleteImage(e) {
				console.log(e)
				e.tempFiles.map(item => {
					this.tempFiles.push(item)
				});
			},
			deleteImage(e) {
				console.log(e)
				this.tempFiles.map((item, i) => {
					if (item.path == e.tempFile.path) {
						this.tempFiles.splice(i, 1)
					}
				});
			},
			publish() {
				if (this.tempFiles.length == 0 || this.form.title.length == 0 || this.form.title.tag == 0) {
					uni.showToast({
						icon: 'error',
						title: '内容未填写'
					})
					this.overlayShow = false;
					return;
				}
				this.tempFiles.forEach(item => {
					uploadImages({
						filePath: item.path
					})
				})
				publishProduct({
					userId: getApp().globalData.USER_ID,
					title: this.form.title,
					content: JSON.stringify(this.form.content),
					tags: this.form.tag.toString(),
					price: this.form.price,
					imageJson: JSON.stringify(this.tempFiles)
				}).then((res) => {
					let [error, success] = res;
					setTimeout(function() {
						if (success.data == true) {
							uni.showToast({
								title: '发布成功'
							})
							uni.redirectTo({
								url: '/pages/publish/publishSuccess'
							})
						} else {
							uni.showToast({
								icon: 'error',
								title: '发布失败'
							})
							this.overlayShow = false;
						}
					}, 2000);
				})
			},
			submit() {
				uni.showLoading({
					title: "发布中，请稍等"
				});
				this.overlayShow = true;
				this.publish();
			}
		}
	}
</script>

<style>

</style>
