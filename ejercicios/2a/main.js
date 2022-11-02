"use strict";
const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

//filas del primero por columnas del segundo
//deduzco que se refieren al producto de matrices

//row: array[i]
//column: array[i] de cada array[i] fusionados

let arrayOfColumns = [];

for (let row of array2) {
  for (let number of row) {
    arrayOfColumns.push(number);
  }
}

console.log(arrayOfColumns);

//sale un array lineal con todos los números de array2, no vale
