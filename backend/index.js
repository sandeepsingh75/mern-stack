const http = require("http");
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = fs.readFileSync('data.json','utf-8');
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("server started");
  res.setHeader("DummyHeader", "DummyValue");    
  // res.setHeader("Content-Type", "text/html");               // set "Content-Type", "text/html" if we send html content
  res.setHeader("Content-Type", "application/json"); //set "Content-Type","application/json" if we send json data or file



res.end(data);
  res.end(index);
  // res.end(JSON.stringify(data));        
  // res.end('<h1>Hello</h1>')
});

server.listen(8080);
