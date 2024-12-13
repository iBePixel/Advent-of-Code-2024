const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let start
let data = sample.toString()
data = data.trim()
data = data.split(/\n/g)
rows = []
let visited = []


for( let i = 0; i < data.length; i++){
    row = data[i]
    rows.push([row])
    row = row.split('')
    if (row.includes('^')) {
        start = [i, row.indexOf('^')]
        i = data.length;
    }
}

let currIndex = start
let direction = 'up'
visited.push(currIndex)

for (i = 0; i < 100; i++){
    let r = currIndex[0];
    let ind = currIndex[1];
    if (direction === 'up'){
        if (r-1 < 0){
            console.log('Ended')
            i = 100;
        }
        else if(data[r-1][ind] !== '#'){
            currIndex = [r -1, ind];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
            console.log(currIndex)
        }
        else if(data[r-1][ind] === '#'){
            direction = 'right'
            console.log('changing direction - right')
        }
    }
    else if(direction === 'right'){
        if (ind + 1 > 9){
            console.log('Ended')
            i = 100;
        }
        else if(data[r][ind + 1] !== '#'){
            currIndex = [r, ind + 1];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
            console.log(currIndex)
        }
        else if(data[r][ind + 1] === '#'){
            direction = 'down'
            console.log('changing direction - down')
        }
    }
    else if(direction === 'down'){
        if (r + 1 > 9){
            console.log('Ended')
            i = 100;
        }
        else if(data[r + 1][ind] !== '#'){
            currIndex = [r +1, ind];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
            console.log(currIndex)
        }
        else if(data[r+1][ind] === '#'){
            direction = 'left'
            console.log('changing direction - left')
        }
    }
    else if(direction === 'left'){
        if (ind -1 < 0){
            console.log('Ended')
            i = 100;
        }
        else if(data[r][ind -1] !== '#'){
            currIndex = [r, ind -1];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
            console.log(currIndex)
        }
        else if(data[r][ind -1] === '#'){
            direction = 'up'
            console.log('changing direction - up')
        }
    }

}

console.log(visited);
console.log(visited.length)