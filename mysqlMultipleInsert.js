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
var sql ='insert into emp (name,age) values ?';
var values =[['A',1],
              ['B',2],
              ['C',3]   

]
con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
     con.query(sql,[values], (error,result)=>{
         if(error) throw error;
         console.log("Inserted: ");
     })

    return res.end("Inserted SUccessfull");
});
 
}).listen(3000);