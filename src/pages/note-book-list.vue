<template>
  <van-sticky>
    <NavBarSwitch title="翻译本" :left-back="false" right-text="添加" :is-icon="false" @on-click-right="toNoteBookAdd"/>
  </van-sticky>
  <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
  >
    <template #left>
      <SvgIcon style="margin-right: 1%" :icon-name="iconName" size="25px" color="#000000"
               @click="translationTypeClick"/>
    </template>
    <template #action>
      <div style="display: inline" @click="searchNoteBookList()">搜索</div>
    </template>
  </van-search>
  <p style="font-size: 18px;font-weight: bolder;margin: 3% 0 3% 3%">单词本</p>
  <div class="card" style="" v-for="(item, index) in noteBookDataList">
    <p>原文：{{ item.sourceText }}</p>
    <p>译文：{{ item.targetText }}</p>
    <p>日期：{{ UtilDate.dateToYMDString(new Date(item.createTime)) }}</p>
  </div>
  <p v-if="baiduResultDataList" style="font-size: 18px;font-weight: bolder;margin: 3% 0 3% 3%">百度翻译</p>
  <div class="card" style="" v-for="(item, index) in baiduResultDataList?.transResult">
    <p>{{ item.src }}</p>
    <p>{{ item.dst }}</p>
  </div>

</template>
<script setup>
import {ref} from "vue";
import UtilAxios from "@/assets/js/util-axios.js";
import UtilDate from "../assets/js/util-date.js";
import SvgIcon from "@/component/SvgIcon.vue";
import NavBarSwitch from "@/component/NavBarSwitch.vue";
import {showNotify} from "vant";
import router from "@/router/index.js";

const iconName = ref("icon-zhongyiying");
const translationType = ref(0);
const searchValue = ref("");
const noteBookDataList = ref([]);
const baiduResultDataList = ref([]);
searchNoteBookList();

function searchNoteBookList() {
  UtilAxios.get("/noteBook/queryList", {
    type: translationType.value,
    text: searchValue.value
  }).then(res => {
    if (res.data.data.noteBookDataList) {
      noteBookDataList.value = res.data.data.noteBookDataList.reverse();
    }
    baiduResultDataList.value = res.data.data.baiduResultDataList
  })
}

function translationTypeClick() {
  if (translationType.value === 0) {
    iconName.value = "icon-yingyizhong1";
    translationType.value = 1;
    showNotify({
      message: '已切为英译中',
      color: '#ad0000',
      background: '#DCDFE6',
      duration: 800,
    });
  } else {
    iconName.value = "icon-zhongyiying";
    translationType.value = 0;
    showNotify({
      message: '已切为中译英',
      color: '#ad0000',
      background: '#DCDFE6',
      duration: 800,
    });
  }
}
function toNoteBookAdd(){
  router.push("/noteBookAdd")
}
</script>
<style scoped>
.card {
  display: inline-flex;
  flex-direction: column;
  background: white;
  margin: 3% 3% 0 3%;
  padding: 2%;
  //height: 70px;
  width: 40%;
  border-radius: 10px;
}

.card > p {
  word-break: break-all;
  padding: 3px 0;
}
</style>