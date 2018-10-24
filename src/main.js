import Vue from 'vue';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router';
import store from './store/index';
import axios from "axios";
import * as block from "./components/blockchain/blockchain"
import "./layout.css";


Vue.use(Antd);

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$block = block;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
