import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PicBookEdit from '../view/picbookedit/components/PicBookEdit'
import PicBookShow from '../view/picbookedit/picbookshow/PicBookShow'

export default  router = new VueRouter({
    routes:[
        {
            path:'/picbookedit',
            component:PicBookEdit
        },
        {
            path:'/picbookplay',
            component:PicBookShow
        }
    ]
})