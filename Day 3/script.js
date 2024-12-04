
const fs = require("fs");

const input = fs.readFileSync("input.txt", )
let sample = input.toString()

let array = [...sample.matchAll(/mul\x28[0-9]{1,3}\x2c[0-9]{1,3}\x29/gm)]

let test = array.map( x => ([...x]
))
console.log(test);

let total = 0;

const calculate = test.reduce((acc, val) => {

  let num1 = val[0].slice(4, val[0].indexOf(','))
  let num2 = val[0].slice(val[0].indexOf(',') + 1, val[0].indexOf(')'))
  console.log(num1, num2)
  console.log(val[0].indexOf(','))

  total += num1 * num2;
})


calculate

console.log(total)