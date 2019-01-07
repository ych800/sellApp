// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'lib-flexible/flexible';
import App from './App';
import router from './router';
import './mock/index';
import service from './utils/service';

import './common/stylus/index.styl';

Vue.prototype.$axios = service;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
