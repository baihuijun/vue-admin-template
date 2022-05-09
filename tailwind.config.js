module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addBase }) {
      // 解决与element plus button样式冲突问题
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,var(--el-color-white))"
        }
      })
    }
  ]
}
