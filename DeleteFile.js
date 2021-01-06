var http =require('http');
var fs= require("fs");

http.createServer((req,res)=>{
     fs.unlink('delete.txt',(err)=>{
         if (err) throw err;
         return res.end("DELETED FILE name delete.txt");
     })
}).listen(3000);