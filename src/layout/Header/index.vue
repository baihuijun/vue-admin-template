<template>
  <div class="header">
    <div class="header-lf flex justify-center items-center">
      <CollapseIcon></CollapseIcon>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="header-ri flex justify-center items-center">
      <Language></Language>
      <Theme></Theme>
      <Fullscreen></Fullscreen>
      <span class="username">Geeker</span>
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Fullscreen from './components/Fullscreen.vue'
import Language from './components/Language.vue'
// import AssemblySize from "./components/AssemblySize.vue";
import Theme from './components/Theme.vue'
import Avatar from './components/Avatar.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
