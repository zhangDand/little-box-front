import Vue from 'vue'
Vue.use(vueResource)
import vueResource from 'vue-resource'
import reset from './css/reset.css'
// import App from './App.vue'
// import list from './app/list.vue'
import box from './app/toolbox.vue'
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
// new Vue({
//   el:'#m-list',
//   render: h => h(list)
// })
new Vue({
  el: '#box',
  render: h => h(box)
})
