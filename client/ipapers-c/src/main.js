import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
//QS是axios库中带的，不需要我们再npm安装一个
import Qs from 'qs';
import routes from './router/router'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(VueRouter);

// 定义路由组件
var router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
