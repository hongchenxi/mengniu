import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './mock/mockServer'


Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
  router,
  store
}).$mount('#app')
