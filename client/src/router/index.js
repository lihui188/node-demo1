import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Noexist from '../views/404.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/index',
  },{
    path:'/index',
    name:'index',
    component:Index
  },{
    path:'/register',
    name:'register',
    component:Register
  }
  ,{
    path:'*',
    name:'noexist',
    component:Noexist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
