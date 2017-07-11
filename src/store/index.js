import Vue from 'vue'
import Vuex from 'vuex'
import check from './modules/check'

Vue.use(Vuex)
const store=new Vuex.Store({
  modules:{
    check
  }
})

export default store