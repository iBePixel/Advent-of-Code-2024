const fs = require("fs");
const input = fs.readFileSync("input.txt", )
let sample = input.toString()
let split = sample.split(/\r?\n/g);
//const includesAny = (arr, values) => values.some(v => arr.includes(v));


let counter = 0;
let letterX = []


for (let i = 0; i < split.length; i++){
    let letters = split[i].split('')
    
    for (let f = 0; f < 140 + 1; f++){
        if(letters[f] === 'X'){
            letterX.push([i,f])
        }
    }
}

let right = function (num1, num2){
    indx = num2 + 1
    value = [num1, indx];
    if (indx <= 137 && split[num1][indx] === 'M'){
        indx = indx + 1
        if (indx <= 138 && split[num1][indx] === 'A'){
            indx = indx + 1
            if (split[num1][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let left = function (num1, num2){
    indx = num2 - 1
    value = [num1, indx];
    if (indx >= 2 && split[num1][indx] === 'M'){
        indx = indx - 1
        if (indx >= 1 && split[num1][indx] === 'A'){
            indx = indx - 1
            if (split[num1][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let down = function (num1, num2){
    row = num1 + 1
    value = [row, num2];
    if (row <= 137 && split[row][num2] === 'M'){
        row = row + 1
        if (row <= 138 && split[row][num2] === 'A'){
            row = row + 1
            if (split[row][num2] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let up = function (num1, num2){
    row = num1 - 1
    value = [row, num2];
    if (row >= 2 && split[row][num2] === 'M'){
        row = row - 1
        if (row >= 1 && split[row][num2] === 'A'){
            row = row - 1
            if (split[row][num2] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let upLeftDiag = function (num1, num2){
    row = num1 - 1
    indx = num2 -1
    value = [row, indx];
    if (row >= 2 && indx >= 2 && split[row][indx] === 'M'){
        row = row - 1
        indx = indx -1
        if (row >= 1 && indx >= 1 && split[row][indx] === 'A'){
            row = row - 1
            indx = indx -1
            if (split[row][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let downLeftDiag = function (num1, num2){
    row = num1 + 1
    indx = num2 - 1
    value = [row, indx];
    if (row <= 137 && indx >= 2 && split[row][indx] === 'M'){
        row = row + 1
        indx = indx -1
        if (row <= 138 && indx >= 1 && split[row][indx] === 'A'){
            row = row + 1
            indx = indx -1
            if (split[row][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let upRightDiag = function (num1, num2){
    row = num1 - 1
    indx = num2 + 1
    value = [row, indx];
    if (row >= 2 && indx <= 137 && split[row][indx] === 'M'){
        row = row - 1
        indx = indx + 1
        if (row >= 1 && indx <= 138 && split[row][indx] === 'A'){
            row = row - 1
            indx = indx + 1
            if (split[row][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}

let downRightDiag = function (num1, num2){
    row = num1 + 1
    indx = num2 + 1
    value = [row, indx];
    if (row <= 137 && indx <= 137 && split[row][indx] === 'M'){
        row = row + 1
        indx = indx + 1
        if (row <= 138 && indx <= 138 && split[row][indx] === 'A'){
            row = row + 1
            indx = indx + 1
            if (split[row][indx] === 'S'){
                counter += 1;
                return true
            }
        }
    }
}
 
for (let j = 0; j < letterX.length; j++){
    let row = letterX[j][0]
    let indx = letterX[j][1]
    right(row, indx);
    left(row, indx);
    down(row, indx);
    up(row, indx);
    upLeftDiag(row, indx);
    downLeftDiag(row, indx);
    upRightDiag(row, indx);
    downRightDiag(row, indx);
}


console.log(counter);
