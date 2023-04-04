import Vue from 'vue'
import App from './App'
import uView from '@/uni_modules/uview-ui'
import store from '@/store'
Vue.prototype.$store = store
Vue.use(uView)

Vue.config.productionTip = false

// 让app的onLaunch先执行，主要是用来进行登录
Vue.prototype.$onLaunched = new Promise(resolve => {
    Vue.prototype.$isResolve = resolve
})


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
