import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/homepage.css'
import '../src/assets/css/iconfont.css'
import '../src/assets/js/swiper'
import '../src/assets/css/swiper.css'
// import '../src/assets/css/judicial.css'

Vue.use(VueRouter)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
