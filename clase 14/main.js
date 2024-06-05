let diaSemana = new Date().getDay();

switch (diaSemana) {
  case 0:
    dia = "Domingo";
    console.log("Es ", dia);
    break;
  case 1:
    dia = "Lunes";
    console.log("Es ", dia);
    break;
  case 2:
    dia = "Martes";
    console.log("Es el ", dia);
    break;
  case 3:
    dia = "Miercoles";
    console.log("Es el ", dia);
    break;
  case 4:
    dia = "Jueves";
    console.log("Es el ", dia);
    break;
  case 5:
    dia = "Viernes";
    console.log("Es el ", dia);
    break;
  case 6:
    dia = "Sabado";
    console.log("Es el ", dia);
    break;
  default:
    console.log("No es un día de la semana");
    break;
}
