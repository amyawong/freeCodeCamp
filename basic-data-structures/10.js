// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof
// Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) > -1) {
    return true;
  }
  return false;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
