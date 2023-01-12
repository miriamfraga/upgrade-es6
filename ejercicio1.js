'use strict';
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

const sum = (a = 10, b = 5) => a + b;
const result = sum();
console.log(result);

const sum2 = (a, b = 5) => a + b;
const result2 = sum2(10);
console.log(result2);

const sum3 = (a, b) => a + b;
const result3 = sum3(10, 5);
console.log(result3);