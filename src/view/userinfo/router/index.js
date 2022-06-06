import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import BookShelf from '../components/bookshelf/BookShelf'
import Setting from '../components/settting/Setting'
import CollectPart from '../components/collect/CollectPart.vue'
//创建并暴露路由
const router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {
            path:'/bookshelf',
            component:BookShelf
        },
        {
            path:'/collect',
            component:CollectPart
        },
        {
            path:'/setting',
            component:Setting
        }
    ]
})
export default router