import Vue from 'vue'

import 'animate.css'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import App from './App.vue'

import '../../assets/common.css'

import Vuex from 'vuex'
Vue.use(Vuex)
//引入store
import store from './store'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store:store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
