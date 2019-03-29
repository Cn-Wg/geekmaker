import Vue from 'vue'
import Router from 'vue-router'
import Goods from './views/goods/'
import Home from './views/home/'
import Message from './views/message/'
import Mine from './views/mine/'
import Shopcar from './views/shopcar/'
import Login from './common/login/'
Vue.use(Router)

const router = new Router({
    routes : [
        {
            path:'/',
            redirect:"/home",
        },
        {
            path:"/home",
            component:Home,
            meta:{
                title:"首页",
                requireAuth:true
            }
        },
        {
            path:'/goods',
            component:Goods,
            meta:{
                title:"商品",
                requireAuth:true
            }
        },
        {
            path:'/shopcar',
            component:Shopcar,
            meta:{
                title:"购物车",
                requireAuth:true
            }
        },
        {
            path:'/message',
            component:Message,
            meta:{
                title:"信息",
                requireAuth:false,
            }
            
        },
        {
            path:'/mine',
            component:Mine,
            meta:{
                title:"我的",
                requireAuth:false,
            }
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
//登录验证   我的    消息
// router.beforeEach((to,from,next) => {
//     if(to.meta.requireAuth){
//         next();
//     }else{
//         next("/login")
//     }
// })



export default router;