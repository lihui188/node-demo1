import Vue from 'vue'
// 导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from './router'
import store from './store'
import axios from './http'

import './assets/css/common.css'
import './assets/css/common-ui.css'
import './assets/css/icon.css'
import './assets/css/main.css'
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
