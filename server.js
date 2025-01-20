

let http = require('http');
let server = http.createServer(function(req, res){
     //write code here
     //console.log("request {}",req.url)
     if(req.url=="/home"){
          res.end("welcome home ")
     }else if(req.url=="/student"){
          res.end("List of students")
     }
     res.end("Invalid api you called")

});
console.log("Server listening to port 5000")
server.listen(5000)