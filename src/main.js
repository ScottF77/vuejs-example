import Vue from 'vue';
import App from './App';
import Navigation from '../src/components/navigation/navigation.vue';
import List from '../src/components/list/list.vue';
import Message from '../src/components/message/message.vue';
import Button from '../src/components/button/button.vue';

import router from './router';
import store from './store/store';

// Import base css file
import '../src/css/base.css';

Vue.config.productionTip = false;

Vue.component('app-navigation', Navigation);
Vue.component('app-list', List);
Vue.component('app-message', Message);
Vue.component('app-button', Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
