function filaColumna(matrix) {
  const res = [];

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        res.push(matrix[row][col]);
      }
    }

    return res;
}

console.log(filaColumna([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,4,5,6,7,8,9]