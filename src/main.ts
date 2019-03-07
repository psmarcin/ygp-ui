import Clipboard from 'v-clipboard';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Clipboard);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
