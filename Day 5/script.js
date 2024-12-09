const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let data = input.toString();
data = data.trim();

let pairs = data.split(/\r\n/g)

console.log(pairs[1200])