var alumnos = ["Luis", "Elisa", "Luis", "Paloma", "Adonay", "Jacobo", "Sunil", "Monica", "Angelines", "Elisabet"];

function mostrar() {
  console.log(alumnos);
  document.getElementById("todos").innerHTML = "";

  // var i = 0;
  // while (i < alumnos.length) {
  //   document.getElementById("todos").innerHTML += alumnos[i] + "<br>";
  //   i++;
  // }

  // for (var i = 0;i < alumnos.length;i++) {
  //   pinta(alumnos[i]);
  // }

  alumnos.forEach(pinta);

  document.getElementById("uno").innerHTML = alumnos[0];
  document.getElementById("total").innerHTML = alumnos.length;
}

function pinta(item) {
  document.getElementById("todos").innerHTML += item + "<br>";
}

function corregir() {
  alumnos[0] = "Luis C.";
  alumnos[2] = "Luis M.";

  mostrar();
}

function anadir() {
  // alumnos[alumnos.length] = "Marçal";
  var inicio = document.getElementById("inicio").value;
  if (inicio !== "") {
    alumnos.unshift(inicio);
  }

  var final = document.getElementById("final").value;
  if (final !== "") {
    alumnos.push(final);
  }

  mostrar();
}

function anadir_medio() {
  var pos = document.getElementById("anadir_pos").value;
  var nombre = document.getElementById("anadir_texto").value;

  if (pos !== "" && nombre !== "") {
    alumnos.splice(pos, 0, nombre);
  }

  mostrar();
}

function quitar() {
  var alumno = alumnos.pop();
  var alumno2 = alumnos.shift();

  console.log("hemos sacado del final: ", alumno);
  console.log("hemos sacado del principio: ", alumno2);

  mostrar();
}

function quitar_medio() {
  var pos = document.getElementById("quitar_pos").value;

  if (pos !== "") {
    var alumnos_quitados = alumnos.splice(pos, 4);

    console.log("Hemos quitado: ", alumnos_quitados);
  }

  mostrar();
}

function buscar() {
  var nombre_buscar = document.getElementById("nombre_buscar").value;
  if (nombre_buscar !== "") {

    // var indice = alumnos.indexOf(nombre_buscar);
    var nombre_minus = nombre_buscar.toLowerCase();
    var found = alumnos.find(function(item) {
      return (nombre_minus === item.toLowerCase());
    });

    // if (indice >= 0) {
    //   document.getElementById("buscar_resultado").innerHTML = "El nombre está en la posición " + indice;
    if (found !== undefined) {
      document.getElementById("buscar_resultado").innerHTML = "El nombre encontrado es " + found;
    } else {
      document.getElementById("buscar_resultado").innerHTML = "No hemos encontrado este nombre";
    }
  } else {
    document.getElementById("buscar_resultado").innerHTML = "";
  }
}

function ordenar() {
  alumnos.sort();

  mostrar();
}

function ordenar_desc() {
  alumnos.sort();
  alumnos.reverse();

  mostrar();
}

function nuevo() {
  var nuevo = document.getElementById("nuevo_contenido").value;
  alumnos = nuevo.split(",");

  mostrar();
}

function prefijo() {
  // alumnos = alumnos.map(pon_prefijo);
  alumnos = alumnos.map(function(item) {
    return "Alumno -> " + item;
  });

  mostrar();
}
// function pon_prefijo(item) {
//   return "Alumno: " + item;
// }

// Numero -> Boolean
// 0 -> false
// * -> true

// String -> Boolean
// "" -> false
// "*" -> true

function filtro() {
  alumnos = alumnos.filter(function(item) {
    return (item.length > 5);
  });

  mostrar();
}


function evalua() {
  var notas = [];
  alumnos.forEach(function(item, i) {
    var notas_alumno = [];
    for (var j = 0; j < 20; j++) {
      var nota = Math.round(Math.random() * 10);
      notas_alumno[j] = nota;
    }
    notas.push(notas_alumno);
  });

  console.log("Todas las notas:", notas);
  console.log("Notas del primer alumno: ", notas[0]);
  console.log("Primera nota del primer alumno: ", notas[0][9])
}

mostrar();
