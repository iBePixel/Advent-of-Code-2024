const fs = require("fs");
const input = fs.readFileSync("input.txt");
const input2 = fs.readFileSync("sample.txt")
let sample2 = input2.toString()

let sample = input.toString();
//let split = sample.split(/\r?\n/g);
let split = sample2.split(/\r?\n/g);
//const includesAny = (arr, values) => values.some(v => arr.includes(v));

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

console.log(counter);

let counter2 = 0;
let letterM = [];

for (let i = 0; i < split.length; i++) {
  let letters = split[i].split("");
  for (let f = 0; f < 140 + 1; f++) {
    if (letters[f] === "M") {
      letterM.push([i, f]);
    }
  }
}

let checkXMasDown = function (num1, num2) {
  row = num1;
  upIndx1 = num2;
  upIndx2 = num2 + 2;
  rowMid = num1 + 1;
  indxMid = num2 + 1;
  lowRow = num1 + 2;
  lowIndx1 = num2;
  lowIndx2 = num2 + 2;

  if (upIndx2 <= 139 && row <= 137 && split[row][upIndx2] === "M") {
    if (split[rowMid][indxMid] === "A") {
      if (split[lowRow][lowIndx1] === "M" && split[lowRow][lowIndx2] === "S") {
        console.log('down', num1, num2);
        counter2 += 1;
        return true;
      }
    }
  }
  else if (upIndx2 <= 139 && row <= 137 && split[row][upIndx2] === "S") {
    if (split[rowMid][indxMid] === "A") {
      if (split[lowRow][lowIndx1] === "M" && split[lowRow][lowIndx2] === "S") {
        console.log(num1, num2, 'Down - criss', num1, num2);
        counter2 += 1;
        return true;
      }
    }
  }
  else if (upIndx1 >= 2 && row <= 137 && split[row][num2 -2] === "S"){
    indxMid = num2 - 1;
    if (split[row][indxMid] === "A"){
        lowIndx1 = num2 - 2;
        lowIndx2 = num2;
        if (split[lowRow][lowIndx1] === "M" && split[lowRow][lowIndx2] === "S"){
            console.log(num1,num2, 'down - backwards', num1, num2);
            counter2 += 1;
            return true; 
        }
    }
  }
};

let checkXMasUp = function (num1, num2) {
    row = num1;
    upIndx1 = num2;
    upIndx2 = num2 + 2;
    rowMid = num1 - 1;
    indxMid = num2 + 1;
    lowRow = num1 - 2;
    lowIndx1 = num2;
    lowIndx2 = num2 + 2;
  
    if (upIndx2 <= 139 && row >= 2 && split[row][upIndx2] === "M") {
      if (split[rowMid][indxMid] === "A") {
        if (split[lowRow][lowIndx1] === "S" && split[lowRow][lowIndx2] === "S") {
          console.log('up', num1, num2);
          counter2 += 1;
          return true;
        }
      }
    }
    else if (upIndx2 <= 139 && row >= 2 && split[row][upIndx2] === "S") {
      if (split[rowMid][indxMid] === "A") {
        if (split[lowRow][lowIndx1] === "M" && split[lowRow][lowIndx2] === "S") {
          console.log(num1, num2, 'up criss');
          counter2 += 1;
          return true;
        }
      }
    }
    else if (upIndx1 - 2 >= 2 && row >= 2 && split[row][upIndx1 - 2] === "S"){
      indxMid = num2 - 1;
      if (split[rowMid][indxMid] === "A"){
          lowIndx1 = num2 - 2;
          lowIndx2 = num2;
          if (split[lowRow][lowIndx2] === "M" && split[lowRow][lowIndx1] === "S"){
              console.log(num1,num2, 'up - backwards', num1, num2);
              counter2 += 1;
              return true; 
          }
      }
    }
  };

for (let j = 0; j < letterM.length; j++) {
  let row = letterM[j][0];
  let indx = letterM[j][1];
  checkXMasDown(row, indx);
  checkXMasUp(row, indx);
}

console.log(counter2);