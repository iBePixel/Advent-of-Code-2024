const fs = require("fs");
const input = fs.readFileSync("input.txt", )
let sample = input.toString()
let split = sample.split(/\r?\n/g);
const includesAny = (arr, values) => values.some(v => arr.includes(v));


let counter = 0;
let letterX = []
let letterM = []
let letterA = []
let letterS = []

split.forEach(line => {  
    matches = line.match(/XMAS|SAMX/g)
    if (matches != null){
        counter += matches.length
    }
});

for (let i = 0; i < split.length; i++){
    let letters = split[i].split('')
    
    for (let f = 0; f < letters.length + 1; f++){
        if(letters[f] === 'X'){
            letterX.push([i,f])
        }
        else if(letters[f] === 'M'){
            letterM.push([i,f])
        }
        else if(letters[f] === 'A') {
            letterA.push([i,f])
        }
        else if(letters[f] === 'S') {
            letterS.push([i,f])
        }
    }
}

let down = function (num1, num2){
    row = num1 + 1

    if (includesAny(letterM, [row, num2])){
        return true;
        console.log(letterX[num1][num2], console.log([row][num2]))
    }
}

 
for (let j = 0; j < letterX.length; j++){
    let row = letterX[0]
    let indx = letterX[1]
    console.log(down(row, indx));

}



//console.log(letterX[0][1]);

//console.log(letterM)