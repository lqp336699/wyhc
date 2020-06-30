import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { Lazyload } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import './public.css'
import './assets/iconfont/iconfont.css'

Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
