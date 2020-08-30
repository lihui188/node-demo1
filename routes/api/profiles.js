const express = require("express")
const router = express.Router()
const passport = require("passport")
const Profile = require("../../models/Profile")

/**
 * @access public
 * 接口/api/profiles/test
 * 接口参数：无
 */
router.get("/test", (req, res) => {
  return res.json({
    msg: "profile works",
  })
})

/**
 * @access public
 * @method POST
 * 接口/api/profiles/add
 * 接口参数：无
 * 增加一条数据
 */
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {}
    if (req.body.type) profileFields.type = req.body.type
    if (req.body.describe) profileFields.describe = req.body.describe
    if (req.body.income) profileFields.income = req.body.income
    if (req.body.expend) profileFields.expend = req.body.expend
    if (req.body.cash) profileFields.cash = req.body.cash
    if (req.body.remark) profileFields.remark = req.body.remark
    new Profile(profileFields).save().then((profile) => {
      res.json(profile)
    })
  }
)

/**
 * @access public
 * @method POST
 * 接口/api/profiles
 * 接口参数：无
 * 获取所有内容
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find()
      .then((profile) => {
        if (!profile) {
          return res.status(404).json("没有任何内容")
        }
        res.json(profile)
      })
      .catch((err) => {
        res.status(404).json(err)
      })
  }
)

/**
 * @access public
 * @method POST
 * 接口/api/profiles/:id
 * 接口参数：无
 * 获取一条数据
 */
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ _id: req.params.id })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json("没有任何内容")
        }
        res.json(profile)
      })
      .catch((err) => {
        res.status(404).json(err)
      })
  }
)

/**
 * @access public
 * @method POST
 * 接口/api/profiles/edit/:id
 * 接口参数：无
 * 修改一条数据
 */
router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {}
    if (req.body.type) profileFields.type = req.body.type
    if (req.body.describe) profileFields.describe = req.body.describe
    if (req.body.income) profileFields.income = req.body.income
    if (req.body.expend) profileFields.expend = req.body.expend
    if (req.body.cash) profileFields.cash = req.body.cash
    if (req.body.remark) profileFields.remark = req.body.remark
    Profile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: profileFields },
      { new: true }
    ).then((profile) => res.json(profile))
  }
)

/**
 * @access public
 * @method POST
 * 接口/api/profiles/delete/:id
 * 接口参数：无
 * 删除一条数据
 */
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Profile.findOneAndRemove({_id:req.params.id}).then(profile=>{
    //     // profile.save().then(profile=>
    //     //     res.json(profile));
    //     console.log(profile)
    // }).catch(err=>res.status(404).json("删除失败"))
    Profile.findOneAndRemove({ _id: req.params.id })
      .then((profile) => {
        res.json(profile)
      })
      .catch((err) => res.status(404).json("删除失败"))
  }
)
module.exports = router
