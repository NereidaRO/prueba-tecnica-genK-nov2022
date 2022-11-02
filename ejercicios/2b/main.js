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

const result = [
  [56, 78, 40],
  [128, 146, 128],
  [40, 54, 56],
];

//NOTA: result está calculada a mano (producto de matrices), si logro hacerlo con JS lo pondré en el ejercicio 2a

let thirdRow = result.pop();

let firstRow = result.slice(0, 1);

let secondRow = result.slice(1, 2);

function stringify(array) {
  const result = array.toString();
}

function complete(array) {
  for (let number of array) {
    if (number.length < 3) {
      return (number = `0${number}`);
    }
  }
}

function handleExercise(array) {
  const result = complete(array);
  stringify(result);
}

const firstRowTwo = handleExercise(firstRow);
const secondRowTwo = handleExercise(secondRow);
const thirdRowTwo = handleExercise(thirdRow);

const finalArray = [firstRowTwo, secondRowTwo, thirdRowTwo];

/*he entendido el ejercicio como que había que hacer 3 strings, una para cada subarray, ya que
el array result, el original, tiene 3 subarrays*/
