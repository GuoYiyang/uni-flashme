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
				<view>
					<!-- 基础用法，不包含校验规则 -->
					<uni-forms ref="baseForm" :modelValue="userInfo">
						<uni-forms-item label="头像" required>
							<u-button open-type="chooseAvatar" @chooseavatar="changeAvatar">
								<u-avatar :src="userInfo.avatar" shape="square">
								</u-avatar>
							</u-button>
						</uni-forms-item>
						<uni-forms-item label="姓名" required>
							<uni-easyinput v-model="userInfo.name" placeholder="" />
						</uni-forms-item>
						<uni-forms-item label="城市" required>
							<uni-easyinput v-model="userInfo.city" placeholder="" />
						</uni-forms-item>
						<uni-forms-item label="手机" required>
							<uni-easyinput v-model="userInfo.phone" placeholder="" />
						</uni-forms-item>
						<uni-forms-item label="性别" required>
							<uni-data-checkbox v-model="userInfo.sex" :localdata="sexs" />
						</uni-forms-item>
						<uni-forms-item label="个人描述">
							<uni-easyinput type="textarea" v-model="userInfo.desc" placeholder="请输入自我介绍" />
						</uni-forms-item>
					</uni-forms>
				</view>
			</uni-section>
		</view>
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
				userId: '',
				showSex: false,

				userInfo: {
					name: '',
					avatar: '',
					desc: '',
					phone: '',
					sex: '',
					city: '',
				},

				actions: [{
						name: '男',
					},
					{
						name: '女',
					},
					{
						name: '保密',
					},
				],
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
				}
			};
		},
		methods: {
			sexSelect(e) {
				this.userInfo.sex = e.name
			},
			changeAvatar(info) {
				this.userInfo.avatar = info.detail.avatarUrl;
				updateUserInfo({
					userId: this.userId,
					avatar: this.userInfo.avatar
				})
			}
		},
		onLoad() {
			this.userId = getApp().globalData.USER_ID;
			let _this = this;
			getUserInfo({
				userId: this.userId
			}).then((res) => {
				let [error, success] = res;
				console.log(success);
				_this.userInfo.name = success.data.nickname;
				_this.userInfo.city = success.data.city;
				_this.userInfo.gender = success.data.gender;
				_this.userInfo.avatar = success.data.avatar;
				_this.userInfo.desc = success.data.desc;
				_this.userInfo.phone = success.data.phone;
			})
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.form.setRules(this.rules)
		},
	}
</script>

<style>

</style>
