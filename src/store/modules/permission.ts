import { defineStore } from 'pinia'
import { store } from '@/store'

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    userInfo: null
  }),
  actions: {

  }
})

export function usePermissionStoreHook() {
  return usePermissionStore(store);
}