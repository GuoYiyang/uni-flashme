<template>
	<view>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">三步即可轻松发布产品</text>
			</uni-card>
			<uni-section title="第一步:选择图片" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>
			<uni-section title="第二步:填充信息" type="line">
				<view class="example-body">
					<!-- 基础用法，不包含校验规则 -->
					<uni-forms ref="baseForm" :modelValue="baseFormData">
						<uni-forms-item label="姓名" required>
							<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
						</uni-forms-item>
						<uni-forms-item label="年龄" required>
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<uni-forms-item label="性别" required>
							<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
						</uni-forms-item>
						<uni-forms-item label="兴趣爱好" required>
							<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
						</uni-forms-item>
						<uni-forms-item label="自我介绍">
							<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
						</uni-forms-item>
						<uni-forms-item label="日期时间">
							<uni-datetime-picker type="datetime" return-type="timestamp"
								v-model="baseFormData.datetimesingle" />
						</uni-forms-item>
					</uni-forms>
				</view>
			</uni-section>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
