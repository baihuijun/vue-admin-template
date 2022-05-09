<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="../../../assets/avatars.jpg" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="openDialog('infoRef')">{{ $t("header.personalData") }}</el-dropdown-item>
        <el-dropdown-item @click="openDialog('passwordRef')">{{ $t("header.changePassword") }}</el-dropdown-item>
        <el-dropdown-item @click="logout" divided>{{ $t("header.logout") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
const openDialog = (refName: string) => {
  console.log(refName)
}
const logout = () => {}
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
