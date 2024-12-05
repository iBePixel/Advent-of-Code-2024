const fs = require("fs");
const input = fs.readFileSync("input.txt", )
let sample = input.toString()
let split = sample.split(/\r?\n/g);

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
            letterM.push([i.f])
        }
        else if(letters[f] === 'A') {
            letterA.push([i,f])
        }
        else if(letters[f] === 'S') {
            letterS.push([i,f])
        }
    }
}


console.log(letterX);