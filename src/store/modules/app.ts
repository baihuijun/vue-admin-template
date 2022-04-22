import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore({
  id: 'app-store',
  state: () => ({
    sidebar: {
      opened: false
    }
  }),
  actions: {
    toggleSideBar(opened?: boolean) {
      this.sidebar.opened = opened || !this.sidebar.opened
    }
  }
})

export function useAppStoreHook() {
  return useAppStore(store)
}
