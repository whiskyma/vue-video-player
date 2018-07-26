import Vue from 'vue'
import App from './App'
import router from './router'

import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
