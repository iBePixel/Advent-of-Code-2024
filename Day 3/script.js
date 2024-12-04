const fs = require("fs");

const input = fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let array = data.matchAll(/ mul\x28[0-9]{1,3}\x2c[0-9]{1,3}\x29 /gm)
    console.log(array);
    //console.log(data);
  }
});

input;