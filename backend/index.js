const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html","utf-8");
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
const products = data.products;

const server = http.createServer((req,res) => {
  console.log(req.url);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2];
    const prd = products.find(p=>p.id===(+id))
    console.log(prd)
  }
// "/product":
//     res.setHeader('Content-Type','text/html'); 
//     let modifiedIndex = index
//     .replace('Card title',product.title)
//     .replace('Card Body',product.description)
//     .replace('Rating',product.rating)
//     .replace('image-url',product.thumbnail)
//     res.end(modifiedIndex);
//     break;

  switch (req.url) {
    case '/':
      res.setHeader('Content-Type','text/html'); // set "Content-Type", "text/html" if we send html content
      res.end(index);
      break;
    case '/api':
      res.setHeader('Content-Type','application/json'); //set "Content-Type","application/json" if we send json data or file
      res.end(JSON.stringify(data));
      break;
   
    default:
      res.writeHead(404);
      res.end();
      break;
  }
  console.log("server started");
  // res.setHeader("DummyHeader", "DummyValue");

  // res.end(data);
  // res.end(index);
  // res.end(JSON.stringify(data));
  // res.end('<h1>Hello</h1>')
});

server.listen(8080);
