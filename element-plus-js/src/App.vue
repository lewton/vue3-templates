<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const zIndex = 3000
const size = 'small'
const locale = zhCn
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style></style>
