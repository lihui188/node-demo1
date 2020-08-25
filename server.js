const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

// 引入users.js
const users = require("./routes/api/users")
//DB config
const db = require("./config/keys").mongoURL
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB连接成功")
  })
  .catch((err) => {
    console.log("MongoDB连接失败")
  })

app.get("/", (req, res) => {
  res.send("Hello World nihoa!")
})

app.use("/api/users", users)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port},http://localhost:5000`)
})
