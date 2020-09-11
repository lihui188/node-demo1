<template>
  <div class="index">
    <el-container style="height:100%;">
      <router-view></router-view>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <common-aside></common-aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue"
import CommonAside from "../components/CommonAside.vue"
export default {
  name: "index",
  components: {
    CommonHeader,
    CommonAside,
  },
}
</script>
<style>
.index {
  background-image: url("../assets/images/showcase.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:100%;
  height:100%;
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  line-height: 200px;
}

/* .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
