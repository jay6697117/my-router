import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
console.log('router :>> ', router);
console.log('store :>> ', store);

Vue.config.productionTip = false;

// 这里我们注册一个前置守卫
router.beforeEach((to, from, next) => {
  console.log('to :>> ', to);
  // 非 login 页面，检查是否登录
  if (to.name !== 'Login') {
    // 这里简单前端模拟是否填写了用户名，真实环境需要走后台登录，缓存到本地
    if (!store.state.isLogin) {
      // 未登录则需要跳转到登录页面
      alert('请先登陆');
      next({ name: 'Login' });
      return false;
    }
  }
  // 其他情况正常执行
  next();
});

new Vue({
  // 传入路由能力
  router,
  store,
  render: h => h(App)
}).$mount('#app');
