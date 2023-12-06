<script setup>
import SkylineLayout from '@/components/layout/SkylineLayout.vue'
const layout = shallowRef(SkylineLayout)
</script>

<template>
  <component :is="layout"></component>
</template>

<style lang="scss" scoped></style>
