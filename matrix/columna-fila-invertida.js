function recorrerColumnasInvertidas(matrix) {
  const res = [];

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = matrix.length - 1; row >= 0; row--) {
      res.push(matrix[row][col]);
    }
  }

  return res;
}

console.log(recorrerColumnasInvertidas([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [7,4,1,8,5,2,9,6,3]