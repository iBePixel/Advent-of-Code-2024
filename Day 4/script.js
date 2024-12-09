const fs = require("fs");
const input = fs.readFileSync("input.txt");
const input2 = fs.readFileSync("sample.txt")
let sample2 = input2.toString()

let data = input.toString();
let split = data.split(/\r?\n/g);


let counter = 0;
let letterX = [];

for (let i = 0; i < split.length; i++) {
  let letters = split[i].split("");

  for (let f = 0; f < 140 + 1; f++) {
    if (letters[f] === "X") {
      letterX.push([i, f]);
    }
  }
}

let right = function (num1, num2) {
  indx = num2 + 1;
  value = [num1, indx];
  if (indx <= 137 && split[num1][indx] === "M") {
    indx = indx + 1;
    if (indx <= 138 && split[num1][indx] === "A") {
      indx = indx + 1;
      if (split[num1][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let left = function (num1, num2) {
  indx = num2 - 1;
  value = [num1, indx];
  if (indx >= 2 && split[num1][indx] === "M") {
    indx = indx - 1;
    if (indx >= 1 && split[num1][indx] === "A") {
      indx = indx - 1;
      if (split[num1][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let down = function (num1, num2) {
  row = num1 + 1;
  value = [row, num2];
  if (row <= 137 && split[row][num2] === "M") {
    row = row + 1;
    if (row <= 138 && split[row][num2] === "A") {
      row = row + 1;
      if (split[row][num2] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let up = function (num1, num2) {
  row = num1 - 1;
  value = [row, num2];
  if (row >= 2 && split[row][num2] === "M") {
    row = row - 1;
    if (row >= 1 && split[row][num2] === "A") {
      row = row - 1;
      if (split[row][num2] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let upLeftDiag = function (num1, num2) {
  row = num1 - 1;
  indx = num2 - 1;
  value = [row, indx];
  if (row >= 2 && indx >= 2 && split[row][indx] === "M") {
    row = row - 1;
    indx = indx - 1;
    if (row >= 1 && indx >= 1 && split[row][indx] === "A") {
      row = row - 1;
      indx = indx - 1;
      if (split[row][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let downLeftDiag = function (num1, num2) {
  row = num1 + 1;
  indx = num2 - 1;
  value = [row, indx];
  if (row <= 137 && indx >= 2 && split[row][indx] === "M") {
    row = row + 1;
    indx = indx - 1;
    if (row <= 138 && indx >= 1 && split[row][indx] === "A") {
      row = row + 1;
      indx = indx - 1;
      if (split[row][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let upRightDiag = function (num1, num2) {
  row = num1 - 1;
  indx = num2 + 1;
  value = [row, indx];
  if (row >= 2 && indx <= 137 && split[row][indx] === "M") {
    row = row - 1;
    indx = indx + 1;
    if (row >= 1 && indx <= 138 && split[row][indx] === "A") {
      row = row - 1;
      indx = indx + 1;
      if (split[row][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

let downRightDiag = function (num1, num2) {
  row = num1 + 1;
  indx = num2 + 1;
  value = [row, indx];
  if (row <= 137 && indx <= 137 && split[row][indx] === "M") {
    row = row + 1;
    indx = indx + 1;
    if (row <= 138 && indx <= 138 && split[row][indx] === "A") {
      row = row + 1;
      indx = indx + 1;
      if (split[row][indx] === "S") {
        counter += 1;
        return true;
      }
    }
  }
};

for (let j = 0; j < letterX.length; j++) {
  let row = letterX[j][0];
  let indx = letterX[j][1];
  right(row, indx);
  left(row, indx);
  down(row, indx);
  up(row, indx);
  upLeftDiag(row, indx);
  downLeftDiag(row, indx);
  upRightDiag(row, indx);
  downRightDiag(row, indx);
}


let xmasCounter = 0;
letters = split.map(row => row.split(''))

function star2() {
  for (let i = 1; i < split.length - 1; i++){
    for (let g = 1; g < 139; g++){
      if (letters[i][g] === "A"){
        if (((letters[i -1][g-1] === "M" && letters[i + 1][g+1] === "S") || (letters[i - 1][g-1] === "S" && letters[i + 1][g+1] === "M")) &&
        ((letters[i -1][g+1] === "M" && letters[i + 1][g-1] === "S") || (letters[i -1][g+1] === "S" && letters[i + 1][g-1] === "M"))){
          xmasCounter++
        }
      }
    }
  }

}
star2()

console.log(counter);
console.log(xmasCounter);