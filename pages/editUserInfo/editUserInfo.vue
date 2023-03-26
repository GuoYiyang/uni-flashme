<template>
	<view>
		<u--form labelPosition="top" :rules="rules" ref="Form" :model="userInfo">
			<view style="padding: 10px; border-radius: 10px; background-color: #FFFFFF;">
				<u-avatar :src="avatar" shape="square" @click="chooseAvatar"></u-avatar>
				<u-form-item label="名字" prop="name" borderBottom>
					<u--input v-model="userInfo.name" border="none" showWordLimit></u--input>
				</u-form-item>
				<u-form-item label="性别" prop="sex" borderBottom @click="showSex = true;">
					<u--input readonly v-model="userInfo.sexText" placeholder="请选择性别" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="城市" prop="city" borderBottom @click="showCity = true;">
					<u--input readonly v-model="userInfo.cityText" placeholder="请选择城市" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item labelWidth="100px" label="手机号" prop="phone" borderBottom>
					<u--input type="number" v-model="userInfo.phone" border="none"></u--input>
				</u-form-item>
			</view>
			<view style="margin-top: 12px; padding: 10px; border-radius: 10px; background-color: #FFFFFF;">
				<u-form-item labelWidth="100px" label="小红书号" prop="xiaohongshu" borderBottom>
					<u--input v-model="userInfo.xiaohongshu" border="none"></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="抖音号" prop="douyin" borderBottom>
					<u--input v-model="userInfo.douyin" border="none"></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="个性签名" prop="whatsup" borderBottom>
					<u--input v-model="userInfo.whatsup" border="none" showWordLimit>
					</u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="个人简介" prop="intro">
					<u--textarea v-model="userInfo.intro" count autoHeight maxlength=200></u--textarea>
				</u-form-item>
			</view>
			<u-picker :show="showSex" :columns="sexList" @confirm="sexSelect" keyName="name" @cancel="showSex = false">
			</u-picker>
			<u-picker :show="showCity" :columns="cityList" @confirm="citySelect" keyName="name"
				@cancel="showCity = false"></u-picker>
		</u--form>

		<u-button @click="submit">保存</u-button>

	</view>
</template>

<script>
	import {
		updateUserInfo,
		getUserInfo
	} from '@/api/user.js';
	import {
		uploadImages,
	} from '@/api/product.js'
	import {
		changeCity
	} from '@/common/method.js'
	export default {
		data() {
			return {
				userId: '',
				avatar: '',
				selectedAvatarPath: '',
				userInfo: {
					id: '',
					name: '',
					avatar: '',
					xiaohongshu: '',
					douyin: '',
					whatsup: '',
					intro: '',
					desc: {},
					phone: '',
					sex: '',
					sexText: '请选择性别',
					city: '',
					cityText: '请选择城市'
				},
				showSex: false,
				showCity: false,
				cityList: [
					[{
							name: "深圳",
							value: 0
						},
						{
							name: "北京",
							value: 1
						},
						{
							value: 2,
							name: "上海"
						},
						{
							value: 3,
							name: "广州"
						},
					]
				],
				sexList: [
					[{
						name: '男',
						value: 1
					}, {
						name: '女',
						value: 2
					}]
				],
				rules: {
					'name': {
						type: 'string',
						required: true,
						min: 4,
						max: 10,
						message: '请填写姓名,长度为4-10个字符',
						trigger: ['blur', 'change']
					},
					'phone': {
						required: false,
						// 自定义验证函数
						validator: (rule, value, callback) => {
							// 返回true表示校验通过，返回false表示不通过
							// 过滤第一层，先判断输入为不为空，因为required: false，不是必填项，所以为空应该返回true
							if (value) {
								return this.$u.test.mobile(value);
							} else {
								return true
							}
						},
						message: '手机号格式不正确',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					},
					'xiaohongshu': {
						type: 'string',
						required: false,
						min: 6,
						max: 15,
						message: '小红书号长度为4-15个字符',
						trigger: ['blur', 'change']
					},
					'douyin': {
						type: 'string',
						required: false,
						min: 6,
						max: 15,
						message: '抖音号长度为4-10个字符',
						trigger: ['blur', 'change']
					},
					'whatsup': {
						type: 'string',
						required: false,
						max: 20,
						message: '个性签名最长20个字符',
						trigger: ['blur', 'change']
					},
					'intro': {
						type: 'string',
						required: false,
						max: 200,
						message: '个性简介最长200个字符',
						trigger: ['blur', 'change']
					}

				}
			};
		},
		methods: {
			chooseAvatar() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						_this.selectedAvatarPath = res.tempFilePaths[0];
						_this.avatar = _this.selectedAvatarPath;
					}
				})
			},
			sexSelect(e) {
				this.userInfo.sex = e.value[0].value
				this.userInfo.sexText = e.value[0].name
				this.showSex = false;
			},
			citySelect(e) {
				this.userInfo.city = e.value[0].value
				this.userInfo.cityText = e.value[0].name
				this.showCity = false;
			},
			submit() {
				this.$refs.Form.validate().then(res => {
					if (this.selectedAvatarPath != '') {
						uploadImages({
							filePath: this.selectedAvatarPath
						}).then((res) => {
							let [error, success] = res;
							this.userInfo.avatar = success.data;
							updateUserInfo(this.userInfo).then((res) => {
								if (res[1].data == true) {
									uni.showToast({
										title: "修改成功"
									})
								} else {
									uni.showToast({
										title: "修改失败，请检查必填项"
									})
								}
							});
						})
					} else {
						// 将avatar设置为null，防止被修改
						this.userInfo.avatar = null;
						updateUserInfo(this.userInfo).then((res) => {
							if (res[1].data == true) {
								uni.showToast({
									title: "修改成功"
								})
							} else {
								uni.showToast({
									title: "修改失败，请检查必填项"
								})
							}
						});
					}
					setTimeout(() => {
						uni.navigateBack()
					}, 500)
				}).catch(errors => {
					uni.showToast({
						title: "请检查所填内容是否正确"
					})
				})
			}
		},
		onLoad() {
			this.userInfo.id = getApp().globalData.USER_ID;
			let _this = this;
			getUserInfo({
				userId: getApp().globalData.USER_ID
			}).then((res) => {
				let [error, success] = res;
				_this.userInfo.name = success.data.nickname;
				_this.userInfo.city = success.data.city;
				_this.userInfo.sex = success.data.gender;
				_this.userInfo.avatar = success.data.avatar;
				_this.avatar = success.data.avatar;
				_this.userInfo.desc = success.data.desc;
				_this.userInfo.phone = success.data.phone;
				if (success.data.gender == 1) {
					_this.userInfo.sexText = "男"
				} else if (success.data.gender == 2) {
					_this.userInfo.sexText = "女"
				}
				_this.userInfo.cityText = changeCity(success.data.city);
			})
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.Form.setRules(this.rules)
		},
	}
</script>

<style>

</style>
