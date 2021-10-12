import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'
import './registerServiceWorker'

Vue.config.productionTip = false

let app

app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


