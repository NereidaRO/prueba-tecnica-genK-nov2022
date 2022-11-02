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

const result = array1.map((row, i) => row[i] * array2[i][i]);

console.log(result);

//debería dar una matriz de 3x3, pero no sé hacerlo en JS; he buscado por todos lados pero ni idea de cómo aplicarlo

/*for (let day = 0; day < schedule.length; day += 1) {
  for (let hour = 0; hour < schedule[day].length; hour += 1) {
    console.log(`On day ${day} at hour ${hour} we have ${schedule[day][hour]}`);
  }
} */
