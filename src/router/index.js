// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter); // 使用 vue-router

// 配置路由信息
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'page1',
        name: 'Page1',
        component: () => import(/* webpackChunkName: "home-page1" */ '../pages/Page1.vue')
      },
      {
        path: 'page2',
        name: 'Page2',
        component: () => import(/* webpackChunkName: "home-page2" */ '../pages/Page2.vue')
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "home-detail" */ '../pages/Detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
  },
  // 通配符 * 会匹配所有路径
  // 路由 { path: '*' } 通常用于客户端 404 错误
  // 含有通配符的路由应该放在最后
  { path: '*', redirect: { name: 'Home' } }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

export default router;
