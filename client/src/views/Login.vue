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
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="loginUser.email"
              autocomplete="off"
              placeholder="请输入邮箱"
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
        <div class="text-right">
          还没有账号，现在<router-link
            to="/register"
            class="text-blue font-weight"
            style="text-decoration: none;"
            >注册</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// 解析token
import jwt_decode from 'jwt-decode'
export default {
  name: "login",
  component: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        callback()
      }
    }
    return {
      loginUser: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur",
          },
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
          this.$axios.post("/api/users/login", this.loginUser).then((res) => {
            console.log(res)
            // token存储到本地
            const { token } = res.data;
            localStorage.setItem('eletoken',JSON.stringify(token));
            // 解析token
            const decoded = jwt_decode(token);
            console.log(decoded);
            // 注册成功
            this.$message({
              message: "账号登录成功！",
              type: "success",
            })
            this.$router.push("/index")
          })
        }
      })
    },
  },
}
</script>
<style scoped></style>
