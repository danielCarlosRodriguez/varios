// var tasks = [
//   {
//     name: "Write for Envato Tuts+",

//     duration: 120,
//   },

//   {
//     name: "Work out",

//     duration: 60,
//   },

//   {
//     name: "Procrastinate on Duolingo",

//     duration: 240,
//   },
// ];

// console.log(tasks);

// var task_names = [];

// for (var i = 0, max = tasks.length; i < max; i += 1) {
//   task_names.push(tasks[i].name);
// }
// console.log(task_names);

// var task_names2 = [];

// tasks.forEach(function (task) {
//   task_names2.push(task.name);
// });

// console.log(task_names2);

// var task_names3 = tasks.map(function (task, index ) {
//   return task.duration;
// });

// console.log(task_names3);

// function ListadoDeTareas() {
//     return ('<ul></ul>')
// }

// const cuadrado = {
//   x: 85,
//   y: 37,
// };

// const suma = {
//   x: 50,
//   y: 25,
// };

// function calcularArea(cuadrado) {
//     const {x, y} = cuadrado
//     return cuadrado.x * cuadrado.y
// }

// console.log(calcularArea(cuadrado))

// function calcularArea(cuadrado) {
//     const {x, y} = cuadrado
//     return x * y
// }

// console.log(calcularArea(cuadrado))

// function calcularArea({ x, y }) {

//   return x * y;
// }

// console.log(calcularArea(cuadrado));

// function Avatar({username, URL}) {

// }

// function sumas(username =0, b=0) {
//   return username + b;
// }

// console.log(sumas(4,5));

//-----------------UNIR ARRAY----------------------
// const arrayUno = [1, 2, 3, 4, 5];
// const arrayDos = [6, 7, 8, 9, 10];

// const nuevoArray2 = [...arrayUno, ...arrayDos];

// console.log(nuevoArray2);

//-----------------UNIR OBJETOS----------------------
// const obejto1 = {
//   a: "a",
//   b: "b",
//   c: "c",
// };

// const obejto2 = {
//   d: "d",
//   e: "e",
//   f: "f",
// };

// const nuevoObjeto2 = { ...obejto1, ...obejto2 };
// console.log(nuevoObjeto2);

//-----------------IF----------------------
// const coche = {
//   marca: "Testla",
//   model: "CyberTruck",
// };

// // if (coche.model) {
// //     modelo = coche.model
// //     console.log("si");
// // } else {
// //     modelo = "X"
// //     console.log("no");
// // }

// let modelo = coche.model ? console.log("si") : console.log("no");

//-----------------MÉTODOS PARA REACT----------------------
/*
find
some
every
includes
map
filter
reduce
*/

//-----------------nullish coalescing operator----------------------

// function suma(a, b) {
//   a = a == null ? 0 : a; // si a es igual a null, poner cero, si no poner el valor de a
//   b = b == null ? 0 : b;
//   return a + b;
// }

// console.log(suma(2, 5));

// //nuevo método
// function suma(a, b) {
//   a = a ?? 0  // si a es igual a null, poner cero, si no poner el valor de a
//   b = b ?? 0
//   return a + b;
// }

// console.log(suma(2, 5));

//-------------------------------------------

// const user = {
//   nombre: "daniel",
//   edad: 42,
//   ubicacion: {
//     x: "dirección 1",
//     y: "dirección 2",
//     ciudad: {
//       codigPostal: 12300,
//       barrio: "cerrito",
//     },
//   },
// };



// //const zipcode = user.ubicacion.ciudad.codigPostal;
// const zipcode = user?.ubicacion?.ciudad?.codigPostal;

// console.log(zipcode);