// Clase 16 Funciones JS

/* function saludar(nombre, apellido, serieFavorita) {
  return "Hola " + nombre + "asi que tu serie favorita es " + serieFavorita;
}

console.log(saludar("Juan, ", "Perez, ", "Friends"));
console.log(saludar("Maria, ", "Gomez, ", "Game of Thrones"));
console.log(saludar("Pedro, ", "Gonzalez, ", "Breaking Bad"));
 */

/* function nombreLength() {
  let nombre = prompt("Ingrese su nombre: ");
  return nombre.length;
}
let largoNombre = nombreLength();

console.log(largoNombre); */

// Scope

function multiplicar(a, b) {
  const c = 10;
  return (a + b) * c;
}

let resultado = multiplicar(10, 2);
console.log(resultado);
