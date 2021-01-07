var mysql = require('mysql');

var nodemailer = require('nodemailer');
var http = require('http');
/* Example to send mail using gmail */

http.createServer((req,res)=>{

var con = mysql.createConnection({
    host:'localhost',
    user:'niks',
    password:'niks',
    database :'niks'
});
var sql ='select name,age from emp;';
con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
     con.query(sql, (error,result,fields)=>{
         if(error) throw error;
         console.log("Result: "+ result[0].name);
     })

    return res.end("SUccessfull");
});
 
}).listen(3000);