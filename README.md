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
### 使用jsonwebtoken生成token
  - cnpm i jsonwebtoken -S 安装使用
  - jwt.sign("规则","加密名字","过期时间","箭头函数"); 用来生成token
  ```
   const rule = {id:user.id,name:user.name};
        jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
          if(err) throw err;
          res.json({
            success:true,
            token:"mrwu" + token
          });
        })
  ```


### 验证token
   - cnpm i passport-jwt passport -S 安装依赖包
   - 具体使用请前往查看npm官方网站


### 编写接口增删改查接口

### 启动连载
 - cnpm i concurrently -D 一起启动服务端和前端
 - "dev":"concurrent \"npm run server\" \"npm run client\"" 前后端进行连载