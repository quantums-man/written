<script setup lang="ts">
import { ref } from 'vue';
import { ElButton } from 'element-plus'
import { Download } from '@element-plus/icons-vue'
import { useDownloadStore } from '../store/download'
defineProps<{
  msg: string
}>()

// 点击事件
const store = useDownloadStore()
let disabled = ref<boolean>(false)
const getDownload = () => {
  store.count = 5
  disabled.value = true
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <el-button class="button" type="success" :icon="Download" :disabled="disabled" @click="getDownload">开始下载</el-button>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1{
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1{
    text-align: left;
  }
}
</style>
