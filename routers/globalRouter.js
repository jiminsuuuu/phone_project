const express = require("express");
const db = require("../db/index");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("screens/main");
});

router.get("/phone", (req, res) => {
    res.render("screens/phone")
});

router.get("/laptop", (req, res) => {
    res.render("screens/laptop")
});

router.get("/signup", (req, res) => {
    res.render("screens/signup")
});
router.get("/tv", (req,res)=>{
    res.render("screens/tv");
});
router.get("/earphone", (req,res)=>{
    res.render("screens/earphone");
});
router.get("/tab", (req,res)=>{
    res.render("screens/tab")
})
router.get("/watch", (req,res)=>{
    res.render("screens/watch")
})
router.get("/login", (req, res) => {
    const emailCheckQuery = `
        SELECT
          FROM  personalInformations`
})


module.exports = router;