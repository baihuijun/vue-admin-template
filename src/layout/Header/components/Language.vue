<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <el-tooltip :effect="globalStore.effect" :content="$t('header.language')" placement="bottom">
      <!-- <i :class="'iconfont icon-zhongyingwen'" class="icon-style"></i> -->
      <el-icon :size="22" class="icon-style">
        <i-ic-outline-g-translate></i-ic-outline-g-translate>
      </el-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue"
import { useI18n } from "vue-i18n"
import { GlobalStore } from "@/store"
import { getBrowserLang } from "@/utils"
const i18n = useI18n()
const globalStore = GlobalStore()

const language = computed((): string => globalStore.language)

const handleSetLanguage = (lang: string) => {
  i18n.locale.value = lang
  globalStore.updateLanguage(lang)
}

onMounted(() => {
  handleSetLanguage(language.value || getBrowserLang())
})
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
