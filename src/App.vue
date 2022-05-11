<script setup lang="ts">
import { GlobalStore } from "@/store"
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"
// 配置element中英文
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import en from "element-plus/lib/locale/lang/en"

const globalStore = GlobalStore()
// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false
})

// element 语言配置
const i18nLocale = computed((): any => {
  if (globalStore.language && globalStore.language == "zh") return zhCn
  if (globalStore.language == "en") return en
  return ""
})

const theme = computed((): string => globalStore.theme)
watch(
  () => theme.value,
  theme => {
    const htmlDom = document.getElementsByTagName("html")
    toggleTheme({
      scopeName: theme
    })
    if (theme === "theme-dark") {
      htmlDom[0].classList.add("dark")
    } else {
      htmlDom[0].classList.remove("dark")
    }
  },
  { immediate: true }
)
</script>

<template>
  <el-config-provider :locale="i18nLocale" :button="config">
    <router-view></router-view>
  </el-config-provider>
</template>

<style></style>
