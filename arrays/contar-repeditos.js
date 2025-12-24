function masRepetido(arr) {
  const contador = {};
  let maxVeces = 0;
  let resultado = null;

  for (let valor of arr) {
    contador[valor] = (contador[valor] || 0) + 1;

    if (contador[valor] > maxVeces) {
      maxVeces = contador[valor];
      resultado = valor;
    }
  }

  return resultado;
}

// Ejemplo
const array = [1, 2, 3, 2, 4, 2, 5];
console.log(masRepetido(array)); // 2
