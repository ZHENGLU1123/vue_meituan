import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Comm from '@/components/Comm'
import Desc from '@/components/Desc'
import Food from '@/components/food'
import xiang from '@/components/xiang'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      redirect:'list/hot'
    },
    {
      path: '/list',
      component: List,
      children:[{
        path:':id',
        component:Food,
        children:[{
          path:'/list/:id/food/xiang',
          component:xiang
        }]
      }],
      redirect(to){
        return to.path+"/hot";
      }
    },{
      path: '/xiang',
      component: xiang
    },
    {
      path: '/comm',
      component: Comm
    },
    {
      path: '/desc',
      component: Desc
    }
  ]
})
