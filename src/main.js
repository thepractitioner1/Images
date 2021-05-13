import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';

Vue.config.productionTip = false
Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler},
    {path: '/upload', component: UploadForm},
    {path: '/', component: ImageList}
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
