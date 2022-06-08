<!--
 * @Author: baihuijun dreamerbai@163.com
 * @Date: 2022-05-11 23:41:46
 * @LastEditors: baihuijun dreamerbai@163.com
 * @LastEditTime: 2022-05-27 17:55:06
 * @FilePath: \template3\vue-admin-template\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
