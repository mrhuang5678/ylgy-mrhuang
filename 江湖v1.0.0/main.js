import App from './App'
import api from '@/components/api/api.js'
// import './components/api/uni-socket.io.js'
// import socketio from './components/api/uni-socket.io.js';
// Vue.prototype.socket=io('http://163.197.50.110:2468')
// Vue.use(VueSocketio,socketio('http://163.197.50.110:2468'));

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import screenTextScroll from './components/screenTextScroll.vue'

Vue.component('textscroll',screenTextScroll)
App.mpType = 'app'
Vue.prototype.api = api;
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.api = api;
  return {
    app
  }
}
// #endif