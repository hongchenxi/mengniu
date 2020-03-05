import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/Home/Home.vue')
const Story = () => import('../pages/Story/Story.vue')
const Activity = () => import('../pages/Activity/Activity.vue')
const Mine = () => import('../pages/Mine/Mine.vue')

import Nearshop from '../pages/Nearshop/Nearshop.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/story',
      component: Story,
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/activity',
      component: Activity,
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/nearshop',
      component: Nearshop
    }
  ]
})