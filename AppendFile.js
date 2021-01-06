var http =require('http');
var fs= require("fs");

http.createServer((req,res)=>{
     fs.appendFile('Append.txt','HELLO CONTENT',(err)=>{
         if(err) throw err;
         res.writeHead(200,{'Content-type':'text/html'});
         return res.end();
     })
}).listen(3000);