<script setup>
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  width: {
    type: Array,
    default: () => [240, 280]
  }
})

const [min, max] = props.width
const inputWidth = ref(min)
</script>

<template>
  <el-input
    @focus="inputWidth = max"
    @blur="inputWidth = min"
    :style="{ width: `${inputWidth}px` }"
  >
    <template #append>
      <el-button :icon="Search" />
    </template>
  </el-input>
</template>

<style scoped lang="scss">
.el-input {
  transition: width 0.3s ease;
}
</style>
