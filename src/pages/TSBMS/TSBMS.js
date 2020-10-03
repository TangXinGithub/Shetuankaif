import Vue from 'vue'
import Meta from 'vue-meta'
import TSBMS from './TSBMS.vue'
import router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Meta)

const app = new Vue({
  ...TSBMS,
  router
})

app.$mount('#app')
