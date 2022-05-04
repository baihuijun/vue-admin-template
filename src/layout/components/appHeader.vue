<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ClickOutside as vClickOutside } from 'element-plus'
import { themeColorsType } from '@/layout/type'
import { useAppStoreHook } from '@/store/modules/app'
import { computed, ref, unref, reactive, toRefs } from 'vue'
import acatarPng from '@/assets/avatars.jpg'
import { stringify } from 'querystring'
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

const drawer = ref<boolean>(false)
const setTheme = () => {
  drawer.value = true
}

let layoutTheme = ref({
  theme: 'default'
})

let themeColors = ref<Array<themeColorsType>>([
  // 道奇蓝（默认）
  { color: '#1b2a47', themeColor: 'default' },
  // 亮白色
  { color: '#ffffff', themeColor: 'light' },
  // 猩红色
  { color: '#f5222d', themeColor: 'dusk' },
  // 橙红色
  { color: '#fa541c', themeColor: 'volcano' },
  // 金色
  { color: '#fadb14', themeColor: 'yellow' },
  // 绿宝石
  { color: '#13c2c2', themeColor: 'mingQing' },
  // 酸橙绿
  { color: '#52c41a', themeColor: 'auroraGreen' },
  // 深粉色
  { color: '#eb2f96', themeColor: 'pink' },
  // 深紫罗兰色
  { color: '#722ed1', themeColor: 'saucePurple' }
])
const handleSetTheme = (themeColor: string) => {
  layoutTheme.value.theme = themeColor
}

const setCheckColor = computed(() => {
  return (current: string) => {
    if (
      current === layoutTheme.value.theme &&
      layoutTheme.value.theme !== 'light'
    ) {
      return '#fff'
    } else if (
      current === layoutTheme.value.theme &&
      layoutTheme.value.theme === 'light'
    ) {
      return '#1d2b45'
    } else {
      return 'transparent'
    }
  }
})
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
      <div class="avatarIcon hover:bg-blue-100" @click="setTheme">
        <el-icon><setting /></el-icon><span>主题设置</span>
      </div>
      <div class="avatarIcon hover:bg-blue-100" @click="outLogin">
        <el-icon><switch-button /></el-icon><span>退出登录</span>
      </div>
    </el-popover>
    <el-drawer v-model="drawer" title="主题修改" :size="320">
      <el-divider>主题色</el-divider>
      <ul class="colorList">
        <li
          v-for="ite in themeColors"
          :key="ite.themeColor"
          :style="{ backgroundColor: ite.color }"
          @click="handleSetTheme(ite.themeColor)"
        >
          <el-icon :color="setCheckColor(ite.themeColor)"><check /></el-icon>
        </li>
      </ul>
    </el-drawer>
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
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  // > span {
  //   margin-left: 10px;
  // }
  &:hover {
    background-color: rgba(204, 204, 204, 0.2);
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
.colorList {
  display: flex;
  justify-content: space-around;
  li {
    height: 20px;
    width: 20px;
    border: 1px solid #000;
    cursor: pointer;
  }
}
</style>
