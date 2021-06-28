const scores = [90, 30, 20, 75, 85, 95, 1, 55, 60, 40];

const total = scores.reduce((accumulator, element) => accumulator + element, 0);

console.log("~ total", total)
//~ total 550 | auma todos los valores


const minimoYmaximo = scores.reduce((accumulator, score) => [Math.min(accumulator[0], score), Math.max(accumulator[1], score) ],[100, 0]);
console.log(minimoYmaximo);
//Array [ 1, 95 ]


const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
    apta: false,
  },
  {
    id: 3,
    title: "Spidarman",
    year: 2017,
    apta: false,
  },

  {
    id: 3,
    title: "Avengers",
    year: 2019,
    apta: false,
  },
  {
    id: 3,
    title: "Thor",
    year: 2019,
    apta: true,
  },
];


const datosObj = datos.reduce(function (acc, pelicula) {
         return {...acc, [pelicula.id]: pelicula}
}, {})
console.log(datosObj);