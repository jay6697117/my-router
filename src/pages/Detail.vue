<template>
  <div class="detailView">
    <div>I am Detail{{ $route.query.id ? '-' + $route.query.id : '' }}</div>
    <div>
      这里是:
      <span style="background-color:yellow;padding:0 4px;">{{ $route.query.id ? '修改' : '新建' }}</span>
      页面
    </div>
    <div>
      name:
      <input v-model="detail.name" />
    </div>
    <div>
      text:
      <input v-model="detail.text" />
    </div>
    <div style="padding-top:10px;display:inline-block;" v-show="$route.query.test">
      test:<span style="background-color:yellow;">{{ $route.query.test ? $route.query.test : '' }}</span>
    </div>
    <div class="detailBtnView">
      <router-link :to="{ name: 'Detail', query: { id: 'C1' } }" tag="span" class="detailBtn">Detail-C1</router-link>
      <router-link :to="{ name: 'Detail', query: { id: 'C2' } }" tag="span" class="detailBtn">Detail-C2</router-link>
      <router-link :to="{ name: 'Detail', query: { id: 'C2', test: 'hahaha' } }" tag="span" class="detailBtn">
        Detail-C2-test
      </router-link>
      <!-- <button @click="$router.push({ name: 'Detail', query: { id: 'C1' } })" class="detailBtn">Detail-C1</button>
      <button @click="$router.push({ name: 'Detail', query: { id: 'C2' } })" class="detailBtn">Detail-C2</button> -->
    </div>
  </div>
</template>

<script>
// 下面是 Vue 组件
export default {
  name: 'Detail',
  data () {
    return {
      detail: {
        name: '',
        text: ''
      }
    };
  },
  watch: {
    $route (to, from) {
      console.log('watch Detail to :>> ', to);
      console.log('watch Detail from :>> ', from);
      // // 对路由变化作出响应，更新参数
      // this.updateDetail();
      if (to.query.id !== from.query.id) {
        // 对路由变化作出响应，更新参数
        this.updateDetail();
      }
    },
    detail (newVal,oldVal){
      console.log('newVal :>> ', newVal);
      console.log('oldVal :>> ', oldVal);
    }
  },
  mounted () {
    console.log('mounted Detail this.$route.query :>> ', this.$route.query);
    this.updateDetail();
  },
  updated () {
    console.log('updated Detail this.$route.query :>> ', this.$route.query);
  },
  methods: {
    updateDetail () {
      console.log('执行了updateDetail方法...');
      const id = this.$route.query.id;
      const test = this.$route.query.test;
      if (id) {
        // 传入 id 则意味着修改，需要获取并录入原先内容
        this.detail = {
          name: `name-${id}`,
          text: `text-${id}`
        };
      } else {
        // 未传入 id 则意味着新建，需要重置原有内容
        this.detail = {
          name: '',
          text: ''
        };
      }
    }
  }
};
</script>

<style scoped>
.detailView {
  background-color: #fff;
  padding: 10px;
}

.detailBtnView {
  background-color: #fff;
  padding: 10px 0;
}

.detailBtn {
  background-color: red;
  margin-right: 20px;
  padding: 2px 5px;
}
</style>
