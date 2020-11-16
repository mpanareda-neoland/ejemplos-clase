function cargar(e) {
  var ruta_imagen = $("#ruta_imagen").val();
  $("#imagen").attr("src", ruta_imagen);
  $(this).hide();
  $("#ruta_imagen").removeClass("bg-warning");
}

function crear_lupa(e) {
  // var lupa = $("<div/>");
  // lupa.attr("id", "lupa");
  // lupa.appendTo($("#container"));

  $("<div/>").attr("id", "lupa").appendTo($("#container"));
  // $("#container").append( $("<div/>").attr("id", "lupa") );

  var x = e.pageX;
  var y = e.pageY;
  var lupa = $("#lupa");
  mover_lupa(lupa, x, y);
  // mover_lupa($("#lupa"), e.pageX, e.pageY);

  $("#lupa").on("click", function() {
    $(this).remove();
    $("#imagen").on("click", crear_lupa);
    $("#container").off("mousemove");
  });

  var ruta_imagen = $("#ruta_imagen").val();
  lupa.css({
    "background-image": "url(" + ruta_imagen + ")",
    "background-repeat": "no-repeat"
  });

  $("#container").on("mousemove", function(e) {
    var lupa = $("#lupa");
    var x = e.pageX;
    var y = e.pageY;
    mover_lupa(lupa, x, y);
  });

  $("body").on("keydown", teclado);

  $(this).off(e);
}

function teclado(e) {
  // obtener la lupa
  var lupa = $("#lupa");
  // conocer la posición actual
  var x = lupa.position().left + 75;
  var y = lupa.position().top + 75;

  var modificador = 0;
  if (e.ctrlKey) {
    modificador = 40;
  }

  switch (e.keyCode) {
    case 37: // left
      // modificar x o y
      x -= 10 + modificador;
      // llamar a mover_lupa
      mover_lupa(lupa, x, y);
      e.preventDefault();
      break;
    case 39: // right
      // modificar x o y
      x += 10 + modificador;
      // llamar a mover_lupa
      mover_lupa(lupa, x, y);
      e.preventDefault();
      break;
    case 38: // top
      // modificar x o y
      y -= 10 + modificador;
      // llamar a mover_lupa
      mover_lupa(lupa, x, y);
      e.preventDefault();
      break;
    case 40: // down
      // modificar x o y
      y += 10 + modificador;
      // llamar a mover_lupa
      mover_lupa(lupa, x, y);
      e.preventDefault();
      break;
    default:

  }
}

function mover_lupa(lupa, x, y) {
  lupa.css({
    "left": (x - 75) + "px",
    "top": (y - 75) + "px"
  });

  var imagen = $("#imagen");
  var img_x = (x - imagen.position().left);
  var img_y = (y - imagen.position().top);
  var x_percent = img_x * 100 / imagen.width();
  var y_percent = img_y * 100 / imagen.height();
  lupa.css("background-position", x_percent + "% " + y_percent + "%");
}

$(document).ready(function() {

  // $("#btn_cargar").click(cargar);
  // $("#btn_cargar").on("click", cargar);
  $("#btn_cargar").on({
    click: cargar,
    mouseover: function() {
      console.log("mouseover en btn_cargar");
      // $("#btn_cargar").css("text-decoration", "underline");
      $(this).css({
        "text-decoration": "underline",
        "font-weight": "bold"
      });
    },
    dblclick: function() {
      console.log("doble click!");
    }
  });
  $("#btn_cargar_bn").on("click", cargar);

  $("#ruta_imagen").on("change", function() {
    $("#btn_cargar").show();
    $(this).addClass("bg-warning");
  });

  $("#imagen").on("click", crear_lupa);

  $("#btn_mostrar").on("click", function() {
    // $("#imagen").toggleClass("d-none");
    // $("#imagen").toggle(2000); // hide(), show()
    // $("#imagen").fadeToggle(2000); // fadeOut(), fadeIn()
    $("#imagen").slideToggle(2000); // slideUp(), slideDown()

    // if ($("#imagen:visible").length > 0) {
    // if ($("#imagen").is(":visible")) {
    //   // Está visible
    //   // $("#imagen").hide();
    //   // $("#imagen").fadeOut();
    //   $("#imagen").slideUp();
    // } else {
    //   // Está oculta
    //   // $("#imagen").show();
    //   // $("#imagen").fadeIn();
    //   $("#imagen").slideDown();
    // }

  });

  // var old_html = $("#container").html();
  // console.log(old_html);
  // $("#container").html(old_html + "<div>Hola</div>");

  // $("#container").append("<div>Hello</div>");

  // var caja = $("<div/>");
  // caja.text("Hola");
  // $("#container").append(caja);
  // $("#container").prepend(caja);
  // caja.appendTo($("#container"));
  // caja.prependTo($("#container"));

  $("<div/>").text("Hola").appendTo($("#container"));


});
