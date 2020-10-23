function cargar(bn = false, boton = this) {
  var ruta_imagen = document.getElementById("ruta_imagen").value;
  if (ruta_imagen !== "") {
    var imagen = document.getElementById("imagen");
    imagen.src = ruta_imagen;
    if (bn === true) {
      imagen.classList.add("bn");
    } else {
      imagen.classList.remove("bn")
    }

    boton.classList.add("d-none");
    document.getElementById("ruta_imagen").style.backgroundColor = "transparent";
  }
}

function cambia_imagen() {
  document.getElementById("btn_cargar").classList.remove("d-none");
  document.getElementById("btn_cargar_bn").classList.remove("d-none");

  this.style.backgroundColor = "#EDF0DA";
}

function crear_lupa(e) {
  // console.log("client", e.clientX, e.clientY);
  // console.log("page", e.pageX, e.pageY);
  var container = document.getElementById("container");
  var lupa = document.createElement("div");
  container.appendChild(lupa);
  lupa.id = "lupa";
  lupa.addEventListener("click", function() {
    this.remove();
    document.getElementById("imagen").addEventListener("click", crear_lupa);
    document.getElementById("container").removeEventListener("mousemove", mover_cursor);
  });
  var ruta_imagen = document.getElementById("ruta_imagen").value;
  lupa.style.backgroundImage = "url(" + ruta_imagen + ")";

  var x = e.pageX;
  var y = e.pageY;

  mover_lupa(lupa, x, y);

  document.getElementById("imagen").removeEventListener("click", crear_lupa);
  document.getElementById("container").addEventListener("mousemove", mover_cursor);
}

function mover_lupa(lupa, x, y) {
  lupa.style.left = (x - 75) + "px";
  lupa.style.top = (y - 75) + "px";

  var imagen = document.getElementById("imagen");

  var img_x = (x - imagen.offsetLeft);
  var img_y = (y - imagen.offsetTop);
  var x_percent = img_x * 100 / imagen.width;
  var y_percent = img_y * 100 / imagen.height;
  lupa.style.backgroundPosition = x_percent + "% " + y_percent + "%";
}

function mover_cursor(e) {
  var lupa = document.getElementById("lupa");
  var x = e.pageX;
  var y = e.pageY;
  mover_lupa(lupa, x, y);
}

function tracking() {
  console.log("El usuario ha clickado al botón de cargar");
}

function init() {

  document.getElementById("btn_cargar").addEventListener("click", cargar);
  document.getElementById("btn_cargar").addEventListener("click", tracking);

  document.getElementById("btn_cargar_bn").addEventListener("click", function() {
    cargar(true, this);
  });

  document.getElementById("ruta_imagen").addEventListener("change", cambia_imagen);

  document.getElementsByTagName("h1")[0].addEventListener("click", function() { console.log("capturado click en h1"); }, true);
  document.getElementsByTagName("header")[0].addEventListener("click", function() { console.log("capturado click en header"); }, true);

  document.getElementById("imagen").addEventListener("click", crear_lupa);
}

document.getElementsByTagName("body")[0].onload = init;
