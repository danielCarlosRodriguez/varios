//función tradicional
// function mostrarDatos1(nombre, apellido) {
//     return `${nombre} ${apellido}`
        
// }

// console.log(mostrarDatos1('Daniel', 'Ro1'))


// //función flecha 1
// const mostrarDatos2 = (nombre, apellido) => {
//    return `${nombre} ${apellido}`;
// }

// console.log(mostrarDatos2("Daniel", "Ro2"));

// //función flecha 2
// const mostrarDatos3 = (nombre, apellido) =>  `${nombre} ${apellido}` 

// console.log(mostrarDatos3("Daniel", "Ro3"));

// //función flecha 3
// const mostrarDatos4 = () => `${"Daniel"}`

// console.log(mostrarDatos4());

// //Objeto 1
// const instrumento1 = {
//     nombre: "Guitarra",
//     tocar: function () {
//         console.log(`${this.nombre} está ema1nando una melodía...`)
//     }
// }
// instrumento1.tocar();



const suma = (a,b) => a + b
console.log(suma(1, 9))


const suma2 = (a, b) => {
    const c = a + b
    return c+1
}
console.log(suma2(1, 8));


const suma3 = (a, b) => {
  const c = a + b;
  return c + 1;
};
console.log(suma2(1, 8));