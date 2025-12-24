function spiralOrder(matrix) {
  const res = [];
  while (matrix.length) {
    res.push(...matrix.shift());
    matrix.forEach(r => res.push(r.pop()));
    matrix.length && res.push(...matrix.pop().reverse());
    matrix.forEach(r => res.push(r.shift()));
  }
  return res;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]