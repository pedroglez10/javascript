/**
 * Dado un número n, 
 * debes crear una matriz n x n 
 * y llenarla con números del 1 al n² en espiral.
 */

function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0,
      bottom = n - 1,
      left = 0,
      right = n - 1;

  let num = 1;

  while (top <= bottom && left <= right) {

    // ➡️ izquierda a derecha
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // ⬇️ arriba a abajo
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // ⬅️ derecha a izquierda
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // ⬆️ abajo a arriba
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

console.log(generateMatrix(1)); // [[1]]
console.log(generateMatrix(3)); // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(4)); // [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]