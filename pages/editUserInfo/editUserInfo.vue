<template>
	<view>
		<view>
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u-avatar :src="avatar" shape="square" @click="chooseAvatar"></u-avatar>
			<u--form labelPosition="top" :rules="rules" ref="baseForm">
				<u-form-item label="名字" prop="userInfo.name" borderBottom>
					<u--input v-model="userInfo.name" border="none"></u--input>
				</u-form-item>
				<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true;">
					<u--input v-model="userInfo.sexText" placeholder="请选择性别" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="城市" prop="userInfo.city" borderBottom @click="showCity = true;">
					<u--input v-model="userInfo.cityText" placeholder="请选择城市" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="手机" prop="userInfo.phone" borderBottom>
					<u--input v-model="userInfo.phone" border="none"></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="自我介绍" prop="userInfo.phone" borderBottom>
					<u--input v-model="userInfo.desc" border="none"></u--input>
				</u-form-item>
			</u--form>
			<u-action-sheet :show="showSex" :actions="sexList" title="请选择性别" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>
			<u-action-sheet :show="showCity" :actions="cityList" title="请选择城市" @close="showCity = false"
				@select="citySelect">
			</u-action-sheet>
		</view>

		<u-button @click="submit">保存</u-button>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<!-- <u--form labelPosition="left" :model="model" :rules="rules" ref="form">
			<u-form-item label="头像" prop="userInfo.avatar" borderBottom>
				<button open-type="chooseAvatar" @chooseavatar="changeAvatar">
					<u-avatar :src="model.userInfo.avatar" shape="square">
					</u-avatar>
				</button>
			</u-form-item>
			<u-form-item label="姓名" prop="userInfo.name" borderBottom>
				<u--input v-model="model.userInfo.name" border="none"></u--input>
			</u-form-item>
			<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()">
				<u--input v-model="model.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="手机" prop="userInfo.phone" borderBottom>
				<u--input v-model="model.userInfo.phome" border="none"></u--input>
			</u-form-item>
			<u-form-item label="城市" prop="userInfo.city" borderBottom>
				<u--input v-model="model.userInfo.city" border="none"></u--input>
			</u-form-item>
			<u-form-item label="个人描述" prop="userInfo.desc" borderBottom>
				<u--input v-model="model.userInfo.desc" border="none"></u--input>
			</u-form-item>
		</u--form>
		
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
			@close="showSex = false" @select="sexSelect">
		</u-action-sheet>
		
		<u-button @click="submit" text="完成"></u-button> -->
		<!-- 		<view>
			<uni-forms ref="baseForm" :model="userInfo" :rules="rules">
				<uni-forms-item label="头像" required name="avatar">
					<u-avatar :src="avatar" shape="square" @click="chooseAvatar">
					</u-avatar>
				</uni-forms-item>
				<uni-forms-item label="姓名" required name="name">
					<uni-easyinput v-model="userInfo.name" />
				</uni-forms-item>
				<uni-forms-item label="城市" required name="city">
					<uni-data-picker popup-title="请选择城市" :localdata="cityList" v-model="userInfo.city"
						@change="cityChange">
					</uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="手机" name="phone">
					<uni-easyinput v-model="userInfo.phone" />
				</uni-forms-item>
				<uni-forms-item label="性别" required name="sex">
					<uni-data-checkbox v-model="userInfo.sex" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="介绍">
					<uni-easyinput type="textarea" v-model="userInfo.desc" />
				</uni-forms-item>
			</uni-forms>
		</view> -->




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
				selectedAvatarPath: '',
				cityList: [{
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
				],
				userId: '',
				showSex: false,
				showCity: false,
				avatar: '',
				userInfo: {
					id: '',
					name: '',
					avatar: '',
					desc: '',
					phone: '',
					sex: '',
					sexText: '请选择性别',
					city: '',
					cityText: '请选择城市'
				},
				sexList: [{
					name: '男',
					value: 1
				}, {
					name: '女',
					value: 2
				}],
				rules: {
					name: {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					city: {
						type: 'string',
						required: true,
						message: '请选择城市',
						trigger: ['blur', 'change']
					},
					sex: {
						type: 'number',
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
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
						_this.userInfo.avatar = _this.selectedAvatarPath;
						_this.avatar = _this.selectedAvatarPath;
					}
				})
			},
			cityChange(item) {
				this.userInfo.city = item.detail.value[0].value;
			},
			sexSelect(e) {
				this.userInfo.sex = e.value
				this.userInfo.sexText = e.name
			},
			citySelect(e) {
				this.userInfo.city = e.value
				this.userInfo.cityText = e.name
			},
			changeAvatar(info) {
				this.userInfo.avatar = info.detail.avatarUrl;
			},
			submit() {
				if (this.selectedAvatarPath != "") {
					uploadImages({
						filePath: this.selectedAvatarPath
					}).then((res) => {
						let [error, success] = res;
						this.userInfo.avatar = success.data
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
				}
				setTimeout(() => {
					uni.navigateBack()
				}, 500)
			}
		},
		onShow() {},
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
			this.$refs.baseForm.setRules(this.rules)
		},
	}
</script>

<style>

</style>
