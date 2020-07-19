<template>
  <div>
    <div class="login-msg">{{ loginMsg }}</div>
    <div class="loginLink">
      <router-link :to="{ name: 'Home' }" tag="button" class="homeBtn">Home</router-link>
      <button @click="loginToggle" class="loginBtn">{{ isLogin ? '已经登陆' : '未登陆' }}</button>
    </div>
    <div class="router-info">
      this.$route:
      <span class="span">{{ $route.name }}</span>

    </div>
    <div class="router-info">
      this.$router:
      <span class="span">{{ $router.mode }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      loginMsg: 'this is loginMsg'
    };
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    loginToggle() {
      this.$store.state.isLogin = !this.$store.state.isLogin;
      if (this.isLogin) {
        this.$router.replace({ name: 'Home' });
      }
    }
  },
  mounted() {
    console.log('Login this.$route :>> ', this.$route);
    console.log('Login this.$router :>> ', this.$router);
  }
};
</script>

<style scoped>
.loginLink {
  padding-top: 10px;
}
.homeBtn {
  background-color: darkcyan;
  padding: 4px 5px;
  color: #fff;
}

.loginBtn {
  background-color: darkcyan;
  margin-left: 20px;
  padding: 2px 5px;
  color: #fff;
}

.login-msg {
  padding: 5px 0;
  font-size: 22px;
  background-color: #ccc;
}

.span {
  background-color: darkcyan;
  padding: 2px 8px;
  color: #fff;
}

.router-info {
  padding-top: 10px;
}
</style>
