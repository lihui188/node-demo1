<template>
  <div class="login">
    <section class="form-container">
      <div class="manage_tip">
        <span class="title">辉城在线后台管理系统</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginFrom"
          label-width="80px"
          class="demo-ruleForm"
          style="margin-top:20px;"
          size="medium"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="loginUser.name"
              autocomplete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginUser.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="submit-btn"
              @click="submitForm('loginFrom')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <div class="text-right">你好</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "login",
  component: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.loginUser.password2 !== "") {
          this.$refs.loginFrom.validateField("password2")
        }
        callback()
      }
    }
    return {
      loginUser: {
        name: "",
        password: "",

      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 16, message: "长度在2-30个字符之间", trigger: "blur" },
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符之间", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/api/users/login", this.loginUser)
            .then((res) => {
              // 注册成功
              this.$message({
                message: "账号登录成功！",
                type: "success",
              })
            })
            this.$router.push('/index');
        }
      })
    },
  },
}
</script>
<style scoped>

</style>
