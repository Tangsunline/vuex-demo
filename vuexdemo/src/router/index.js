import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login/index'],resolve)
    },
    {
      path : '/content/index',
      name : 'content',
      component : resolve => require(['../components/content/index'],resolve)
    }
  ]
})
