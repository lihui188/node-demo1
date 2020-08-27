// @login & register
const express = require("express")
const router = express.Router()
const User = require("../../models/User")
const bcrypt = require("bcrypt")
const gravatar = require("gravatar")
const jwt = require("jsonwebtoken")
/**
 * @access public
 * 接口/api/users/test
 * 接口参数：无
 */
router.get("/test", (req, res) => {
  res.json({
    msg: "login works",
  })
})

/**
 * @access public
 * 接口/api/users/register
 * 接口参数：无
 */
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: "邮箱已被注册",
      })
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm",
      })
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      })
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err))
        })
      })
    }
  })
})

/**
 * @access public
 * 接口/api/users/login
 * 接口参数：无
 */
router.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // 查询数据库
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "用户不存在" })
    }
    // 如果存在user，进行密码匹配
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.json({
          msg: "success",
        })
      } else {
        return res.status(400).json({
          password: "密码错误！",
        })
      }
    })
  })
})

module.exports = router
