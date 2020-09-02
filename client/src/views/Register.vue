<template>
  <div class="register">
    <section class="form-container">
      <div class="manage_tip">
        <span class="title">辉城在线后台管理系统</span>
        <el-form
          :model="registerUser"
          :rules="rules"
          ref="registerFrom"
          label-width="80px"
          class="demo-ruleForm"
          style="margin-top:20px;"
          size="medium"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="registerUser.name"
              autocomplete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="registerUser.email"
              autocomplete="off"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerUser.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input
              type="password"
              v-model="registerUser.password2"
              autocomplete="off"
              placeholder="请确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择身份">
            <el-select v-model="registerUser.identity" placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="submit-btn"
              @click="submitForm('registerFrom')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "register",
  component: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.registerUser.password2 !== "") {
          this.$refs.registerFrom.validateField("password2")
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"))
      } else if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    return {
      registerUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: "",
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 16, message: "长度在2-30个字符之间", trigger: "blur" },
        ],
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
        password2: [
          { required: true, validator: validatePass2, trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符之间", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message:'注册成功！',
            type:'success'
          })
        } else {
          this.$message.error('注册失败！')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.form-container {
  width: 370px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 3px #fff;
}
.form-container .manage_tip {
  margin: 20px;
  text-align: center;
  color: #000;
}
.form-container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
}
.submit-btn {
  width: 100%;
}
</style>
