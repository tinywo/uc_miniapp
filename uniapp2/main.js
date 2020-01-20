import Vue from 'vue'
import App from './App'

import home from './pages/home/index.vue'
Vue.component('home',home)

import monitor from './pages/monitor/index.vue'
Vue.component('monitor',monitor)

import census from './pages/census/index.vue'
Vue.component('census',census)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



