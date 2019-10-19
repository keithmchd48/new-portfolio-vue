import Vue from 'vue'
// import App from './Copy.vue'
import App from './App.vue'
import globalMixin from './mixins/globalMixin'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.mixin(globalMixin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
