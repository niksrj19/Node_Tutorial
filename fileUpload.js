const fs  = require("fs");
var formidable= require('formidable');
const http= require("http");
//var fsextra = require('fs-extra');  // cross platform or drive

http.createServer((req,res)=>{


    if(req.url=='/fileupload'){
        var form =new formidable.IncomingForm();
        form.parse(req,(err,fields,files)=>{
            var oldpath =files.filetoupload.path;
            var newpath ='C:/Users/niksr/'+ files.filetoupload.name;

            console.log(newpath + '   '+oldpath);
            fs.rename(oldpath,newpath,(err)=>{
                 if(err) throw err;           
                res.write('File uploaded');
                console.log("File uploaded");
                return  res.end();
            });
            
        });
    }else {

    res.writeHead(200,{'Content-Type':'text/html'});

    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data" >');
    res.write('<input type="file" name="filetoupload"> <br/>  ');

    res.write(' <input type="submit"  /> ');

    res.write('</form>');

    return res.end();
    }
}).listen(3000);