
import Vue from 'vue'
import Vuex from 'vuex'
import slideHandler from './slideHandler'
//import slidePlay from '../../picbookshow/store/slidePlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        slideHandler
    }
})
