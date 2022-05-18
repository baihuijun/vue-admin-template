<template>
  <el-container>
    <el-aside><Menu></Menu></el-aside>
    <el-container>
      <el-header>
        <Header></Header>
        <Tabs></Tabs>
      </el-header>
      <el-main>
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="tabStore.curCacheRoute">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Menu from "./Menu/index.vue"
import Header from "./Header/index.vue"
import Tabs from "./Tabs/index.vue"
import { TabsStore } from "@/store/modules/tabs"
import { AuthButtonsStore } from "@/store/modules/authButtons"
import { getAuthorButtons } from "@/api/userApi"
const tabStore = TabsStore()

const authButtonsStore = AuthButtonsStore()

onMounted(async () => {
  // 获取按钮权限列表
  const res = await getAuthorButtons()
  authButtonsStore.setAuthButtons(res.data)
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
