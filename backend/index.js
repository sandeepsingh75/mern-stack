// const lib = require("./lib.js");
// // import {sum,diff} from "./lib.js";
// const fs = require("fs");

// // const file = fs.readFileSync("./demo.txt","utf-8");
// const t1 = performance.now();
// const file = fs.readFile("./demo.txt","utf-8", (err,txt)=>{
//     console.log(txt)
// });

// // console.log(file);
// const t2 = performance.now();
// console.log(lib.sum(1,6),lib.diff(5,2));
// // console.log(sum(1,8),diff(5,3));

// console.log(t2-t1);




// ----------------------- start ---------------------------

const express = require("express");

const server = express();
console.log("Hello")
server.listen(8080);








