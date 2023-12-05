<script setup>
import logo from '@/assets/images/vue.svg'
import SlSubMenu from './skyline/SlSubMenu.vue'
import IconEpApple from '~icons/ep/apple'
import SlSearch from './skyline/SlSearch.vue'
import { CreditCard, Bell } from '@element-plus/icons-vue'
import SlAvatar from './skyline/SlAvatar.vue'
import avatar from '@/assets/images/avatar.jpg'
import SlTabs from './skyline/SlTabs.vue'

// defineProps({
//   collapse: Boolean
//   // items: Array
// })
const isCollapse = ref(false)
const items = [
  // 主页
  {
    name: 'AdminHome',
    title: '主页',
    icon: IconEpApple,
    children: []
  },
  // 权限管理
  {
    name: 'PermissionManage',
    title: '权限管理',
    icon: IconEpApple,
    children: [
      {
        name: 'UserList',
        title: '用户列表',
        icon: IconEpApple,
        children: []
      },
      {
        name: 'RoleList',
        title: '角色列表',
        icon: IconEpApple,
        children: []
      },
      {
        name: 'PermissionList',
        title: '权限列表',
        icon: IconEpApple,
        children: []
      }
    ]
  }
]
const defaultActive = 'AdminHome'
const menuSelect = (name) => {
  console.log(name)
  //   const menu = flatten<MenuItem>(treeData.value).find((item) => item.name === name)
  //   // const route = router.getRoutes().find((route) => route.name === index)
  //   if (menu) {
  //     const tabs = menuStore.tabs
  //     if (!tabs.find((tab) => tab.name === name)) {
  //       menuStore.addTab({
  //         title: menu.title,
  //         icon: menu.icon,
  //         name,
  //         closable: true
  //       })
  //     }
  //     tabChange(name)
  //   }
}
const tabs = [
  {
    title: '主页',
    icon: IconEpApple,
    name: 'AdminHome',
    closable: false
  }
]
const tabValue = 'AdminHome'
const tabChange = (name) => {
  console.log(name)
  // menuStore.setTabValue(name)
  // menuStore.setDefaultActive(name)
  // // 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
  // // 就算 treeData 没有任何更改，也可以使用  triggerRef 触发更新
  // triggerRef(treeData)
  // // treeData.value = JSON.parse(JSON.stringify(treeData.value))
  // router.push({ name })
}

const tanRemove = (name) => {
  console.log(name)
  // console.log(name)
  // const tabs = menuStore.tabs
  // let activeName = menuStore.tabValue
  // if (activeName === name) {
  //   tabs.forEach((tab, index) => {
  //     if (tab.name === name) {
  //       const nextTab = tabs[index + 1] || tabs[index - 1]
  //       if (nextTab) {
  //         activeName = nextTab.name
  //       }
  //     }
  //   })
  // }
  // menuStore.setDefaultActive(activeName)
  // menuStore.setTabValue(activeName)
  // menuStore.removeTab(name)
}
</script>
<template>
  <el-container class="container">
    <el-aside width="auto">
      <div class="logo">
        <el-image class="logo-img" :src="logo" fit="contain" />
        <span class="logo-text">Skyline</span>
      </div>
      <el-scrollbar>
        <el-menu
          :defaultActive="defaultActive"
          :collapse="isCollapse"
          :unique-opened="true"
          :collapse-transition="true"
          @select="menuSelect"
        >
          <SlSubMenu :items="items" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6">
            <el-icon class="icon-collapse" @click="isCollapse = !isCollapse">
              <i-ep-expand v-if="isCollapse" />
              <i-ep-fold v-else /> </el-icon
          ></el-col>
          <el-col class="head-right" :span="18">
            <SlSearch class="search-input mr-30" placeholder="Please input" :width="[240, 280]" />
            <el-icon class="mr-30"><CreditCard /></el-icon>
            <el-badge class="mr-50" :value="200" :max="99">
              <el-icon><Bell /></el-icon>
            </el-badge>
            <SlAvatar :avatar="avatar" />
          </el-col>
        </el-row>
        <SlTabs :tabs="tabs" v-model="tabValue" @tab-change="tabChange" @tab-remove="tanRemove" />
      </el-header>
      <el-main>
        <!-- <div class="main-container"> -->
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </RouterView>
        <!-- </div> -->
      </el-main>
      <el-footer>
        <el-text> 1999-2023 &copy; Vue3 Skyline Admin By </el-text>
        <el-link href="https://space.bilibili.com/402814364" target="_blank">
          &nbsp; B站-编程段子
        </el-link>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  min-width: 600px;
}
.el-aside {
  overflow: hidden;
}

.el-menu {
  // width: 200px;
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.el-scrollbar :deep(.el-scrollbar__wrap) {
  border-right: solid 1px var(--el-menu-border-color);
}
.logo {
  position: relative;
  height: 60px;
  display: flex;
  // justify-content: center;
  align-items: center;
  background-color: $main-color;
}
.logo-img {
  width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding));
  margin-left: calc(var(--el-menu-base-level-padding) / 2);
  margin-right: calc(var(--el-menu-base-level-padding) / 2);
}
.logo-text {
  position: absolute;
  left: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  user-select: none;
  color: white;
}
.el-icon {
  font-size: 24px;
  color: $main-color;
}
.icon-collapse {
  width: 38px;
  height: 38px;
  border-radius: 2px;
  box-shadow: 0 0 15px #e5e9ec;
  border-bottom: 1px solid #eeeeee;
}
.icon-collapse:hover {
  cursor: pointer;
  background: $main-color;
  border-bottom-color: #af772b;
  color: white;
}
.el-header {
  padding: 0;
  height: 100px;
}

.el-header > .el-row {
  align-items: center;
  height: 60px;
  padding: var(--el-header-padding);
  border-bottom: 1px solid #e0e3e8;
}

.head-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
@media (max-width: 992px) {
  .search-input {
    display: none;
  }
}

.el-main {
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: var(--el-bg-color-page);
  // .main-container {
  //   width: 100%;
  //   // height: 1000px;
  //   height: 100%;
  //   overflow-x: hidden;
  //   // background-color: var(--el-bg-color);
  //   // border: 1px solid var(--el-border-color-light);
  //   // border-radius: 6px;
  // }
}

.el-footer {
  @include flex-center;
  height: 30px;
  box-sizing: border-box;
  border-top: solid 1px var(--el-menu-border-color);
}
</style>
