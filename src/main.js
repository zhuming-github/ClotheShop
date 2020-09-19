import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

//给$bus一个Vue实例一边让其他的组件可以使用事件总线
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
