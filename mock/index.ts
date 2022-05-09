import { Random } from "mockjs"
import { MockMethod } from "vite-plugin-mock"

const permissionRouter = {
  path: "/permission",
  redirect: "/permission/page/index",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/permission/page/index",
      name: "permissionPage",
      meta: {
        title: "menus.permissionPage",
        i18n: true
      }
    },
    {
      path: "/permission/button/index",
      name: "permissionButton",
      meta: {
        title: "menus.permissionButton",
        i18n: true,
        authority: []
      }
    }
  ]
}

// 添加不同按钮权限到/permission/button页面中
function setDifAuthority(authority: string, routes: any) {
  routes.children[1].meta.authority = [authority]
  return routes
}
export default [
  {
    url: "/api/getUserInfo",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        success: true,
        result: {
          name: "用户信息",
          age: 18,
          avatar: "/images/xj.jpg"
        }
      }
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        success: true,
        result: {
          token: Random.string(100),
          menuList: [
            {
              icon: "home-filled",
              title: "首页",
              path: "/home/index"
            },
            {
              icon: "histogram",
              title: "数据大屏",
              path: "/dataScreen"
            },
            {
              icon: "message-box",
              title: "超级表格",
              path: "/proTable",
              children: [
                {
                  path: "/proTable/useHooks",
                  title: "使用 Hooks",
                  icon: "menu"
                },
                {
                  path: "/proTable/useComponent",
                  title: "使用 Component",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "data-analysis",
              title: "Dashboard",
              path: "/dashboard",
              children: [
                {
                  path: "/dashboard/dataVisualize",
                  title: "数据可视化",
                  icon: "menu"
                },
                {
                  path: "/dashboard/embedded",
                  title: "内嵌页面",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "tickets",
              title: "表单 Form",
              path: "/form",
              children: [
                {
                  path: "/form/basicForm",
                  title: "基础 Form",
                  icon: "menu"
                },
                {
                  path: "/form/validateForm",
                  title: "校验 Form",
                  icon: "menu"
                },
                {
                  path: "/form/dynamicForm",
                  title: "动态 Form",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "trend-charts",
              title: "Echarts",
              path: "/echarts",
              children: [
                {
                  path: "/echarts/waterChart",
                  title: "水型图",
                  icon: "menu"
                },
                {
                  path: "/echarts/columnChart",
                  title: "柱状图",
                  icon: "menu"
                },
                {
                  path: "/echarts/lineChart",
                  title: "折线图",
                  icon: "menu"
                },
                {
                  path: "/echarts/pieChart",
                  title: "饼图",
                  icon: "menu"
                },
                {
                  path: "/echarts/radarChart",
                  title: "雷达图",
                  icon: "menu"
                },
                {
                  path: "/echarts/nestedChart",
                  title: "嵌套环形图",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "briefcase",
              title: "常用组件",
              path: "/assembly",
              children: [
                {
                  path: "/assembly/batchImport",
                  title: "批量导入数据",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "stamp",
              title: "自定义指令",
              path: "/directives",
              children: [
                {
                  path: "/directives/copyDirect",
                  title: "复制指令",
                  icon: "menu"
                },
                {
                  path: "/directives/watermarkDirect",
                  title: "水印指令",
                  icon: "menu"
                },
                {
                  path: "/directives/dragDirect",
                  title: "拖拽指令",
                  icon: "menu"
                },
                {
                  path: "/directives/debounceDirect",
                  title: "防抖指令",
                  icon: "menu"
                },
                {
                  path: "/directives/throttleDirect",
                  title: "节流指令",
                  icon: "menu"
                },
                {
                  path: "/directives/longpressDirect",
                  title: "长按指令",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "list",
              title: "菜单嵌套",
              path: "/menu",
              children: [
                {
                  path: "/menu/menu1",
                  title: "菜单1",
                  icon: "menu"
                },
                {
                  path: "/menu/menu2",
                  title: "菜单2",
                  icon: "menu",
                  children: [
                    {
                      path: "/menu/menu2/menu21",
                      title: "菜单2-1",
                      icon: "menu"
                    },
                    {
                      path: "/menu/menu2/menu22",
                      title: "菜单2-2",
                      icon: "menu",
                      children: [
                        {
                          path: "/menu/menu2/menu22/menu221",
                          title: "菜单2-2-1",
                          icon: "menu"
                        },
                        {
                          path: "/menu/menu2/menu22/menu222",
                          title: "菜单2-2-2",
                          icon: "menu"
                        }
                      ]
                    },
                    {
                      path: "/menu/menu2/menu23",
                      title: "菜单2-3",
                      icon: "menu"
                    }
                  ]
                },
                {
                  path: "/menu/menu3",
                  title: "菜单3",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "warning-filled",
              title: "错误页面",
              path: "/error",
              children: [
                {
                  path: "/404",
                  title: "404页面",
                  icon: "menu"
                },
                {
                  path: "/403",
                  title: "403页面",
                  icon: "menu"
                },
                {
                  path: "/500",
                  title: "500页面",
                  icon: "menu"
                }
              ]
            },
            {
              icon: "paperclip",
              title: "外部链接",
              path: "/link",
              children: [
                {
                  path: "/link/gitee",
                  title: "Gitee 仓库",
                  icon: "menu",
                  isLink: "https://gitee.com/laramie/Geeker-Admin"
                },
                {
                  path: "/link/github",
                  title: "GitHub 仓库",
                  icon: "menu",
                  isLink: "https://github.com/HalseySpicy/Geeker-Admin"
                },
                {
                  path: "/link/juejin",
                  title: "掘金文档",
                  icon: "menu",
                  isLink: "https://juejin.cn/post/7080820051422478366"
                },
                {
                  path: "/link/myBlog",
                  title: "个人博客",
                  icon: "menu",
                  isLink: "http://www.spicyboy.cn"
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: "/api/getAsyncRoutes",
    method: "get",
    response: ({ query }: any) => {
      if (query.name === "admin") {
        return {
          code: 0,
          info: [setDifAuthority("v-admin", permissionRouter)]
        }
      } else {
        return {
          code: 0,
          info: [setDifAuthority("v-test", permissionRouter)]
        }
      }
    }
  }
] as MockMethod[]
