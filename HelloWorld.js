var http =require("http");
var url= require("url");
var dt= require('./MyFirstModule')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(req.url+"<br/>");
    var q= url.parse(req.url,true).query;
    res.write(q.year+'&nbsp &nbsp   '+q.month+"<br/>")   //http://localhost:3000/nitesh/?year=2021&month=July
    res.write('Hello World +'+dt.myDateTime());
    res.end('HELLO WORLD');
}).listen(3000); 