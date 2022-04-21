import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' //32 강

export const bus = new Vue();

// Use vue-resource package 32강
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
