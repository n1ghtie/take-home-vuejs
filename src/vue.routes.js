import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import HomeComponent from './components/home/home.vue'
import AboutComponent from './components/about/about.vue'
import NotFoundComponent from './components/not-found/not-found.vue'

/* 
 *** TODO routes:
 **  Auth: logout, allUsers, userVehicleDetails, getApiToken
 **  Other: login
*/

Vue.use(VueRouter);
Vue.use(Meta);

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