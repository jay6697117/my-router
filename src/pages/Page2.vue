<template>
  <div>
    <div class="page2View">I am Page2...</div>
    <div class="page2View">{{ page2Msg }}</div>
    <div class="page2View">注入到Page2模板$route.query === {{ $route.query }}</div>
    <div class="page2View">

      <router-link :to="{ name: 'Page2', query: { id: 'B1' } }" tag="button" class="page2Btn">Page2-B1</router-link>
      <router-link :to="{ name: 'Page2', query: { id: 'B2' } }" tag="button" class="page2Btn">Page2-B2</router-link>

      <!-- <button @click="$router.push({ name: 'Page2', query: { id: 'B1' } })" class="page2Btn">Page2-B1</button>
      <button @click="$router.push({ name: 'Page2', query: { id: 'B2' } })" class="page2Btn">Page2-B2</button> -->
    </div>
  </div>
</template>

<script>
// 下面是 Vue 组件
export default {
  name: 'Page2',
  data () {
    return {
      page2Msg: 'this is page2Msg'
    };
  },
  mounted () {
    console.log('this.page2Msg :>> ', this.page2Msg);
    console.log('mounted Page2 this.$route.query :>> ', this.$route.query);
  },
  updated () {
    console.log('this.page2Msg :>> ', this.page2Msg);
    console.log('updated Page2 this.$route.query :>> ', this.$route.query);
  },
  watch: {
    $route (to, from) {
      console.log('watch Page2 to :>> ', to);
      console.log('watch Page2 from :>> ', from);
    }
  }
};
</script>

<style scoped>
.page2View {
  background-color: #fff;
  padding: 10px;
}

.page2Btn {
  background-color: lightgreen;
  margin-right: 20px;
  padding: 2px 5px;
}
</style>
