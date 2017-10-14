// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// vuex 
import Vuex from 'vuex'
import store from './store/index';

Vue.config.productionTip = false
//  第一步  ： 在mainjs 里面引入vuex 然后进行全局的注册
// vuex 的入口 就是在store中的indexjs 里面 
Vue.use(ElementUI);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
