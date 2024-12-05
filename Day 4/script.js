const fs = require("fs");
const input = fs.readFileSync("input.txt", )
let sample = input.toString()
let split = sample.split(/\r?\n/g);

let counter = 0;

split.forEach(line => {  
    matches = line.match(/XMAS|SAMX/g)
    if (matches != null){
        counter += matches.length
    }
});

for (let i = 0; i < split.length; i++){
    let letters = split[i].split('')
    
    for (let a = 0; a < letters.length; a++){
        if(letters[a] == 'X'){
    }}
    letters.forEach(letter => {
        if (letter == 'X') {
            let M = split[i+1][i]
            //console.log(letter);
        }
    })
}


console.log(split[1][5]);
