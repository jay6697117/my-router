<template>
  <div id="pageHome">
    <div class="homeLink">
      <router-link :to="{ name: 'Home' }" tag="button" class="homeBtn">Home</router-link>
    </div>
    <div class="pageLink">
      <router-link :to="{ name: 'Page1' }" tag="button" class="page1Btn">Page1</router-link>
      <router-link :to="{ name: 'Page2' }" tag="button" class="page2Btn">Page2</router-link>
      <router-link :to="{ name: 'Detail' }" tag="button" class="detailBtn">Detail</router-link>
      <router-link :to="{ name: 'Login' }" tag="button" class="loginBtn">Login</router-link>
    </div>
    <!-- 子路由界面 -->
    <!-- 如果路由为 /home，此处是 空注释 -->
    <!-- 如果路由为 /home/page1，此处是 Page1 组件 -->
    <!-- 如果路由为 /home/page2，此处是 Page2 组件 -->
    <!-- 如果路由为 /home/detail，此处是 Detail 组件 -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  mounted() {
    console.log('Home mounted this.$router :>> ', this.$router);
    console.log('Home mounted this.$route :>> ', this.$route);
    console.log('Home mounted this :>> ', this);
  }
};
</script>

<style scoped>
#pageHome {
  background-color: #eee;
  padding: 10px;
}
.homeLink {
  padding-bottom: 10px;
}
.pageLink {
  padding-bottom: 10px;
}
.homeBtn {
  background-color: darkcyan;
  margin-right: 20px;
  padding: 2px 5px;
  color: #fff;
}
.page1Btn {
  background-color: skyblue;
  margin-right: 20px;
  padding: 2px 5px;
}
.page2Btn {
  background-color: lightgreen;
  margin-right: 20px;
  padding: 2px 5px;
}
.detailBtn {
  background-color: red;
  margin-right: 20px;
  padding: 2px 5px;
}
.loginBtn {
  background-color: blue;
  margin-right: 20px;
  padding: 2px 5px;
}
</style>
