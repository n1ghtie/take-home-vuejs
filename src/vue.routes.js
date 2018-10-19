import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/home/home.vue'
import AboutComponent from './components/about/about.vue'
import NotFoundComponent from './components/not-found/not-found.vue'

/* 
 *** TODO routes:
 **  Auth: logout, allUsers, userVehicleDetails
 **  Other: login, 404
*/

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
    },
    {
      path: '*',
      name: '404',
      component: NotFoundComponent
    }
  ]
})