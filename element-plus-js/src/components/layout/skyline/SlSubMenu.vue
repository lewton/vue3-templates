<script setup>
import SlSubMenuTitle from './SlSubMenuTitle.vue'
defineProps({
  items: Array
})
</script>

<template>
  <template v-for="{ name, icon, title, children } in items" :key="name">
    <el-sub-menu v-if="children.length" :index="name">
      <template #title>
        <SlSubMenuTitle :icon="icon" :title="title" />
      </template>
      <SlSubMenu :items="children" />
    </el-sub-menu>
    <el-menu-item v-else :index="name">
      <SlSubMenuTitle :icon="icon" :title="title" />
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss"></style>
