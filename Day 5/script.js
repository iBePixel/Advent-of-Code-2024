const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let data = sample.toString();
data = data.trim();
data = data.split(/\r\n/g)
let pairs = []
let strings = []
let pages = []
let wrongPages = []
let result = 0;
let star2 = 0

data.forEach(string => {
    if (string.includes('|')) {
        pairs.push(string)
    }
    else if (string !== '') {
        strings.push(string)
    }
    
});



strings.forEach(line => {
    pages.push(line.split(','))
})

pairs.forEach(pair => {
    let split = pair.split('|')
    let num1 = split[0]
    let num2 = split[1]
    for (let a = 0; a <pages.length; a++){
        if(pages[a].includes(num1) && pages[a].includes(num2)){
            let i = pages[a].indexOf(num1);
            let g = pages[a].indexOf(num2);
            if (i > g){
                pages[a][i] = num2;
                pages[a][g] = num1
                wrongPages.push(pages[a])
                pages.splice(a, 1)
            }
        }
        
    }
    
})

pages.forEach( arr => {
    let midNum = ((arr.length - 1) / 2)
    num = parseInt(arr[midNum])
    result += num;
})

wrongPages.forEach( arr => {
    let midNum = ((arr.length - 1) / 2)
    num = parseInt(arr[midNum])
    star2 += num;
})

console.log(result)

console.log(wrongPages)

console.log(star2)