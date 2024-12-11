const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let data = input.toString();
data = data.trim();
data = data.split(/\r\n/g)
let pairs = []
let strings = []

data.forEach(string => {
    if (string.includes('|')) {
        pairs.push(string)
    }
    else if (string !== '') {
        strings.push(string)
    }
    
});

pairs.forEach(pair => {
    let split = pair.split('|')
    let num1 = split[0]
    let num2 = split[1]
    strings.forEach(list => {
        let separate = list.split(',')
        if (list.includes(num1) && list.includes(num2)){
            console.log(separate, num1, num2)
            let i = separate.indexOf(num1);
            let f = separate.indexOf(num2);
            console.log(i, f)
        }
    })
})

