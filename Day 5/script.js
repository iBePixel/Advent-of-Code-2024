const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let data = input.toString();
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
                pages[a].splice(g,1)
                pages[a].splice(i, 0, num2)
                wrongPages.push(pages[a])
                pages.splice(a, 1)
            }
        }
        
    }
    
})

function validate(list) {
  let valid = true;

  for (i = 0; i < pairs.length; i++) {
    split = pairs[i].split("|");
    num1 = split[0];
    num2 = split[1];
    if ((list.includes(num1)) && (list.includes(num2))) {
        let y = list.indexOf(num1)
        let z = list.indexOf(num2)
      if (y > z) {
        list.splice(y,1)
        list.splice(z,1)
        list.splice(y, 0, num2)
        list.splice(z, 0, num1)
        valid = false;
        i = 0;
      }
    }
  }
  return valid;
}




wrongPages.forEach(line => {
    if(validate(line) === false){
        
        
        for (let f = 0; f < line.length; f++){
            num1 = line[f]
            line.splice(f,1)
            if (f === line.length){
                line.splice(0, 0, num1)
            }
            else {
                line.splice(f + 1, 0, num1)
           }
            if (validate(line) === true){
              f = line.length;
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
console.log(star2)

