// //EJEMPLO 1
// let x = 11;
// //resolve, reject | resolver, rechazar
// const miPromesa = new Promise((resolve, reject) => {
//   if (x == 10) {
//     resolve("la variable es = 10");
//   } else {
//     reject("la NO variable es no es = 10");
//   }
// });

// //ejecuto la promesa | res = resuelto | error es error
// miPromesa
//   .then((res) => {
//     console.log("éxito " + res);
//   })
//   .catch((error) => {
//     console.log("error " + error);
//   });

//EJEMPLO 2

// let x = 10;
// console.log("1er. Proceso iniciado");

// //setTimeout función async = asíncrona
// setTimeout(() => {
//   x = x * 3 + 2;
//   console.log("2do. proceso iniciado, el resultado es " + x);
// },2000);

// console.log("3er. proceso iniciado, el resultado es " + x);

//EJEMPLO 3
// let q = 10;

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     q = q * 3 + 2;
//     console.log("2do. proceso iniciado, el resultado es " + q);
//     resolve(q);
//   }, 2000);
// });

// console.log("1er. Proceso iniciado");

// promesa.then((res) => {
//   console.log("3er. proceso iniciado, el resultado es " + res);
// });

// //EJEMPLO 4
// let usuarios = [
//   {
//     id: 1,
//     nombre: "Tito",
//   },
//   {
//     id: 2,
//     nombre: "Pepe",
//   },
// ];

// let telefonos = [
//   {
//     id: 1,
//     telefono: "123",
//   },
//   {
//     id: 2,
//     telefono: "456",
//   },
// ];

// const obtenerUsuario = (id) => {
//   return new Promise((resolve, reject) => {
//     if (usuarios.find((usuario) => usuario.id === id)) {
//       console.log("el usuario existe");
//       resolve(obtenerTelefono(id));
//     } else {
//       reject("el usuario no existe");
//     }
//   });
// };

// const obtenerTelefono = (id) => {
//   return new Promise((resolve, reject) => {
//     if (telefonos.find((telefono) => telefono.id === id)) {
//       resolve("el telefono existe");
//     } else {
//       reject("el telefono no existe");
//     }
//   });
// };

// obtenerUsuario(2)
//   .then((res) => {
//     return res;
//   })
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


