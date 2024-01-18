const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// const data = { age: 5 };
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**Title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**description**", product.description)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedIndex);
    return;
  }

  //  "/product":
  //     res.setHeader("Content-Type", "text/html");
  //     let modifiedIndex = index
  //                         .replace('**Title**',product.title)
  //                         .replace('**url**',product.thumbnail)
  //                         .replace('**description**',product.description)
  //                         .replace('**price**',product.price)
  //     res.end(modifiedIndex);
  //     break;

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(400, "NT Found");
      res.end();
      break;
  }

  // console.warn("Hello");
  // console.log("server created");
  // res.setHeader("dummy", "DummyValue");
  // res.setHeader('Content-Type','application/json')
  // res.end(JSON.stringify(data));

  //  ---------------- Send Text data in Response --------------------
  // res.setHeader("Content-Type", "text/html");
  // res.end("hello");
  // res.end(index);

  // --------------- send JSON data in response -----------------
  // res.setHeader('Content-Type','application/json')
  // res.end(data1)

  // res.setHeader('Content-Type','text/html')
  // res.end(data2)
});

server.listen(8080);
