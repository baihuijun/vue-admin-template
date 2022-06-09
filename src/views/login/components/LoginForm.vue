<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" show-password v-model="loginForm.password" placeholder="密码">
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button :icon="UserFilled" round @click="onlogin(loginFormRef)" size="large" type="primary" :loading="loading">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { CircleClose, UserFilled } from "@element-plus/icons-vue"
import type { ElForm } from "element-plus"
import { login } from "@/api/userApi"
import { GlobalStore } from "@/store"
import md5 from "js-md5"

const globalStore = GlobalStore()

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
})

// 登录表单数据
const loginForm = reactive({
  username: "admin",
  password: "123456"
})
const loading = ref<boolean>(false)

const router = useRouter()
// login
const onlogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async valid => {
    if (valid) {
      loading.value = true
      try {
        let requestLoginForm = {
          username: loginForm.username,
          password: md5(loginForm.password)
        }
        const res = await login(requestLoginForm)
        globalStore.setToken(res.data!.access_token)
        // @ts-ignore # 忽视本行代码的小错误
        ElMessage.success("登录成功!")
        router.push({ name: "home" })
      } finally {
        loading.value = false
      }
    }
  })
}

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.el-form-item {
  margin-bottom: 35px;
}
.login-btn {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
  .el-button {
    width: 185px;
  }
}
</style>
