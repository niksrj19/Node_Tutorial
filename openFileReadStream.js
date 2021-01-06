var http =require('http');
var fs= require("fs");

http.createServer((req,res)=>{
    
    var rs=fs.createReadStream("./Append.txt");

    rs.on('open',()=>{
        console.log("The file is open");
       return res.end('FIle has been open')
    })

}).listen(3000);