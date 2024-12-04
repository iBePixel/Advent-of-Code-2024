
const fs = require("fs");

const input = fs.readFileSync("input.txt", )
let sample = input.toString()

let array = [...sample.matchAll(/mul\x28[0-9]{1,3}\x2c[0-9]{1,3}\x29/gm)]

console.log(array[100][0]);

