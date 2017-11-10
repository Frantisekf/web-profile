// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFractionGrid from 'vue-fraction-grid'
Vue.use(VueFractionGrid, {
  container: '80%',
  gutter: '26px',
  approach: 'desktop-first',
  breakpoints: {
    compact: '768px'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
