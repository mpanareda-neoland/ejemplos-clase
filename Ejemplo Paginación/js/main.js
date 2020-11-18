/* BASIC */
function start_example_basic() {
    // Capturamos el evento para marcar la página
    $("#basic .nav-link").on("click", function () {
        $("#basic .page-item").removeClass("active");
        $(this).parent().addClass("active");
    });
}
/* DYNAMIC */
function start_example_dynamic() {
    // Definimos en una variable el número de páginas que queremos
    var num_pages = 5;
    // Creamos todas las páginas
    for (var i = 0; i < num_pages; i++) {
        var pagenum = i + 1;
        new_page_dynamic(pagenum, "Página " + pagenum);
    }
    // Capturamos el evento para marcar la página
    $("#dynamic .nav-link").on("click", function () {
        $("#dynamic .page-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    // Abrimos la primera
    $("#dynamic .nav-item:first a").trigger("click");
}
function new_page_dynamic(pagenum, content) {
    // Creamos el div en tab-content
    var new_tab = $("<div/>");
    new_tab
        .addClass(["tab-pane", "container"])
        .attr("id", "dynamicpage" + pagenum)
        .html(content);
    $("#dynamic .tab-content").append(new_tab);
    // Creamos el li en pagination
    var new_page = $("<li/>");
    new_page.addClass(["nav-item", "page-item"]);
    var new_page_link = $("<a/>");
    new_page_link
        .addClass(["nav-link", "page-link"])
        .attr("data-toggle", "tab")
        .attr("href", "#dynamicpage" + pagenum)
        .text(pagenum);
    new_page.append(new_page_link);
    $("#dynamic .pagination").append(new_page);
}
function start_example_advanced() {
    // Obtenemos los elementos
    $.ajax({
        url: "json/data.json"
    })
        .done(function (data) {
        load_example_advanced(data);
    });
}
function load_example_advanced(items) {
    // Definimos en una variable el número de elementos por página
    var items_per_page = 6;
    // Creamos todas las páginas
    var pagenum = 1;
    for (var i = 0; i < items.length; i += items_per_page) {
        var page_items = items.slice(i, i + items_per_page);
        new_page_advanced(pagenum, page_items);
        pagenum++;
    }
    // Capturamos el evento para marcar la página
    $("#advanced .nav-link").on("click", function () {
        $("#advanced .page-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    // Abrimos la primera
    $("#advanced .nav-item:first a").trigger("click");
}
function new_page_advanced(pagenum, content) {
    // Creamos el div en tab-content
    var new_tab = $("<div/>");
    new_tab
        .addClass(["tab-pane", "container"])
        .attr("id", "advancedpage" + pagenum);
    $("#advanced .tab-content").append(new_tab);
    // Creamos el li en pagination
    var new_page = $("<li/>");
    new_page.addClass(["nav-item", "page-item"]);
    var new_page_link = $("<a/>");
    new_page_link
        .addClass(["nav-link", "page-link"])
        .attr("data-toggle", "tab")
        .attr("href", "#advancedpage" + pagenum)
        .text(pagenum);
    new_page.append(new_page_link);
    $("#advanced .pagination").append(new_page);
    // Creamos el contenido de la página
    var page_content = $("<div/>").addClass("row");
    content.forEach(function (item) {
        var page_item = $("<div/>").addClass("col-4").appendTo(page_content);
        var card = $("<div/>").addClass(["card", "mb-3"]).appendTo(page_item);
        var card_body = $("<div/>").addClass("card-body").appendTo(card);
        $("<h5/>").addClass("card-title").text(item.title).appendTo(card_body);
        $("<p/>").addClass("card-text").text(item.description).appendTo(card_body);
    });
    new_tab.append(page_content);
}
$(function () {
    start_example_basic();
    start_example_dynamic();
    start_example_advanced();
});
