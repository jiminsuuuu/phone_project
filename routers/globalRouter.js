const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mysql2 = require("mysql2");
const router = express.Router();

const dbConfig = {
    host:process.env.host,
    port:process.env.port,
    user:process.env.user,
    password:process.env.password,
    dbname:process.env.dbname,
};

const conn = mysql2.createConnection({
    host:dbConfig.host,
    port:dbConfig.port,
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.dbname,
});

router.get("/", (req,res)=>{
    res.render("screens/main");
});

router.get("/phone", (req, res) => {
    res.render("screens/phone")
});

router.get("/laptop", (req, res) => {
    res.render("screens/laptop")
});

router.get("/earphone", (req,res)=>{
    res.render("screens/earphone");
});

router.get("/tab", (req,res)=>{
    res.render("screens/tab")
});

router.get("/watch", (req,res)=>{
    res.render("screens/watch")
});

router.get("/reviewpage", (req,res) => {
    res.render("screens/review")
});

router.get("/loginpage", (req, res) => {
    res.render("screens/signin")
});

router.get("/signup", (req, res) => {
    res.render("screens/signup")
});



router.post("/informations", (req, res, next) => {
    const idCheckQuery = `
        SELECT  email
          FROM  personalInformations
         WHERE  email="${req.body.email}"
        `;

    conn.query(idCheckQuery, (error, result) => {
        if(error) {
            return res.status(403).send("다시 시도해 주세요.")
        } else {
            if(result.length>0) {
                return res.render("screens/signup")
            } else {
                const signupQuery = `
                INSERT INTO personalInformations (
                    name,
                    birth,
                    gender,
                    phonenum,
                    nickname,
                    email,
                    password
                ) VALUE (
                    "${req.body.name}",
                    "${req.body.birth}",
                    "${req.body.gender}",
                    "${req.body.phonenum}",
                    "${req.body.nickname}",
                    "${req.body.email}",
                    "${req.body.password}"
                )
                 `;
                 conn.query(signupQuery, (error, result) => {
                    if(error){
                        console.error(error);
                        return res.status(400).send("회원가입에 실패했습니다.")
                    } else {
                        return res.render("screens/main")
                    }
                });
            }
        }
    });
});

router.post("/login" ,(req, res) => {
    const loginQuery = `
        SELECT  email,
                password
          FROM  personalInformations
         WHERE  email = "${req.body.email}"
           AND  password = "${req.body.password}"
        `;
    conn.query(loginQuery, (error, result) => {
        if(error) {
            console.error(error);
            return res.status(403).send("다시 시도해 주세요.")
        } else {
             if(result.length<1) {
                 return res.status(403).send("계정이 존재하지 않습니다.")
             } else {
                 return res.render("screens/main")
             }
        }
    });
});

router.get("/", async(req,res) => {
    let pointResult = null;
    let contentResult = null;

    const estimationQuery = `
        SELECT  COUNT(id)   AS  COUNT,
                AVG(point)  AS  avg
          FROM  reviews
        `;

    const contentQuery = `
        SELECT  id`
});

router.post("/writeReview", (req,res) => {
    const reviewwriteQuery = `
    INSERT INTO reviews (
        point,
        content
    ) VALUES (
        ${req.body.point},
        "${req.body.content}"
    )
    `;

    conn.query(reviewwriteQuery, (error, result) => {
        if(error) {
            console.error(error);
            return res.status(403).send("다시 시도해주세요.")
        } else {
            res.render("screens/review")
        }
    })
});
    
    


module.exports = router;