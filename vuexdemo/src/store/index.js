//  
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

// 所有咋混改的初始化值都写在这里
const state = {
    login : {
        name:'tangqi',
        password:'123'
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

