// // Deberán realizar los siguientes ejercicios:

// // 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. ✅

// function numerType(num) {
//   if (num % 0) {
//     return `El ${num} es par`;
//   } else {
//     return `El ${num} es impar`;
//   }
// }

// console.log(numerType(3));

// // 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.✅

// function maxOrMin(num1, num2) {
//   if (num1 === num2) {
//     return ` El numero ${num1} y El numero ${num2} son iguales`;
//   } else if (num1 > num2) {
//     return `El numero ${num1} es mayor que el numero ${num2}`;
//   } else {
//     return `El numero ${num2} es mayor que el numero ${num1}`;
//   }
// }

// console.log(maxOrMin(100, 200));

// // 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. ✅

// function multipleFive(number) {
//   if (number % 5 === 0) {
//     return `El ${number} ES multiplo de 5`;
//   } else {
//     return `El ${number} NO es multiplo de 5`;
//   }
// }

// console.log(multipleFive(122));

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.✅

// function counter(init) {
//   for (i = 0; i <= init; i++) {
//     console.log(`Se imprime el numero hasta el ${i}`);
//   }
// }
// counter(43);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. ✅
function wordsLenght(word, numero) {
  for (i = 0; i < numero; i++) {
    console.log(`Se imprime la palabra ${word} la cantidad de  ${numero}`);
  }
}

wordsLenght("Javascript", 100);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// | Forma de entrega:
// Los ejercicios deberán ser entregados por medio de esta plataforma.
// Deberán subir su trabajo a un repositorio de Github, deployarlo en Vercel, y entregar ambos links.
// No se aceptarán archivos sueltos, comprimidos ni subidos a drive.
