const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let start
let data = sample.toString()
data = data.trim()
data = data.split(/\n/g)
rows = []


for( let i = 0; i < data.length; i++){
    row = data[i]
    rows.push([row])
    row = row.split('')
    if (row.includes('^')) {
        start = [i, row.indexOf('^')]
    }
}

function nextCell(row, index, direction){
    if (direction === up) {
        if(data[row -1][index] === '.'){

        }
        else if( data[row -1][index] === '#'){
            
        }
        else {
            console.log('End')
        }
    } 
}


console.log(data[6][4]);