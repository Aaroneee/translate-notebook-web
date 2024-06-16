

<template>
  <van-sticky>
    <NavBarSwitch title="添加翻译" left-back :is-icon="false" right-text=""/>
  </van-sticky>
  <van-form style="margin-top: 5%" @submit="addNoteBook">
    <van-cell-group inset>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
          label="原文"
          v-model="form.sourceText"
          placeholder="原文"
          :rules="[{required: true, message: '请输入原文' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
          label="译文"
          v-model="form.targetText"
          placeholder="译文"
          :rules="[{ required: true,message: '请输入译文' }]"
      />
      <van-field
          v-model="form.translationTypeText"
          is-link
          readonly
          name="picker"
          label="选择器"
          placeholder="点击选择城市"
          @click="translationTypeShow = true"
      />
      <van-popup v-model:show="translationTypeShow" position="bottom">
        <van-picker
            :columns="translationTypeList"
            @confirm="translationTypeConfirm"
            @cancel="translationTypeShow = false"
        />
      </van-popup>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" >
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup>

import NavBarSwitch from "@/component/NavBarSwitch.vue";
import {ref} from "vue";
import UtilAxios from "@/assets/js/util-axios.js";
import {showSuccessToast} from "vant";
import router from "@/router/index.js";
import {showFailToast} from "vant/es";

const form=ref({
  sourceText:"",
  targetText:"",
  translationTypeText:"中译英",
  translationType:0,
})
function addNoteBook(){
  UtilAxios.put("/noteBook/addNoteBook",form.value).then(res=>{
    if (res.data.code===200){
      showSuccessToast('添加成功');
      setTimeout(()=>{
        router.back();
      },1000)
    }else{
      showFailToast('添加失败');
    }
  })
}

const translationTypeShow=ref(false);
function translationTypeConfirm(val){
  form.value.translationTypeText=val.selectedOptions[0].text;
  form.value.translationType=val.selectedOptions[0].value;
  translationTypeShow.value=false
}
const translationTypeList=[
  { text: '中译英', value: 0 },
  { text: '英译中', value: 1 },
]
</script>
<style scoped>

</style>