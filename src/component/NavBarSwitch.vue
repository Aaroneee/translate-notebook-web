<script setup>
import {onMounted, ref} from "vue"
const emit = defineEmits(['onClickRight'])
import router from "@/router/index.js";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  leftBack:{
    required: false,
    type: Boolean,
    default:true
  },
  isIcon: {
    required: true,
    type: Boolean,
  },
  rightText: {
    required: true,
    type: String,
  }
})

const title = ref(props.title);
const rightText = ref(props.rightText);
function onClickLeft(){
  console.log(1)
  router.back()
}
const onClickRight=()=>  emit("onClickRight");
onMounted(() => {
  window.onClickLeft = onClickLeft
})
</script>
<template>
  <van-nav-bar :title="title" :left-arrow="props.leftBack" @click-left="onClickLeft" @click-right="onClickRight">
    <template #right>
      <p>{{ rightText }}</p>
    </template>
  </van-nav-bar>
</template>

<style scoped>

</style>