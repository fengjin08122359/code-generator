import Vue from 'vue'
import Router from 'vue-router'

const Router1567158287622 = () => import('../pages/router1567158287622/Router1567158287622.vue');
const Ppap = () => import('../pages/ppap/Ppap.vue');
var routes = [{path: '/',name: 'home',component: Router1567158287622},{path: '/page',name: 'page',component: Ppap},];



Vue.use(Router);

var router =  new Router({
  routes: routes
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router