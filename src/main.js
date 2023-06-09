import Vue from 'vue';
import App from './App.vue'
import "./config/firebase";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
