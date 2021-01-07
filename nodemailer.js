var nodemailer = require('nodemailer');
var http = require('http');
/* Example to send mail using gmail */

http.createServer((req,res)=>{

  
var transporter = nodemailer.createTransport({
   // service :'gmail',
    
   host: 'smtp.gmail.com',
   port: 465,
   secure: true, // use SSL
     auth :{
        user:'niksrj.tak@gmail.com',
        pass:'bbokavnyjfnyktsy'  //use APP password if you have 2 way authontication service active
    }
});

var mailOptions ={
    from : 'niksrj.tak@gmail.com',
    to:'niksrj19@gmail.com',
    subject :'this is from node program',
    text :'It was successfully sent'
}

 transporter.sendMail(mailOptions,(error,info)=>{
    if(error) console.log(error);
    else console.log('Email sent  '+ info.response);
})

return res.end('SUccessfully sent mail')


}).listen(3000);
