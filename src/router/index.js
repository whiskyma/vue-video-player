import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyPlayer from '@/components/myPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPlayer',
      component: MyPlayer
    }
  ]
})
