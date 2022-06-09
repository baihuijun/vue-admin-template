<template>
  <div class="login-container flx-center">
    <BaseSwitchDark class="dark"></BaseSwitchDark>
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/images/login_left.svg" alt="" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <p class="logo-text">Geeker-Admin</p>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue"
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
