/* let frutas [
    "manzana",
    "pera",
    "banana",
    "naranja",
    "uva",
    "sandia",
    "melon",
]; */

let pasos = 100;
while (pasos > 0) {
  document.write("Te quedan: ", pasos, " pasos por caminar", "<br>");
  pasos = pasos - 1;
  if (pasos == 0) {
    document.write("Llegaste a tu destino");
  }
}
