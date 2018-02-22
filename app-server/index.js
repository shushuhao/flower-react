const express =require("express");
const server=express();
const multer=require('multer');
var upload=multer({dest:'./publc/tmp'});
const bodyParser=require('body-parser');
const fs = require('fs');
const path = require('path');
//处理cookie
const cookieParser = require('cookie-parser');
server.use(cookieParser());
//处理session
const session = require("express-session");
server.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
}));


//数据库的链接
const mysql=require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:'',
    database:'app'
})


//静态资源
server.use(express.static('./public'))

server.get('/api/data',(req,res)=>{
    con.query('select * from article where 1',
    (err,data)=>{
        if(err){
            res.json(err.message)
        }
        res.json(data)})
})

//热门问题
server.get('/api/hot',(req,res)=>{
    con.query('select * from `answer`,`question` where qid=aid order by thumb desc LIMIT 0,1',
        (err,data)=>{
            if(err){
                res.json(err.message)
            }
            res.json(data)})
})

//登录验证
server.get('/api/loginCheck', (req, res) => {
    let tel = req.query.tel;
    let sql = 'select * from user where tel = ?';
    con.query(sql, [tel],(err,data)=>{
        if(data.length==0){//不成立
            let sql = "INSERT INTO `user` (`id`, `username`, `description`, `pic`, `tel`) VALUES (NULL, '', '', '', ?)";
            con.query(sql,[tel],(err,data)=>{
                if(err){
                    res.json(err.message)
                }else{
                    let sql = 'select * from user where tel = ?';
                    con.query(sql, [tel], (err, data) => {
                        if(err){
                            res.json(err.message)
                        }
                            res.json(data)

                    })
                }

            })
        }else{//成立
            res.json(data);
        }


    })
});
//全部问题
server.get('/api/all',(req,res)=>{
    con.query('select * from `answer`,`question` where qid=aid order by aid desc',
        (err,data)=>{
            if(err){
                res.json(err.message)
            }
            res.json(data)})
})
//我的提问
server.get('/api/mql',(req,res)=>{
    con.query('select * from `answer`,`question` where qid=aid order by aid desc',
        (err,data)=>{
            if(err){
                res.json(err.message)
            }
            res.json(data)})
})
server.get('/api/addThumb',(req,res)=>{
    const aid=req.query.aid;
    const thumb=req.query.thumb;
    con.query('update answer set thumb=? where id=?', [thumb, aid], (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.end("ok");
    });
})

//頭像上傳
server.post("/api/pic-upload", upload.single('file'), (req, res) => {
    var f = req.file;
    var fname = (new Date().getTime() + Math.floor(Math.random() * 1000)) + path.extname(f.originalname)
    fs.renameSync(path.join(__dirname, f.path), path.join(__dirname, "public/upload/" + fname));
    const pic = "/upload/" + fname;
    const uid = localStorage.userid;
    con.query('update user set pic=? where id=?', [pic, uid], (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.json(req.file);
    });
});

server.listen(9000);

{/*var sql = SELECT * FROM `question` WHERE question like '%'+str+'%'*/}


