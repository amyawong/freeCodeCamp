// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice
// Add Items Using splice()

function htmlColorNames(arr) {
  arr.splice(0, 2);
  arr.splice(0, 0, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));