#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      let character = '';
      for (let y = 0; y < this.width; y++) {
        character += 'X';
      }
      console.log(character);
    }
  }
}

module.exports = Rectangle;
