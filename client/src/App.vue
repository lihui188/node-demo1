<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// 解析token
import jwt_decode from "jwt-decode"
export default {
  name: "app",
  component: {},
  created() {
    if (localStorage.eletoken) {
      const decoded = jwt_decode(localStorage.eletoken)
      // token存储到vuex中
      this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded))
      this.$store.dispatch("setUser", decoded)
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      )
    },
  },
}
</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: "Source Han Sans CN", "PingFangSC-Regular", "宋体", sans-serif;
}
</style>
