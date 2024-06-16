

<template>
  <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
  >
    <template #action>
      <div @click="searchBtn">搜索</div>
    </template>
  </van-search>
</template>
<script setup>
import {ref} from "vue";

const searchValue=ref("");
function searchBtn(){
  console.log(searchValue.value);
}
</script>
<style scoped>

</style>