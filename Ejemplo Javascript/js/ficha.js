var alumno1 = {
  nombre: "Marçal",
  apellidos: "Panareda",
  fecha_nacimiento: new Date("1984-07-27"),
  nombre_completo: function() {
    return this.nombre + " " + this.apellidos;
  },
  edad: function() {
    var ahora = new Date();
    var edad = Math.floor((ahora.getTime() - this.fecha_nacimiento.getTime()) / (60 * 60 * 24 * 365 * 1000));
    return edad;
  }

};

function mostrar() {
  console.log(alumno1);
  // document.getElementById("alumno").innerHTML = alumno1["nombre"];
  // document.getElementById("alumno").innerHTML = alumno1.nombre;
  // document.getElementById("alumno").innerHTML = alumno1.edad();

  document.getElementById("alumno").innerHTML = "";
  for (var i in alumno1) {
    if (typeof alumno1[i] !== "function") {
      document.getElementById("alumno").innerHTML += "<b>" + i + ": </b>" + alumno1[i] + "<br>";
    }
  }

  console.log("claves: ", Object.keys(alumno1));
  console.log("valores: ", Object.values(alumno1));

}

function corregir() {
  alumno1.apellidos = "Panareda Vidal";

  // document.getElementsByTagName("button")[0].style.display = "none";

  document.getElementsByTagName("button")[0].classList.add("d-none");

  mostrar();
}

function exportar() {
  document.getElementsByClassName("btn-info")[0].click();
  var json = JSON.stringify(alumno1);
  document.getElementById("exportar_json").innerHTML = json;
}

function importar() {
  var json = document.getElementById("importar_json").value;
  alumno1 = JSON.parse(json);

  mostrar();
}

function navegar() {
  var por_id = document.getElementById("alumno");
  console.log("por id: ", por_id);
  var por_etiqueta = document.getElementsByTagName("button");
  console.log("por etiqueta: ", por_etiqueta);
  console.log("un elemento: ", por_etiqueta[0]);
  var por_clase = document.getElementsByClassName("py-2");
  console.log("por clase: ", por_clase);
  var por_selector = document.querySelectorAll("form .py-2");
  console.log("por selector: ", por_selector);

  var funcion = document.getElementsByClassName("btn-info")[0].click;
  console.log(funcion);

}

function cambiar_img() {
  var imagen = document.getElementsByTagName("img")[0];
  imagen.src = "img/avatar2.jpg";

  // document.getElementById("alumno").style.margin = "50px";

  document.getElementsByTagName("h4")[0].style.color = "#17a2b8";
}

mostrar();
navegar();
