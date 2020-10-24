import Vue from 'vue'
import App from './App.vue'
import router from './router'
import articleFilter from '@/filters/articles.filter'
import paperFilter from '@/filters/paper.filter'

import './registerServiceWorker'


Vue.config.productionTip = false

Vue.filter('art',articleFilter)
Vue.filter('paper', paperFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
