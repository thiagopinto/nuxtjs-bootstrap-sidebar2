import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHome, faTint, faUsers, 
         faPhone, faChild, faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from './_demo/router'
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faBars);
library.add(faTimesCircle);
library.add(faUserSecret)
library.add(faHome)
library.add(faTint)
library.add(faUsers)
library.add(faPhone)
library.add(faChild)
library.add(faBars)
library.add(faTimesCircle)
library.add(faGraduationCap)

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')