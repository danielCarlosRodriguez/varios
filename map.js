const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((n) => n >= 0);
console.log(filtered);
//Array(3) [ 1, 2, 3 ]

const intems = filtered.map((n) => "<li>" + n + "</li>");
console.log(intems);
//Array(3) [ "<li>1</li>", "<li>2</li>", "<li>3</li>" ]

const intems1 = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});
console.log(intems1);
// Array(3) [ {…}, {…}, {…} ]
// ​0: Object { value: 1 }
// ​1: Object { value: 2 }
// ​2: Object { value: 3 }​

const items3 = (numbers.filter = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))).filter((obj) => obj.value > 1);

console.log(items3);
// Array(3) [ {…}, {…}, {…} ]
// ​1: Object { value: 2 }
// ​2: Object { value: 3 }​

const almuerzos = [
  { principal: "churrasco", postre: "helado" },
  { principal: "milanesa", postre: "torta" },
  { principal: "fideos", postre: "banana" },
  { principal: "sopa", postre: "manzana" },
];


const platosPrincipales = []
const postresPrincipales = [];

 
for (let i = 0; i < almuerzos.length; i++) {
  platosPrincipales.push(almuerzos[i].principal)
  postresPrincipales.push(almuerzos[i].postre);
  
}

console.log(platosPrincipales);
// Array(4) [ "churrasco", "milanesa", "fideos", "sopa" ]
// ​0: "churrasco"
// ​1: "milanesa"
// ​2: "fideos"
// ​3: "sopa"

console.log(postresPrincipales);
// Array(4) [ "helado", "torta", "banana", "manzana" ]
// ​0: "helado"
// ​1: "torta"
// ​2: "banana"
// ​3: "manzana"

const platosPrincipales1 = almuerzos.map(function (almuerzo) {
     return almuerzo.principal
})
console.log(platosPrincipales1)
// Array(4) [ "churrasco", "milanesa", "fideos", "sopa" ]
// ​0: "churrasco"
// ​1: "milanesa"
// ​2: "fideos"
// ​3: "sopa"
