#!/usr/bin/node
const Square1 = require('./5-square.js');

class Square extends Square1 {
  charPrint (c) {
    let char = 'X';
    if (c) {
      char = c;
    }
    for (let x = 0; x < this.height; x++) {
      let character = '';
      for (let y = 0; y < this.width; y++) {
        character += char;
      }
      console.log(character);
    }
  }
}

module.exports = Square;
