import { defineStore } from "pinia"
import { MenuState } from "../interface"
import piniaPersistConfig from "@/config/piniaPersist"

// MenuStore
export const MenuStore = defineStore({
  id: "MenuState",
  state: (): MenuState => ({
    // menu collapse
    isCollapse: false,
    // menu List
    menuList: [
      {
        icon: "home-filled",
        title: "首页",
        path: "/welcome"
      }
    ]
  }),
  getters: {},
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse
    },
    async setMenuList(menuList: Menu.MenuOptions[]) {
      this.menuList = menuList
    }
  },
  persist: piniaPersistConfig("MenuState")
})
