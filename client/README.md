# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 脚手架搭建项目
- 首先清除不需要的内容，HelloWorld.vue,About.vue,Home.vue
- 引入element-ui
- 配置vue.config.js,解决跨域问题
- 引入axios

### 加载动画，消息提醒
- 加载动画需要在配置拦截器中进行使用
- 登录，注册成功进行跳转。```this.$router.push(name);```

### 路由守卫 token过期处理
- 在路由文件中进行设置，或者在main.js文件中设置