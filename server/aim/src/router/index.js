import Vue from 'vue'
import Router from 'vue-router'

const Router1567150993378 = () => import('../pages/router1567150993378/Router1567150993378.vue');
var routes = [{path: '/',name: 'home',component: Router1567150993378},];



Vue.use(Router);

var router =  new Router({
  routes: routes
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router