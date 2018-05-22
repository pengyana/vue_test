import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexList from '@/page/index-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexList',
      component:IndexList
    }
  ]
})
