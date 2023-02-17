<script>
	import {
		login
	} from '@/api/user.js';
	export default {
		globalData: {
			userId: '',
			userName: '',
			avatar: ''
		},
		methods: {
			loginUser() {
				let _this = this;
				console.log('login'),
					uni.login({
						provider: 'weixin',
						onlyAuthorize: true,
						success: (res) => {
							login(res.code).then((res) => {
								let [err, data] = res;
								console.log(res)
								_this.globalData.userId = data.data.data.id;
								_this.globalData.userName = data.data.data.nickname;
								_this.globalData.avatar = data.data.data.avatar;
							})
						}
					});
			}
		},
		onLaunch: function() {
			console.log('App Launch');
			this.loginUser();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		async onLoad() {
			await this.$onLaunched;
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
