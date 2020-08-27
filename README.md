## node开始
### 准备开发环境
 + 安装express框架 npm i express 
 + 安装mongoose
 + 推荐安装nodemon,不用每次重启服务器
 + 创建配置信息，mongoDB://localhost连接mongoDB数据库

### 搭建路由和数据模型
 - 创建routes/api目录 users.js文件，里面是接口
 - 创建models目录，创建数据模型mongoose.Schema
 - 可以使用工具postman来测试接口

### 搭建注册接口并存储数据
 - npm install body-parser -S 安装body-parser处理post请求
  + bodyParser.json() 解析application/json
  + bodyParser.urlencoded() 解析application/x-www-form-urlencoded
 - 安装加密包
  + cnpm i bcrypt -S
  +  bcrypt.genSalt方法进行加密
### 使用全球公认头像
 - npm i gravatar -S 使用
 ```
 const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm",
      })
 ```
 ### 使用jsonwebtoken
  - cnpm i jsonwebtoken -S 安装使用
  - jwt.sign("规则","加密名字","过期时间","箭头函数");
