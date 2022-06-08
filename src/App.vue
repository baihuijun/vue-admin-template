<script setup lang="ts">
import { GlobalStore } from "@/store"
// 配置element中英文
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import en from "element-plus/lib/locale/lang/en"

const globalStore = GlobalStore()

// element 语言配置
const i18nLocale = computed((): any => {
  if (globalStore.language && globalStore.language == "zh") return zhCn
  if (globalStore.language == "en") return en
  return ""
})
</script>

<template>
  <el-config-provider :locale="i18nLocale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style></style>
