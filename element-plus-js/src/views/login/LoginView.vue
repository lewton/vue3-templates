<script setup>
import { api } from '@/apis'
import { ROUTER_HOME_NAME } from '@/config'
import { useUserStore } from '@/stores'
import { openErrorMessage } from '@/utils'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)

const submit = async () => {
  if (!username.value) {
    return openErrorMessage('手机号必填')
  }
  if (!password.value) {
    return openErrorMessage('密码必填')
  }
  const token = await api.post('/auth/login', {
    username: unref(username),
    password: unref(password)
  })
  if (token) {
    userStore.token = token
    router.replace({ name: ROUTER_HOME_NAME })
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="brand-logo"></div>
      <div class="brand-title">特特科技</div>
      <div class="inputs">
        <label>手机号</label>
        <input v-model="username" type="text" placeholder="请输入手机号" />
        <label>密码</label>
        <input v-model="password" type="password" placeholder="请输入密码" />
        <el-button type="primary" :loading="loading" @click="submit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('./LoginView.scss');
</style>
