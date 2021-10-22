const express = require("express");
const db = require("../db/index");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("screens/main");
});

router.get("/phone", (req, res) => {
    res.render("screens/phone")
});

router.get("/computer", (req, res) => {
    res.render("screens/computer")
});

router.get("/signup", (req, res) => {
    res.render("screens/signup")
});
router.get("/tv", (req,res)=>{
    res.render("screens/tv");
});
router.get("/homeappliances", (req,res)=>{
    res.render("screens/homeappliances");
});

router.get("/login", (req, res) => {
    const emailCheckQuery = `
        SELECT
          FROM  personalInformations`
})


module.exports = router;