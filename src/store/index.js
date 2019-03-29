import Vue from 'vue'
import Vuex from 'vuex'
import goods from "./shopcar";
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    goods
  }
})
