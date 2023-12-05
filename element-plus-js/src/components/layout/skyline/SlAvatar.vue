<script setup>
import { ROUTER_LOGIN_NAME } from '@/config'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

defineProps({
  avatar: {
    type: String,
    required: true
  }
})

const userStore = useUserStore()
const router = useRouter()

const avatarDropdown = ref(null)
const logout = () => {
  userStore.$reset()
  router.replace({ name: ROUTER_LOGIN_NAME })
}
</script>

<template>
  <el-badge is-dot @click="avatarDropdown?.handleOpen()">
    <el-avatar :src="avatar" />
  </el-badge>
  <el-dropdown ref="avatarDropdown" trigger="click" class="ml-10">
    <el-link type="primary">Julie Sweet</el-link>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
