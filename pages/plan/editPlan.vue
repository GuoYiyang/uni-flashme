<template>
	<view>
		<view style="padding: 22px 26px 22px 26px; border-radius: 10px; background-color: #FFFFFF;">
			<u--form labelPosition="top" :rules="rules" ref="Form" :model="plan"
				:labelStyle="{'font-weight':300,'font-size':'14px','line-height':'16px','color':'#808080'}">
				<u-form-item labelWidth="100px" label="方案名称" prop="name" borderBottom>
					<u--input v-model="plan.name" border="none" showWordLimit></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="价格" prop="price" borderBottom>
					<u--input v-model="plan.price" border="none" showWordLimit type="number" maxlength=10></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄人数" prop="peopleNum">
					<uni-segmented-control :current="plan.peopleNum" :values="['单人','双人','多人']" active-color="#3D6EC2"
						@clickItem="selectPeopleNum">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄张数" prop="photoCnt">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.photoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="精修张数" prop="jingxiuPhotoCnt">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.jingxiuPhotoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="底片赠送张数" prop="zengsongPhotoCnt">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.zengsongPhotoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄场景" prop="scene">
					<uni-segmented-control :current="plan.scene" :values="['室内','室外','室内+室外']" active-color="#3D6EC2"
						@clickItem="selectScene">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄场景数" prop="sceneNum">
					<uni-segmented-control :current="plan.sceneNum" :values="['一个','两个','三个', '四个及以上']"
						active-color="#3D6EC2" @clickItem="selectSceneNum">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="是否提供服装" prop="isDress">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-switch v-model="plan.isDress" activeColor="#3D6EC2"></u-switch>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="是否提供化妆" prop="isMakeup">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-switch v-model="plan.isMakeup" activeColor="#3D6EC2"></u-switch>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="设备型号" prop="equipment" borderBottom>
					<u--input v-model="plan.equipment" border="none" showWordLimit></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="其他说明" prop="other" borderBottom>
					<u--input v-model="plan.other" border="none" showWordLimit></u--input>
				</u-form-item>
			</u--form>
		</view>


		<view style="padding:16px 26px 50px 26px">
			<u-button @click="submit" color="#3D6EC2"
				customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
				保存
			</u-button>
		</view>
	</view>
</template>

<script>
	import {
		getUserPlanDetail,
		updateUserPlan
	} from '@/api/user.js'
	export default {
		data() {
			return {
				planId: '',
				plan: {
					price: '',
					name: '',
					peopleNum: 0,
					photoCnt: 0,
					jingxiuPhotoCnt: 0,
					zengsongPhotoCnt: 0,
					scene: 0,
					sceneNum: 0,
					isDress: false,
					isMakeup: false,
					equipment: '',
					other: ''
				},
				rules: {
					'name': {
						type: 'string',
						required: true,
						min: 2,
						max: 10,
						message: '长度为2-10个字符',
						trigger: ['blur', 'change']
					},
					'price': {
						type: 'number',
						required: true,
						min: 1,
						max: 10,
						message: '长度为1-10个字符',
						trigger: ['blur', 'change']
					},
					'equipment': {
						type: 'string',
						required: true,
						min: 2,
						max: 10,
						message: '长度为2-10个字符',
						trigger: ['blur', 'change']
					},
					'other': {
						type: 'string',
						required: false,
						min: 2,
						max: 10,
						message: '长度为2-10个字符',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		methods: {
			selectPeopleNum(index) {
				this.plan.peopleNum = index.currentIndex;
			},
			selectScene(index) {
				this.plan.scene = index.currentIndex;
			},
			selectSceneNum(index) {
				this.plan.sceneNum = index.currentIndex;
			},
			submit() {
				this.$refs.Form.validate().then(res => {
					updateUserPlan({
						planId: this.planId,
						content: JSON.stringify(this.plan)
					}).then(res => {
						let [error, success] = res;
						if (success.data) {
							uni.showToast({
								icon: 'success',
								title: '修改成功'
							})

						} else {
							uni.showToast({
								icon: 'fail',
								title: '修改失败'
							})
						}
						setTimeout(function() {
							uni.navigateBack()
						}, 500)
					})
				}).catch(errors => {
					uni.showToast({
						icon: 'error',
						title: "请检查所填内容是否正确"
					})
				})

			}
		},
		onLoad(param) {
			this.planId = param.planId;
			let _this = this;
			getUserPlanDetail({
				planId: this.planId
			}).then(res => {
				let [error, success] = res;
				console.log(success);
				_this.plan = JSON.parse(success.data.content)
			})
			this.$refs.Form.setRules(this.rules)
		}
	}
</script>

<style>

</style>
