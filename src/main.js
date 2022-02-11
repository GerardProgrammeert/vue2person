import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import store from "./store";
// Import Bootstrap an BootstrapVue CSS files (order is important)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

/*import IndexPerson from './views/persons/IndexPerson';
import RegisterPerson from './views/persons/RegisterPerson';
import Login from './views/Login/auth';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/register', component: RegisterPerson },
    { path: '/persons', component: IndexPerson }
  ]
});*/

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});
Vue.use(VueAxios, axios)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')






