
const fs = require("fs");

const input = fs.readFileSync("input.txt", )
let sample = input.toString()

let array = [...sample.matchAll(/mul\x28[0-9]{1,3}\x2c[0-9]{1,3}\x29/igm)]

let test = array.map( x => ([...x]
))

let total = 0;

const calculate = test.map((val) => {
  let num1 = val[0].slice(4, val[0].indexOf(','))
  let num2 = val[0].slice(val[0].indexOf(',') + 1, val[0].indexOf(')'))

  num1 = parseInt(num1);
  num2 = parseInt(num2)
  total += (num1 * num2);
})

calculate
console.log('Star 1 answer is ', total)

let total2 = 0;
let newArr = []
let safeStrings = []
let safeArray = []

let stops = [...sample.matchAll(/don\x27t\x28\x29/gm)]

const dont = stops.map( x => [x.index]
);

let portion = sample.slice(0, dont[0]);
safeStrings.push(portion)

for(let i = 0; i < dont.length; i++){
  let start = dont[i]
  let stop = dont[i + 1]
    portion = sample.slice(start, stop);
    newArr.push(portion)
}

newArr.forEach((string) => {
  let index = [...string.matchAll(/do\x28\x29/gm)]
  index = index.map(x => [x.index]);
  if(index[0] != null){
    let temp = string.slice(index[0],)
    safeStrings.push(temp)
  }
});

safeStrings.forEach((string) => {
  safeArray.push(...string.matchAll(/mul\x28[0-9]{1,3}\x2c[0-9]{1,3}\x29/igm))
})


safeArray.map((val) => {
  let num1 = val[0].slice(4, val[0].indexOf(','))
  let num2 = val[0].slice(val[0].indexOf(',') + 1, val[0].indexOf(')'))

  num1 = parseInt(num1);
  num2 = parseInt(num2)
  total2 += (num1 * num2);
})

console.log('Star 2 answer is ', total2)