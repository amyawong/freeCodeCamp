// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift
// Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
