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
    compact: '768px',
    'mobile': '360px'
  }
})

Vue.config.productionTip = false

Vue.directive('sticky', function (el, binding) {
  let element = el
  let active = false
  let stickyTop = -80
  const sticky = () => {
    if (active) {
      return
    }

    element.classList.add('sticky')
    active = true
  }

  const reset = () => {
    if (!active) {
      return
    }
    element.classList.remove('sticky')
    active = false
  }

  const check = () => {
    let offsetTop = el.getBoundingClientRect().top
    if (offsetTop <= stickyTop) {
      sticky()
      return
    }
    reset()
  }

  const listenAction = () => {
    if (!window.requestAnimationFrame) {
      return setTimeout(check, 16)
    }

    window.requestAnimationFrame(check)
  }

  window.addEventListener('scroll', listenAction)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
