const http = require("http");
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8')
const data1 = fs.readFileSync('data.json','utf-8')

const data = { age: 5 };
const server = http.createServer((req, res) => {
  console.log("server created");
  res.setHeader("dummy", "DummyValue");
  // res.setHeader('Content-Type','application/json')
  // res.end(JSON.stringify(data));

  //  ---------------- Send Text data in Response --------------------
  // res.setHeader("Content-Type", "text/html");
  // res.end("hello");
  // res.end(index);


  // --------------- send JSON data in response -----------------
  res.setHeader('Content-Type','application/json')
  res.end(data1)
});

server.listen(8080);
