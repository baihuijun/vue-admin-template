import { App } from 'vue'
import {
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElDialog,
  ElCard,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  // 指令
  ElLoading,
  ElInfiniteScroll
} from 'element-plus'
import { Fold, Expand } from '@element-plus/icons-vue'
// Directives
const plugins = [ElLoading, ElInfiniteScroll]

const components = [
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElDialog,
  ElCard,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  // 图标
  Fold,
  Expand
]

export default function setupElementPlus(app: App) {
  // 注册组件
  components.forEach((component: { name: string }) => {
    app.component(component.name, component)
  })
  // 注册指令
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
