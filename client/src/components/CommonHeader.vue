<template>
  <div class="head_nav">
    <div class="head_nav_left">
      后台在线系统
    </div>
    <div class="head_nav_right flex">
      <div>{{ user.name }}</div>
      <div class="pulldown">
        <el-dropdown
          trigger="click"
          @command="setDialogInfo"
          style="display:flex;align-items:center;justify-content:center;"
        >
          <img :src="user.avatar" style="width:40px;height:40px;" />
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commod-header",
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
  methods: {
    setDialogInfo(command) {
      switch (command) {
        case "info":
          this.showInfoList()
          break
        case "logout":
          this.logout()
          break
      }
    },
    showInfoList() {
      this.$message("click on item " + "info")
    },
    logout() {
      localStorage.removeItem('eletoken');
      // 清除vuex store
      this.$store.dispatch('clearCurrentState');
      this.$router.push('/');
      this.$message({message:"退出登录",type:'success'})
    },
  },
}
</script>
<style scoped>
.head_nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
