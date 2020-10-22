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

function mostrar_img1() {


  // 1. Consultar si el objeto imagen existe.
  if (document.getElementsByTagName("img").length === 0) {
    // 1.1. Si no existe, que lo cree y ponga la imagen 1.
    var imagen = document.createElement("img");
    var container = document.getElementById("img-container");
    container.appendChild(imagen);

    imagen.alt = "Avatar";
    imagen.classList.add("img-fluid");

  } else {
    // 1.2. Si existe, que cambie la imagen
    var imagen = document.getElementsByTagName("img")[0];
  }

  imagen.src = "img/avatar1.jpg";

  var container = document.getElementById("img-container");
  console.log(container.parentNode);
}

function mostrar_img2() {
  // 1. Consultar si el objeto imagen existe.
  var imagen;
  if (document.getElementsByTagName("img").length === 0) {
    // 1.1. Si no existe, que lo cree y ponga la imagen 1.
    imagen = document.createElement("img");
    var container = document.getElementById("img-container");
    container.appendChild(imagen);

    imagen.alt = "Avatar";
    imagen.classList.add("img-fluid");

  } else {
    // 1.2. Si existe, que cambie la imagen
    imagen = document.getElementsByTagName("img")[0];
  }

  imagen.src = "img/avatar2.jpg";
}

function quitar_img() {
  // 1. Comprobar si la imagen existe
  if (document.getElementsByTagName("img").length !== 0) {
    // 1.1. Si existe, la borra
    var imagenes = document.getElementsByTagName("img");
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].remove();
    }
  }
}

function ensenar() {
  var a_mostrar = document.getElementsByClassName("a-mostrar");
  for (var i = 0; i < a_mostrar.length; i++) {
    a_mostrar[i].classList.remove("d-none");
  }
}
function ocultar() {
  var a_ocultar = document.getElementsByClassName("a-mostrar");
  for (var i = 0; i < a_ocultar.length; i++) {
    a_ocultar[i].classList.add("d-none");
  }
}

function cargar_alumnos() {
  // EN lugar de hacer una llamada para obtener el JSON
  // Simulamos mediante alumnos.js
  var mis_alumnos = JSON.parse(alumnos);
  console.log("Mis alumnos", mis_alumnos);

  var contenedor = document.getElementById("alumnos_relacionados");

  mis_alumnos.forEach(function(item) {
    console.log("dentro de la iteracion ", item);

    var div = document.createElement("div");
    contenedor.appendChild(div);

    var span_nombre = document.createElement("span");
    span_nombre.classList.add("font-weight-bold");
    span_nombre.innerHTML = item.nombre + " ";
    span_nombre.setAttribute("data-toggle", "true");
    div.appendChild(span_nombre);

    var span_apellido = document.createElement("span");
    span_apellido.innerHTML = item.apellido;
    div.appendChild(span_apellido);

  });

}

function cookie() {
  document.cookie = "id_usuario=1; expires=Fri, 18 Dec 2020 12:00:00 UTC; path=/";
  document.cookie = "username=mpanareda";

  console.log(document.cookie);
}

function session_storage() {
  sessionStorage.setItem("id_usuario", "1");
  var id_usuario = sessionStorage.getItem("id_usuario");
  console.log("session storage", id_usuario);
}

function local_storage() {
  localStorage.setItem("username", "mpanareda");
  var username = localStorage.getItem("username");
  console.log("local storage", username);
}

function init() {
  if (document.getElementById("alumno").length > 0) {
    mostrar();
  }



  navegar();
  cargar_alumnos();
  cookie();
  session_storage();
  local_storage();

}

init();
