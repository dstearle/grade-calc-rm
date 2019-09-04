import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Vuelidate from 'vuelidate';
import store from './store/store.js';

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({

  store,

  render: h => h(App),
  
}).$mount('#app')
