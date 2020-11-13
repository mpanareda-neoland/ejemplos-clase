jQuery(document).ready(function() {

  $("#cargar").on("click", function() {

    // $.get("index.html", function(data) {
    //   console.log("GET: ", data);
    // });
    // $.post("index.html", function(data) {
    //   console.log("POST: ", data);
    // });
    // https://cors-anywhere.herokuapp.com/
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1",
      method: "GET"
    }).done(function(response) {
      var data = response.data;
      console.log(data);
      // var comunidad = data[0];
      // var nombre = comunidad.COM;
      // $("#datos").html(nombre);
      // $("#datos").html(response.data[0].COM);

      var i = 0;
      while (i < data.length) {
        var item = data[i];

        i++;
      }

      //

      for(i = 0; i < data.length; i++) {
        var item = data[i];


      }

      //

      data.forEach(function(item) {
        var select = $("#comunidades");
        var option = $("<option/>");
        option.attr("value", item.CCOM);
        option.text(item.COM);
        select.append(option);
      });





    }).fail(function() {
      console.log("Ha habido un error");
    });

    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json"
    }).done(function(response) {
      console.log(response);

      response["@graph"]
    }).fail(function() {

    });

    console.log("Después");

  });

});
