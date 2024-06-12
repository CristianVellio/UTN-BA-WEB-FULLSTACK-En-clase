//ARRAYS
/* let frutas = ["manzana", "pera", "banana", "naranja", "uva", "sandia", "melon"];

let i = 0;
while (i < frutas.length) {
  document.write(frutas[i], "<br>");
  i++;
} */

// WHILE LOOP
/* let pasos = 100;
while (pasos > 0) {
  if (pasos == 1) {
    document.write("Te queda solo un paso por caminar!", "<br>");
  } else {
    document.write("Te quedan: ", pasos, " pasos por caminar", "<br>");
  }
  pasos = pasos - 1;
  if (pasos == 50) {
    document.write("Estas a la mitad del camino", "<br>");
  } else if (pasos == 0) {
    document.write("Llegaste a tu destino", "<br>");
  }
} */

// FOR LOOP
/* for (let i = 0; i <= 10; i++) {
  alert(i);
} */

/* for (i = 1; i < 5; i++) {
  //solicitar al usuario su nombre
  let ingresarNombre = prompt("Ingrese su nombre");
  //Informar el turno
  alert("Turno nro: " + i + " Nombre: " + ingresarNombre);
}
 */

// propiedad length de los arrays
/* let frutas = ["manzana", "pera", "banana", "naranja", "uva", "sandia", "melon"];
for (let i = 0; i <= frutas.length; i++) {
  let fruta = frutas[i];
  console.log(fruta, "tiene", fruta.length, "letras");
}
 */

//ForEach
let objetosMagicos = ["varita", "escoba", "caldero", "libro", "pocion"];
/* objetosMagicos.forEach(function (objetosMagicos, indice, array) {
  console.log("Objetos con ForEach es: ", objetosMagicos, indice, array);
});

objetosMagicos.forEach((objetosMagicos, indice) =>
  console.log(
    "Objetos con ForEach, con arrow function, es: ",
    objetosMagicos,
    indice
  )
); */

/* MAP - crea un nuevo array con los resultados de la llamada a la función indicada 
aplicados a cada uno de sus elementos. */

objetosMagicos.mam((objetosMagicos) => {
  console.log("Objetos con MAP es: ", objetosMagicos + objeto);
});
