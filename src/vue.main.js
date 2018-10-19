import Vue from 'vue'
import routes from './vue.routes'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
