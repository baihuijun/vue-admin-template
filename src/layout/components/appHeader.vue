<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ClickOutside as vClickOutside } from 'element-plus'
import { useAppStoreHook } from '@/store/modules/app'
import { computed, ref, unref, reactive, toRefs } from 'vue'
import acatarPng from '@/assets/avatars.jpg'
const useApp = useAppStoreHook()
const router = useRouter()
const showIcon = computed(() => {
  return useApp.sidebar.opened ? 'expand' : 'fold'
})

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
const outLogin = () => {
  router.push('/login')
}
</script>
<template>
  <div class="app-header">
    <el-icon :size="25" @click="useApp.toggleSideBar()">
      <component :is="showIcon"></component>
    </el-icon>
    <div class="avatar" ref="buttonRef" v-click-outside="onClickOutside">
      <el-avatar :size="30" :src="acatarPng" />
      <span>admin</span>
    </div>
    <el-popover
      ref="popoverRef"
      :virtual-ref="buttonRef"
      trigger="click"
      virtual-triggering
      :teleported="false"
    >
      <div class="avatarIcon hover:bg-blue-100" @click="outLogin">
        <el-icon><switch-button /></el-icon><span>退出登录</span>
      </div>
    </el-popover>
  </div>
</template>
<style lang="scss" scoped>
.app-header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-icon {
  cursor: pointer;
}
.avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    margin-left: 10px;
  }
}
.avatarIcon {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > span {
    margin-left: 10px;
  }
}
::v-deep(.el-popper) {
  padding: 5px 0px !important;
  width: 110px !important;
  min-width: 110px !important;
}
</style>
