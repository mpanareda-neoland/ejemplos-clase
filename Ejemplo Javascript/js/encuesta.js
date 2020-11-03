$.validator.addMethod("nif", function(value, element, param) {
  console.log(value, element, param);
  var resultado = value.match(/\d{8}[a-zA-Z]/g);
  console.log(resultado);
  if (resultado === null) {
    return false;
  } else {
    return true;
  }

}, "Este NIF no es válido");

$(document).ready(function() {

  $("#buscar").on("click", function() {

    var texto = $("#texto").val();
    console.log(texto);

    // var resultado = texto.search("lorem");
    // var resultado = texto.search(/lorem/i);

    // var resultado = texto.replace("lo", "po");
    // var resultado = texto.replace(/lo/gi, "po");

    // var resultado = texto.match(/[1-8]/g);

    // var resultado = texto.match(/\w/g); // cualquier caracter
    // var resultado = texto.match(/\d/g); // cualquier dígito
    // var resultado = texto.match(/\s/g); // un espacio

    // var resultado = texto.match(/\w{5,}/g); // como mínimo 5 veces
    // var resultado = texto.match(/\w*/g); // de 0 a infinito
    // var resultado = texto.match(/\w+/g); // de 1 a infinito

    // var resultado = texto.match(/^\d/g); // al principio
    // var resultado = texto.match(/\d+$/g); // al final

    var resultado = texto.match(/\w{8,}[^ ]/);

    console.log(resultado);

  });

  $("form").validate({
    errorClass: "text-danger",
    rules: {
      email: {
        required: true,
        email: true
      },
      nombre: {
        required: true,
        minlength: 5
      },
      dni: {
        required: true,
        nif: true
      }
    },
    messages: {
      email: {
        required: "Debes introducir un correo electrónico",
        email: "Debes introducir un correo válido"
      },
      nombre: {
        required: "Debes introducir tu nombre",
        minlength: "Longitud mínima 5 caracteres"
      },
      dni: {
        required: "Debes introducir tu DNI (con la letra)",
        nif: "NIF malo"
      }
    }
  });

});
