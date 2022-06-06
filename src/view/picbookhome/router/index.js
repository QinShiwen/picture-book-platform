import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomePart from '../components/home/HomePart.vue'
import SearchPart from '../components/search/SearchPart.vue'
import RecommendPart from '../components/recommend/RecommendPart.vue'

//创建并暴露路由
const router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {
            path:'/home',
            name:'home',
            component:HomePart
        },
        {
            name:'search',
            path:'/search',
            component:SearchPart
        },
        {
            name:'recommend',
            path:'/recommend',
            component:RecommendPart
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})
export default router

