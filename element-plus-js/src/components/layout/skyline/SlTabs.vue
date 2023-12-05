<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <el-tabs type="card">
    <el-tab-pane v-for="item in tabs" :key="item.name" :name="item.name" :closable="item.closable">
      <template #label>
        <el-icon v-if="item.icon"> <component :is="item.icon" /> </el-icon>
        <span class="ml-10">{{ item.title }}</span>
      </template>
      <!-- {{ item.content }} -->
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.el-tabs {
  user-select: none;
  :deep(.el-tabs__nav-wrap) {
    padding: 0 20px;
  }
  // :deep(.el-tabs__nav-wrap::after) {
  //   height: 1px;
  // }
  :deep(.el-tabs__header) {
    margin-bottom: 0;
    box-sizing: border-box;
  }
}

.el-tabs--card {
  & > :deep(.el-tabs__header) {
    .el-tabs__item.is-active {
      border-bottom-color: var(--el-color-primary);
    }
    .el-tabs__item {
      border-left: none;
      border-bottom-width: 2px;
    }
    .el-tabs__nav {
      border: none;
    }
  }
}
</style>
