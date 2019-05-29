// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages(路由组件)/MSite(首页组件)/MSite.vue'
import Search from '../pages(路由组件)/Search(搜索组件)/Search.vue'
import Order from '../pages(路由组件)/Order(订单组件)/Order.vue'
import Profile from '../pages(路由组件)/Profile(个人组件)/Profile.vue'
import Login from '../pages(路由组件)/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes: [
        { path: '', redirect: '/msite' },
        { path: '/msite', component: MSite, meta: { showFooter: true } },
        { path: '/search', component: Search, meta: { showFooter: true } },
        { path: '/order', component: Order, meta: { showFooter: true } },
        { path: '/profile', component: Profile, meta: { showFooter: true } },
        { path: '/login', component: Login }
    ]
})