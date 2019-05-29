// 入口 js
import Vue from 'vue'
import App from './App.vue'
import router from './router(路由器)'

new Vue({
    el: '#app',
    render: h => h(App),
    router
})