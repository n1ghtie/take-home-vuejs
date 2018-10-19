import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/home/home.vue'
import AboutComponent from './components/about/about.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    }
  ]
})