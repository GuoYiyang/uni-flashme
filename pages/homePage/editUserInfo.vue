<template>
	<view>
		<view style="margin-bottom: 12px; padding: 16px 26px 16px 26px; border-radius: 10px; background-color: #FFFFFF">
			<u-row>
				<u-col span="10">
					<view style="font-weight: 300;font-size: 14px;line-height: 16px;color: #808080;">头像</view>
				</u-col>
				<u-col span="2">
					<u-avatar :src="avatar" @click="chooseAvatar" size="60px" mode="aspectFill"></u-avatar>
				</u-col>
			</u-row>
		</view>

		<u--form labelPosition="top" :rules="rules" ref="Form" :model="userInfo"
			:labelStyle="{'font-weight':300,'font-size':'14px','line-height':'16px','color':'#808080'}">
			<view style="padding: 6px 26px 6px 26px; border-radius: 10px; background-color: #FFFFFF;">
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
			<view style="margin-bottom: 12px;"></view>
			<view v-if="isPher" style="padding: 6px 26px 6px 26px; border-radius: 10px; background-color: #FFFFFF;">
				<u-form-item labelWidth="100px" label="微信号" prop="wxid" borderBottom>
					<u--input v-model="userInfo.wxid" border="none"></u--input>
				</u-form-item>
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
					<u--textarea cursorSpacing="20px" :showConfirmBar="false" height="150" v-model="userInfo.intro"
						count maxlength=200 border="bottom"></u--textarea>
				</u-form-item>
			</view>
			<u-picker :show="showSex" :columns="sexList" @confirm="sexSelect" keyName="name" @cancel="showSex = false">
			</u-picker>
			<u-picker :show="showCity" :columns="cityList" @confirm="citySelect" keyName="name"
				@cancel="showCity = false"></u-picker>
		</u--form>

		<view v-if="isPher"
			style="padding: 12px 26px 0 26px; font-weight: 300;font-size: 14px;line-height: 16px;color: #808080">
			*个人资料将展示在你的摄影师主页</view>

		<view style="padding:40px 36px 40px 36px">
			<u-button @click="submit" color="#3D6EC2"
				customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
				保存
			</u-button>
		</view>


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
					wxid: '',
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
				isAdmin: false,
				isUser: false,
				isPher: false,
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
						min: 2,
						max: 10,
						message: '姓名长度为2-10个字符',
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
					'wxid': {
						type: 'string',
						required: false,
						min: 6,
						max: 20,
						message: '微信号长度为6-15个字符',
						trigger: ['blur', 'change']
					},
					'xiaohongshu': {
						type: 'string',
						required: false,
						min: 6,
						max: 15,
						message: '小红书号长度为6-15个字符',
						trigger: ['blur', 'change']
					},
					'douyin': {
						type: 'string',
						required: false,
						min: 6,
						max: 9,
						message: '抖音号长度为6-9个字符',
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
					this.userInfo.desc = JSON.stringify({
						"wxid": this.userInfo.wxid,
						"xiaohongshu": this.userInfo.xiaohongshu,
						"douyin": this.userInfo.douyin,
						"whatsup": this.userInfo.whatsup,
						"intro": this.userInfo.intro,
					})
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

					uni.reLaunch({
						url: '/pages/homePage/homePage'
					})
				}).catch(errors => {
					uni.showToast({
						icon: 'error',
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
				// .replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")
				_this.userInfo.phone = success.data.phone;
				if (success.data.gender == 1) {
					_this.userInfo.sexText = "男"
				} else if (success.data.gender == 2) {
					_this.userInfo.sexText = "女"
				}
				_this.userInfo.cityText = changeCity(success.data.city);

				if (success.data.desc != null) {
					_this.userInfo.desc = success.data.desc;
					let userDesc = JSON.parse(success.data.desc);
					_this.userInfo.wxid = userDesc.wxid;
					_this.userInfo.xiaohongshu = userDesc.xiaohongshu;
					_this.userInfo.douyin = userDesc.douyin;
					_this.userInfo.whatsup = userDesc.whatsup;
					_this.userInfo.intro = userDesc.intro;
				}
				if (success.data.role == 0) {
					_this.isAdmin = true;
					_this.isPher = true;
					_this.isUser = true;
				} else if (success.data.role == 1) {
					_this.isUser = true;
				} else if (success.data.role == 2) {
					_this.isUser = true;
					_this.isPher = true;
				}

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
