<template>
  <el-icon v-if="icon"> <component :is="icon" /> </el-icon>
  <span class="text-ellipsis">{{ title }}</span>
</template>

<script setup>
defineProps({
  icon: Object,
  title: String
})
</script>

<style scoped lang="scss"></style>
