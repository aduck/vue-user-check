import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

const routes=[
  {
    path:'/',
    component:Home,
    meta:{
      requireAuth:true
    }
  },{
    path:'/login',
    component:Login,
    meta:{
      requireAuth:false
    }
  }
]

const router=new Router({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth && !localStorage.getItem('userInfo')){
    return next({
      path:'/login',
      query:{
        redirect:to.fullPath
      }
    })
  }
  next()
})

export default router