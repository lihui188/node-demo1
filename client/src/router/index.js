import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import NoExist from '../views/404.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login',
  },{
    path:'/index',
    name:'index',
    component:Index,
    children:[
      {
        path:'',
        component:()=>import('../components/Home.vue')
      },
      {
        path:'/home',
        name:'home',
        component:()=>import('../components/Home.vue')
      }
    ]
  },{
    path:'/register',
    name:'register',
    component:Register
  },{
    path:'/login',
    name:'login',
    component:Login
  },{
    path:'/infoshow',
    name:'login',
    component:()=>import('../views/InfoShow.vue')
  }
  ,{
    path:'*',
    name:'noexist',
    component:NoExist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = JSON.parse(localStorage.getItem('eletoken')) ? true : false;
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    isLogin?next():next('/login');
  }
})
export default router
