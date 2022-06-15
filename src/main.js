import Vue from 'vue'
import App from './App.vue'
import router from '@/router'//index文件默认为第一文件
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')