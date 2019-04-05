
import Vue from 'vue'
import VueRouter from 'vue-router'
import jdAution from '../../pages/jdAution'
import jdJudicial from '../../pages/jdJudicial'
import jdCustoms from'../../pages/jdCustoms'
import  jdProperty from"../../pages/jdProperty"
import jdMine from"../../pages/jdMine"
import kaichang from"../components/jdAution/kaichang"
import yugao from"../components/jdAution/yugao"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: jdAution,
      children:[
        {path:'/o',component:kaichang},
        {path:"/p",component:yugao}
      ]
    },
    {
      path: '/.',
      component: jdJudicial,
    },
    {
      path: '/e',
      component: jdCustoms,
    },
    {
      path: '/c',
      component: jdProperty,
    },
    {
      path: '/a',
      component: jdMine,
    },
  ]
})
