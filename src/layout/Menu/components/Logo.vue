<template>
  <div class="logo flex justify-center items-center">
    <img src="@/assets/images/logo.svg" alt="" />
    <span v-show="!isCollapse">Geeker Admin</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isCollapse: boolean }>()
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>
