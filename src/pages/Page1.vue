<template>
  <div>
    <div class="page1View">I am Page1...</div>
    <div class="page1View">{{ page1Msg }}</div>
    <div class="page1View">注入到Page1模板$route.query === {{ $route.query }}</div>
    <div class="page1View">

      <router-link :to="{ name: 'Page1', query: { id: 'A1' } }" tag="button" class="page1Btn">Page1-A1</router-link>
      <router-link :to="{ name: 'Page1', query: { id: 'A2' } }" tag="button" class="page1Btn">Page1-A2</router-link>

      <!-- <button @click="$router.push({ name: 'Page1', query: { id: 'A1' } })" class="page1Btn">Page1-A1</button>
      <button @click="$router.push({ name: 'Page1', query: { id: 'A2' } })" class="page1Btn">Page1-A2</button> -->
    </div>
  </div>
</template>

<script>
// 下面是 Vue 组件
export default {
  name: 'Page1',
  data () {
    return {
      page1Msg: 'this is page1Msg'
    };
  },
  mounted () {
    console.log('this.page1Msg :>> ', this.page1Msg);
    console.log('mounted Page1 this.$route.query :>> ', this.$route.query);
  },
  updated () {
    console.log('this.page1Msg :>> ', this.page1Msg);
    console.log('updated Page1 this.$route.query :>> ', this.$route.query);
  },
  watch: {
    $route (to, from) {
      console.log('watch Page1 to :>> ', to);
      console.log('watch Page1 from :>> ', from);
    }
  }
};
</script>

<style scoped>
.page1View {
  background-color: #fff;
  padding: 10px;
}

.page1Btn {
  background-color: skyblue;
  margin-right: 20px;
  padding: 2px 5px;
}
</style>
