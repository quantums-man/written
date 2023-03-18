<template>
  <div :v-loading="true">
    <el-empty description="暂时没有内容" v-if="!img.length"/>
    <div class="imgBox">
      <!-- 按照返回数据进行渲染，同时绑定order样式来决定图片的位置 -->
      <el-image v-for="i in img" :key="i.id" :style="{display: 'flex', width: 350+'px', height: 250+'px', order: i.id}" :src="i.img" fit="contain"></el-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useDownloadStore } from '../store/download'
const img = reactive<any[]>([])

// api接口函数
const downloadFn = (id: number) => {
  fetch(`http://localhost:3000/img/${id}`)
  .then(response => response.json())
  .then(data => {
    img.push(data)
  });
}

// 监听数据改变
const store = useDownloadStore()
store.$subscribe((mutations) => {
  const events = mutations.events
  if(events.key === 'count' && events.newValue === 5) {
    for(let i = 1; i <= events.newValue; i++){
      downloadFn(i)
    }
  }
}, { detached: false})
</script>

<style scoped>
  .imgBox {
    display: flex;
    flex-direction: column;
  }
</style>