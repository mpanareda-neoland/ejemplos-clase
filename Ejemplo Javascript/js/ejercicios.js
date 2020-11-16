// DIAS DEL MES

function diasDelMes() {
  var mes = document.getElementById("mes").value;
  var dias = "";
  if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    dias = 30;
  } else if (mes == 2) {
    dias = "28 o 29";
  } else if (mes != "") {
    dias = 31;
  }
  document.getElementById("dias-mes-resultado").innerHTML = dias;
}

// DIAS DEL MES (con switch)

function diasDelMes2() {
  var mes = document.getElementById("mes").value;
  var dias = "";
  switch (mes) {
    case "4":
    case "6":
    case "9":
    case "11":
    dias = 30;
    break;
    case "2":
    dias = "28 o 29";
    break;
    case "":
    dias = "";
    break;
    default:
    dias = 31;
  }
  document.getElementById("dias-mes-resultado").innerHTML = dias;
}

// MENOR DE 3

function menorDe3() {
  var input_num1 = document.getElementById("num-1").value;
  var input_num2 = document.getElementById("num-2").value;
  var input_num3 = document.getElementById("num-3").value;

  if (input_num1 != "" && input_num2 != "" && input_num3 != "") {
    var num1 = parseInt(input_num1);
    var num2 = parseInt(input_num2);
    var num3 = parseInt(input_num3);
    console.log(input_num1);

    var result = "";
    if (num1 < num2) {
      if (num1 < num3) {
        result = num1;
      } else {
        result = num3;
      }
    } else if (num2 < num3) {
      result = num2;
    } else {
      result = num3;
    }
    document.getElementById("menor-3-resultado").innerHTML = result;
  } else {
    document.getElementById("menor-3-resultado").innerHTML = "";
  }
}

// LOTERIA

function compruebaLoteria() {
  var num = document.getElementById("numero-loteria").value;
  if (num.length == 5) {
    var ganador = "12345";
    var result = "";
    if (num == ganador) {
      result = "Felicidades! Has ganado!";
    } else {
      var num_ultimo = num.substr(-1, 1);
      var ganador_ultimo = ganador.substr(-1, 1);
      if (num_ultimo == ganador_ultimo) {
        result = "Tienes un reintegro.";
      } else {
        result = "Lo siento, suerte la próxima vez";
      }
    }
    document.getElementById("loteria-resultado").innerHTML = result;
  } else {
    document.getElementById("loteria-resultado").innerHTML = "";
  }
}

// CONTAR A

function contarA() {
  var frase = document.getElementById("frase-a").value;
  if (frase != "") {
    var as = 0;
    var longitud = frase.length;
    for (var i = 0;i < longitud;i++) {
      var letra = frase.substr(i, 1);
      if (letra == "a") {
        as++;
      }
    }
    document.getElementById("contar-a-resultado").innerHTML = as;
  } else {
    document.getElementById("contar-a-resultado").innerHTML = "";
  }
}

// TABLA MULTIPLICAR

function montarTablaMult() {
  var numero_input = document.getElementById("numero-mult").value;
  if (numero_input != "") {
    var numero = parseInt(numero_input);
    var result = "";
    for (var i = 0; i <= 10; i++) {
      var multiplicado = numero * i;
      result = result + "<tr>"
        + "<td>" + numero + " x " + i + "</td>"
        + "<td>" + multiplicado + "</td>"
        + "<tr>";
    }
    document.getElementById("tabla-mult-resultado").innerHTML = result;
  } else {
    document.getElementById("tabla-mult-resultado").innerHTML = "";
  }
}

// ADIVINA

function adivina() {
  var veces_input = document.getElementById("adivina-veces").value;
  if (veces_input != "") {
    var veces = parseInt(veces_input);
    var rand = Math.random();
    var numero_secreto = Math.round(rand * 10);
    var result = "No ha habido suerte. El número secreto era el " + numero_secreto;
    var intentos = 0;
    while (intentos < veces) {
      var numero_introducido = window.prompt("Introduce un número entre 0 y 9");
      if (numero_introducido == numero_secreto) {
        result = "Has acertado!!";
        break;
      }
      intentos++;
    }

    document.getElementById("adivina-resultado").innerHTML = result;
  } else {
    document.getElementById("adivina-resultado").innerHTML = "";
  }
}
