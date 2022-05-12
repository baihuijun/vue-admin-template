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
              <keep-alive :include="cacheRouter">
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
import cacheRouter from "@/routers/cacheRouter"
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
