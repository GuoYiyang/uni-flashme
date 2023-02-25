<template>
	<view>
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
		<view class="container">
			<uni-section title="编辑信息" type="line">
				<view class="example-body">
					<!-- 基础用法，不包含校验规则 -->
					<uni-forms ref="baseForm" :model="userInfo" :rules="rules">
						<uni-forms-item label="头像" required name="avatar">
							<u-avatar :src="userInfo.avatar" shape="square">
							</u-avatar>
						</uni-forms-item>
						<uni-forms-item label="姓名" required name="name">
							<uni-easyinput v-model="userInfo.name" />
						</uni-forms-item>
						<uni-forms-item label="城市" required name="city">
							<uni-data-picker  popup-title="请选择城市" :localdata="cityList"
								v-model="userInfo.city" @change="cityChange">
							</uni-data-picker>
							<!-- <uni-data-select v-model="userInfo.city" :localdata="cityList"></uni-data-select> -->
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
				</view>
			</uni-section>
		</view>

		<u-button @click="submit">提交</u-button>


	</view>
</template>

<script>
	import {
		updateUserInfo,
		getUserInfo
	} from '@/api/user.js';
	export default {
		data() {
			return {
				cityList: [{
						text: "深圳",
						value: "0"
					},
					{
						text: "北京",
						value: "1"
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
				userId: '',
				showSex: false,
				userInfo: {
					id: '',
					name: '',
					avatar: '',
					desc: '',
					phone: '',
					sex: '',
					city: '0'
				},
				sexs: [{
					text: '男',
					value: 1
				}, {
					text: '女',
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
			cityChange(item) {
				this.userInfo.city = item.detail.value[0].value;
			},
			sexSelect(e) {
				this.userInfo.sex = e.name
			},
			changeAvatar(info) {
				this.userInfo.avatar = info.detail.avatarUrl;
			},
			submit() {
				this.$refs.baseForm.validate().then(res => {
					console.log(this.userInfo);
					updateUserInfo(this.userInfo).then((res) => {
						console.log(res);
						if (res[1].data == true) {
							uni.showToast({
								title: "修改成功"
							})
							setTimeout(() => {
								uni.navigateBack()
							}, 500)
						} else {
							uni.showToast({
								title: "修改失败，请检查必填项"
							})
						}
					});

				}).catch(err => {
					uni.showToast({
						title: "请检查参数"
					})
				})
			}
		},
		onShow() {
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
				_this.userInfo.desc = success.data.desc;
				_this.userInfo.phone = success.data.phone;
				console.log(_this.userInfo);
			})
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.baseForm.setRules(this.rules)
		},
	}
</script>

<style>
	.example-body {
		padding: 10px;
		padding-top: 0;
	}
</style>
