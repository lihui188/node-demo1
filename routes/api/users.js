// @login & register
const express = require("express")
const router = express.Router()
const User = require("../../models/User")
const bcrypt = require("bcrypt")
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
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar:'',
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

module.exports = router
