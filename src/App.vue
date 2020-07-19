<template>
  <!-- 使用 <router-view></router-view> 来渲染最高级路由匹配到的组件 -->
  <div>
    <div id="componentAppTitle">这是一个vue router练习</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
#componentAppTitle {
  background-color: green;
  padding: 4px 10px;
}
</style>
