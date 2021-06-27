const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 3,
    title: "Spidarman",
    year: 2017,
  },

  {
    id: 3,
    title: "Avengers",
    year: 2019,
  },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1000);
  });
};

// getDatos()
//   .then((losDatos) => console.log(datos))
//   .catch((error) => {
//     console.error(error);
//   });

async function start() {
  const datoss = await getDatos();
  console.log(datoss);
  
}
start();

