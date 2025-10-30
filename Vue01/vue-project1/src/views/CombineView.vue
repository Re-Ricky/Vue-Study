<script setup>
import {onMounted, ref} from "vue";

const msg = ref("Hello, 组合式API!");
const count = ref(0);

function increment() {
  count.value++;
}

</script>

<template>
  <h1> {{ msg }} </h1>
  <input type="button" value="点击+1" @click="increment"> {{ count }}
</template>

<style scoped>

</style>