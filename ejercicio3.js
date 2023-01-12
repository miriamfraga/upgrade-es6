'use strict';
// const pointsList = [32, 54, 21, 64, 75, 43];
// let pointsListCopy = [...pointsList];
// console.log(pointsListCopy);

// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// let toyCopy = {...toy};
// console.log(toyCopy);


const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
let newArray = [...pointsList, ...pointsLis2];
console.log(newArray);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

let newObj = {...toy, ...toyUpdate};
console.log(newObj);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors.slice(0, 2),...colors.slice(3)];
console.log(colorsCopy);
