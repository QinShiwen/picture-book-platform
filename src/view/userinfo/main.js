import Vue from 'vue'
import 'animate.css';

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import vuescroll from "vuescroll";//引入vuescroll
import "vuescroll/dist/vuescroll.css";//引入vuescroll样式
Vue.use(vuescroll);//使用

import App from './App.vue'

import '../../assets/common.css'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
