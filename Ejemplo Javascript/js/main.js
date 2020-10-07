var titulo = "Hola Mundo";

function boton1() {
  console.log(titulo);
}
function boton2() {
  titulo = "Otro titulo";
  console.log(titulo);
}

function sumar() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

  x = parseInt(x);
  y = parseInt(y);

  var resultado = suma(x, y);
  var innerHTML = "<b>" + resultado + "</b>";
  if (resultado > 10) {
    // innerHTML = innerHTML + "<small>€</small>";
    innerHTML += "<small>€</small>";
  }

  document.getElementById("result").innerHTML = innerHTML;
}

function numeros() {
  var entero = 10; // integer
  console.log("entero: ", entero);
  var decimal = 10.37; // float
  console.log("decimal: ", decimal);
  var suma = entero + decimal;
  console.log("suma: ", suma);
  var cient = 1.5e-10;
  console.log("notacion cientifica: ", cient);

  console.log("redondeado: ", decimal.toFixed(1));
  console.log("a texto: ", decimal.toString());

  console.log(entero / "hola");
}

function textos() {
  var alumno = "Marçal - 12425873F";
  var splitPosition = alumno.indexOf("-") ;

  var nombre = alumno.substr(0,splitPosition);

  console.log(alumno.substr(0,splitPosition).trim());

}

function varios() {
  // boolean / binaria
  var abierto = "";
  console.log(abierto);
  console.log(typeof abierto);
}

function matem() {
  var rand = Math.random();
  var porcien = rand * 100;
  var redondeo = Math.round(porcien);
  console.log(redondeo);


  // console.log(Math.round(Math.random() * 100));
}

function comparadores() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

  x = parseInt(x);
  y = parseInt(y);

  if (x < y) {
    console.log("x es más pequeña que y");
  }
}

function mayor_edad() {
  // obtener el valor del input x -> guardar en variable
  var edad = document.getElementById("x").value;
  edad = parseInt(edad);

  // Si valor introducido es mayor o igual a 18 mostrar "Eres mayor de edad"
  // Si no, mostrar "Eres menor de edad"
  if (edad >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }

}

/*
  x e y deben tener valor
*/
function evaluar() {
  // Obtener valores
  var x = parseInt(document.getElementById("x").value); // 10
  var y = parseInt(document.getElementById("y").value); // 0

  // Calcular mediana
  var mediana = (x + y) / 2; // 5
  console.log(mediana);

  var aprobado = (mediana >= 5);

  // 0-4.9 -> suspendido
  // 5-5.9 -> suficiente
  // 6-6.9 -> bien
  // 7-8.9 -> notable
  // 9-10  -> excelente
  //  false            true
  if (!(mediana < 5 || y < 5)) {
    console.log("Has aprobado");
  } else {
  console.log("Has suspendido");
  }

  // && -> y
  // || -> o
  if (x == 5 && y == 5) {
    console.log("MUY JUSTO!");
  }
  //  true       false      false
  //        true            false
  //                      false

  // true 1
  // false 0
  // && -> * 1*1 -> 1
  // || -> + 1+1 -> 1

  // string -> boolean
  // "lkafsdf" -> true
  // "" -> false
  // int -> boolean
  // 1 .. inf -1 .. -inf -> true
  // 0 -> false

  if (aprobado) {
    console.log("Has aprobado");
  }

  if (!aprobado) {
    console.log("Has suspendido");
  }

  if (!aprobado && y > 5) {
    console.log("Puedes recuperar");
  }

}

function fechas() {
  var fecha = new Date();
  var ano = fecha.getFullYear();
  var mes = fecha.getMonth() + 1;
  var dia = fecha.getDate();
  console.log(ano, mes, dia);

  var dia_semana = fecha.getDay();
  console.log(dia_semana);
  /*if (dia_semana == 0) {
    console.log("Hoy es domingo");
  } else if (dia_semana == 1) {
    console.log("Hoy es lunes");
  } else if (dia_semana == 2) {
    console.log("Hoy es martes");
  } else if (dia_semana == 3) {
    console.log("Hoy es miércoles");
  } else if (dia_semana == 4) {
    console.log("Hoy es jueves");
  } else if (dia_semana == 5) {
    console.log("Hoy es viernes");
  } else if (dia_semana == 6) {
    console.log("Hoy es sábado");
  }*/

  switch (dia_semana) {
    case 0:
      console.log("No hay clase");
      break;
    case 1:
      console.log("Hay clase");
      break;
    case 2:
      console.log("No hay clase");
      break;
    case 3:
      console.log("Hay clase");
      break;
    case 4:
      console.log("No hay clase");
      break;
    case 5:
      console.log("Hay clase");
      break;
    case 6:
      console.log("Hay clase");
      break;
  }
}

function bucles() {
  var temporizador = 30;
  while (temporizador >= 0) {
    console.log(temporizador);
    temporizador--;
  }
  console.log("BOOOOM!");

  for (var temporizador = 30;temporizador >= 0;temporizador--) {
    console.log(temporizador);
  }
  console.log("BOOOOM!");

  for (var i = 1;i <= 5;i++) {
    console.log("Hola Mundo!");
  }

  var i = 0;
  while(i > 0) {
    console.log("hola que tal");
    i++;
  }
  do {
    console.log("hola que tal");
    i++;
  } while(i < 10);
}

function operaciones() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

  x = parseInt(x);
  y = parseInt(y);

  var s = suma(x, y);
  var resta = x - y;
  var promedio = (x + y) / 2;

  console.log("suma: ", s);
  console.log("resta: ", resta);
  console.log("promedio: ", promedio);
}

function suma(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Debes rellenar los dos campos");
    return undefined;
  }

  var resultado = num1 + num2;
  return resultado;
}

function x_change() {
  console.log("x has changed");
}
function y_keyup() {
  var val = document.getElementById("y").value;
  console.log("y has new char to: " + val);
}

var glob = 50;

function rellena_tabla() {
  // obtener un numero aleatorio
  var rand = Math.random(); // 0 .. 1
  var randporcien = rand * 100; // 0 .. 100 con decimales
  var rows = Math.round(randporcien); // 0 .. 100 entero

  // iterar num veces
  for (var i = 0;i < rows;i++) {
    // escribir una fila en cada iteración
    var fila = "<tr>"
      + "<td>" + i + "</td>"
      + "<td>nombre " + i + "</td>"
      + "<td>apellido " + i + "</td>"
      + "</tr>";
    document.getElementById("contenido_tabla").innerHTML += fila;
  }

}

matem();
rellena_tabla();
