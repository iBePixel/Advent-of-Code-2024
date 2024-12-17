const fs = require("fs");
const input = fs.readFileSync("input.txt");
const sample = fs.readFileSync("sample.txt")

let start
let data = input.toString()
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

for (i = 0; i < 10000; i++){
    let r = currIndex[0];
    let ind = currIndex[1];
    if (direction === 'up'){
        if (r-1 < 0){
            i = 10000;
        }
        else if(data[r-1][ind] !== '#'){
            currIndex = [ r -1, ind ];
            if (!visited.includes(currIndex)) {
                visited.push(currIndex);
            }
        }
        else if(data[r-1][ind] === '#'){
            direction = 'right'
        }
    }
    else if(direction === 'right'){
        if (ind + 1 > 130){
            i = 10000;
        }
        else if(data[r][ind + 1] !== '#'){
            currIndex = [ r, ind + 1 ];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
        }
        else if(data[r][ind + 1] === '#'){
            direction = 'down'
        }
    }
    else if(direction === 'down'){
        if (r + 1 > 130){
            i = 10000;
        }
        else if(data[r + 1][ind] !== '#'){
            currIndex = [ r +1, ind ];
            if (!visited.includes(currIndex)) {
                
                visited.push(currIndex);
            }
        }
        else if(data[r+1][ind] === '#'){
            direction = 'left'
        }
    }
    else if(direction === 'left'){
        if (ind -1 < 0){
            i = 10000;
        }
        else if(data[r][ind -1] !== '#'){
            currIndex = [ r, ind -1 ];
            if (!visited.includes(currIndex)) {
                visited.push(currIndex);
            }
        }
        else if(data[r][ind -1] === '#'){
            direction = 'up'
        }
    }

}

let counter = 1;

for(let c = 0; c < visited.length; c++){
    num1 = visited[c][0]
    num2 = visited[c][1]
    console.log(num1, num2)
    for(let d = c + 1; d < visited.length; d++ ){
        if( visited[d][0] === num1 && visited[d][1] === num2){
            d = visited.length
        }
        else if(d == visited.length -1  ){
            counter += 1;
        }
    }
}

console.log(counter)