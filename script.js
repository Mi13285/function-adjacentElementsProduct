function adjacentElementsProduct(array) {
  return Math.max(...array.map((x, i) => x * array[i + 1]).slice(0, -1));
}
console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
