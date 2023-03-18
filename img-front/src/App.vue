<script setup lang="ts">
import Title from './components/Title.vue'
import Value from './components/Value.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Title msg="点击下方按钮" />
    </div>
  </header>

  <main>
    <Value />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    margin-left: 8vw;
  }
}
</style>
