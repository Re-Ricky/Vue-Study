<script>
// 选项式 API
export default {
  data() { // 声明响应式对象
    return {
      message: "Hello 声明式API",
      count: 0
    }
  },
  methods: { // 声明方法, 可以通过组件实例访问
    increment() {
      this.count++;
    }
  },

  mounted() { // 声明钩子函数
    console.log('页面加载完成');
  }
}
</script>

<template>
  <h1> {{ message }}</h1>
  <input type="button" value="点我+1" @click="increment"> {{ count }}
</template>

<style scoped>

</style>