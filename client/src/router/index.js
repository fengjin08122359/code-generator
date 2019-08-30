import Vue from 'vue'
import Router from 'vue-router'

const Route = () => import('../pages/route/Route.vue')
const Project = () => import('../pages/project/Project.vue')
const Basic = () => import('../pages/basic/Basic.vue')
const Arrange = () => import('../pages/arrange/Arrange.vue')

Vue.use(Router);

var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Project',
      component: Project
    },
    {
      path: '/Route/:pk',
      name: 'Route',
      component: Route
    },
    {
      path: '/Basic/:id',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/Arrange/:id',
      name: 'Arrange',
      component: Arrange
    }
  ],
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router