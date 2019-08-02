import Vue from 'vue'
import App from './App'
import store from '@/common/store'
import GolbalMethod from'@/common/utils/index.js'
import { appid } from '@/common/utils/config'
import help from '@/common/utils/help'
import {styleDetail,classObj} from '@/common/utils/config'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$LinkTo = GolbalMethod.LinkTo
Vue.prototype.appid = appid
Vue.prototype.HELP = help
Vue.prototype.styleDetail = styleDetail
Vue.prototype.classObj = classObj

const app = new Vue({
    ...App
})

app.$mount()
