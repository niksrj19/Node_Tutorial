var Mongo = require('mongodb').MongoClient;

var url = 'mongo "mongodb+srv://niksemaily.fskpt.mongodb.net/nodetest" --username niks'
var http = require('http');
/* Example to send mail using gmail */

http.createServer((req,res)=>{


    Mongo.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database connected!");
        db.close();
      });
 
}).listen(3000);