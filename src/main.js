import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.config.productionTip = false

import Observer from "./observer";
Vue.prototype.Observer = Observer;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
