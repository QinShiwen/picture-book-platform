
import Vue from 'vue'
import Vuex from 'vuex'
import slideHandler from './slideHandler'
import slidePlay from './slidePlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        slideHandler,slidePlay
    }
})
