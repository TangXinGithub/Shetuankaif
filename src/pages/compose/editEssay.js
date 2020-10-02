import Vue from 'vue'
import Meta from 'vue-meta'
import App from './editEssay.vue'
// import Button from 'ant-design-vue/lib/button'
// import { Select, Button, Form } from 'ant-design-vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.use(Meta)

const app = new Vue({
  ...App
})

app.$mount('#app')
