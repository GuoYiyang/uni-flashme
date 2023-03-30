<template>
	<view>
		<view style="padding: 22px 26px 22px 26px; border-radius: 10px; background-color: #FFFFFF;">
			<u--form labelPosition="top" :rules="rules" ref="Form" :model="userInfo"
				:labelStyle="{'font-weight':300,'font-size':'14px','line-height':'16px','color':'#808080'}">
				<u-form-item labelWidth="100px" label="方案名称" prop="name" borderBottom>
					<u--input v-model="plan.name" border="none" showWordLimit></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄人数" prop="name">
					<uni-segmented-control :current="plan.peopleNum" :values="['单人','双人','多人']" active-color="#3D6EC2"
						@clickItem="selectPeopleNum">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄张数" prop="name">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.photoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="精修张数" prop="name">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.jingxiuPhotoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="底片赠送张数" prop="name">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-number-box v-model="plan.zengsongPhotoCnt" integer :min="0"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄场景" prop="name">
					<uni-segmented-control :current="plan.scene" :values="['室内','室外','室内+室外']" active-color="#3D6EC2"
						@clickItem="selectScene">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="拍摄场景数" prop="name">
					<uni-segmented-control :current="plan.sceneNum" :values="['一个','两个','三个', '四个及以上']"
						active-color="#3D6EC2" @clickItem="selectSceneNum">
					</uni-segmented-control>
				</u-form-item>
				<u-form-item labelWidth="100px" label="是否提供服装" prop="name">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-switch v-model="plan.isDress" activeColor="#3D6EC2"></u-switch>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="是否提供化妆" prop="name">
					<view style="display: flex;flex-direction: row;justify-content:flex-end">
						<u-switch v-model="plan.isMakeup" activeColor="#3D6EC2"></u-switch>
					</view>
				</u-form-item>
				<u-form-item labelWidth="100px" label="设备型号" prop="name" borderBottom>
					<u--input v-model="plan.equipment" border="none" showWordLimit></u--input>
				</u-form-item>
				<u-form-item labelWidth="100px" label="其他说明" prop="name" borderBottom>
					<u--input v-model="plan.other" border="none" showWordLimit></u--input>
				</u-form-item>
			</u--form>
		</view>


		<view style="padding:16px 26px 50px 26px">
			<u-button @click="submit" color="#3D6EC2"
				customStyle="border-radius:10px;height:42px;font-weight:500;font-size:16px;line-height:16px;color:#FFFFFF;">
				发布
			</u-button>
		</view>


	</view>
</template>

<script>
	import {
		addUserPlan
	} from '@/api/user.js'
	export default {
		data() {
			return {
				plan: {
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
				}

			}
		},
		methods: {
			submit() {
				addUserPlan({
					content: JSON.stringify(this.plan)
				}).then(res => {
					let [error, success] = res;
					if (success.data) {
						uni.showToast({
							icon: success,
							title: '创建成功'
						})
					} else {
						uni.showToast({
							icon: success,
							title: '创建成功'
						})
					}
					uni.navigateBack()
				})
			}
		}
	}
</script>

<style>

</style>
