import Vue from 'vue'
import App from './App.vue'
import ServerListGroup from './ServerListGroup.vue'
import HeaderServerStatus from './HeaderServerStatus.vue'
import ServerDetails from './ServerDetails.vue'
import ServerManager from './FooterServerManager.vue'


Vue.component('app-server-list-group', ServerListGroup);
Vue.component('app-server-status', HeaderServerStatus);
Vue.component('app-server-details', ServerDetails);
Vue.component('app-server-manager', ServerManager);

new Vue({
  el: '#app',
  render: h => h(App)
})
