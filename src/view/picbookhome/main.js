
import Vue from 'vue'
import 'animate.css';

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import router from './router'

import '../../assets/common.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render:h =>h(App),
    router:router,
    beforeCreated(){
        Vue.prototype.$bus = this
    }
}).$mount("#app")