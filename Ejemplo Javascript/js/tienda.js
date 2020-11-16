// Enumeración Mascota
var Mascota;
(function (Mascota) {
    Mascota["Perro"] = "PERRO";
    Mascota["Gato"] = "GATO";
    Mascota["Periquito"] = "PERIQUITO";
    Mascota["Loro"] = "LORO";
    Mascota["Pez"] = "PEZ";
})(Mascota || (Mascota = {}));
;
// función iva
// 2 parámetros -> precio número, reducido booleano
// calcular precio con iva
// reducido = true -> precio * 1,1 (10%)
// reducido = false -> precio * 1,21 (21%) [POR DEFECTO]
function iva(precio) {
    var precio_final;
    if (precio[1]) {
        precio_final = precio[0] * 1.1;
    }
    else {
        precio_final = precio[0] * 1.21;
    }
    return precio_final;
}
// función es_reducido
// 1 parámetro -> reducido booleano, por defecto false
// muestra en la consola frase que dice si es reducido o no
// explicitar que esta función no devuelve nada (void)
function es_reducido(reducido) {
    if (reducido === void 0) { reducido = false; }
    if (reducido) {
        console.log("Es IVA reducido");
    }
    else {
        console.log("NO es IVA reducido");
    }
}
var coniva = iva([100, true]);
console.log("calculado con iva: ", coniva);
es_reducido(true);
// Variable global precios -> lista de precios
var precios = [15, 12.5, 58, 99.99];
// Variable global pedidos -> Lista de listas de precios []
var pedidos = [];
// Variable carrito -> Lista de artículos
var carrito = [];
/**
 * Suma todos los precios del usuario guardados en el array de precios
 *
 * @param precios Lista de precios
 * @returns Número con la suma de todos los valores de la lista
 */
function total_precio(precios) {
    var suma = 0;
    precios.forEach(function (item) {
        suma = suma + item;
    });
    return suma;
}
/**
 * Añade un precio a la lista global precios
 *
 * @param precio Número con el precio a añadir
 * @returns void
 */
function nuevo_precio(precio) {
    precios.push(precio);
}
/**
 * Añadir un pedido (lista de precios) a la variable global pedidos
 * @param pedido Lista de precios
 * @returns void
 */
function nuevo_pedido(pedido) {
    pedidos.push(pedido);
}
var total = total_precio(precios);
console.log("Precio total: ", total);
nuevo_precio(77);
console.log(precios);
total = total_precio(precios);
console.log("Precio total nuevo: ", total);
nuevo_pedido(precios);
console.log("Pedidos: ", pedidos);
nuevo_pedido([10, 20, 30]);
console.log("Pedidos: ", pedidos);
var mi_mascota = Mascota.Gato;
console.log("Mi mascota: ", mi_mascota);
/**
 * Muestra los datos de un artículo
 * @param articulo objeto con las propiedades id -> numérico, nombre -> texto, precio -> numérico
 * @returns void
 */
function mostrar_articulo(articulo) {
    console.log("MI ARTÍCULO: ", articulo.id, articulo.nombre, articulo.tipo, articulo.precio[0]);
}
var art = {
    id: 1,
    nombre: "Arena",
    tipo: Mascota.Gato,
    precio: [15.99, false]
};
mostrar_articulo(art);
mostrar_articulo({ id: 2, nombre: "Comida", tipo: Mascota.Perro, precio: [20, true] });
/**
 * Añadir un artículo al carrito
 * @param articulo El artículo a añadir
 * @returns void
 */
function anadir_al_carrito(articulo, callback) {
    carrito.push(articulo);
    callback(carrito);
}
anadir_al_carrito(art, function (articulos) {
    // mostrar cuantos articulos hay en la lista
    console.log("Tenemos ", articulos.length, " artículos");
});
console.log("CARRITO DE LA COMPRA: ", carrito);
anadir_al_carrito({ id: 2, nombre: "Comida", tipo: Mascota.Perro, precio: [20, true] }, function (art) {
    console.log(art);
});
/**
 * Función que suma dos o tres números
 *
 * @param num1 - El primer número
 * @param num2 - El segundo número
 * @param num3 - El tercer número. Opcional. Por defecto 0
 * @returns La suma de los números
 */
function suma(num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    var suma = num1 + num2 + num3;
    return "La suma vale: " + suma;
}
var Operacion;
(function (Operacion) {
    Operacion["Suma"] = "SUMA";
    Operacion["Resta"] = "RESTA";
})(Operacion || (Operacion = {}));
/**
 * Función que realiza una operación (suma o resta) entre dos números
 *
 * @param num1 - El primer número
 * @param num2 - El segundo número
 * @param op - Texto de la operación. Valores aceptados: "suma", "resta"
 * @returns El resultado de la operación sobre los números
 */
function operacion(num1, num2, op) {
    switch (op) {
        case Operacion.Suma:
            // suma
            return num1 + num2;
        case Operacion.Resta:
            // resta
            return num1 - num2;
    }
}
var primero = 2;
var segundo = 10;
var suma1 = suma(primero, segundo, 2);
var op = Operacion.Suma;
console.log("MI OPERACION ", op);
op = Operacion.Resta;
console.log("MI OPERACION ", op);
var resultado = operacion(primero, segundo, Operacion.Resta);
console.log("Operación: ", resultado);
function muchas_operaciones(num1, num2, lista_operaciones) {
    var resultado = 0;
    lista_operaciones.forEach(function (op) {
        resultado += operacion(num1, num2, op);
    });
    return resultado;
}
var array_normal = [
    100,
    200,
    300
];
var array_textos = [
    "hola",
    "que",
    "tal"
];
var listas_operaciones = [
    ["suma", "suma", "resta"],
    ["resta", "resta", "resta"],
    ["resta", "suma", "suma"]
];
var listas_multinumerica = [
    [[12, 12], [22, 50]],
    [[11, 11, 11, 11], [99], [0, 1, 2]],
    []
];
console.log(array_normal, array_textos, listas_operaciones);
var res = muchas_operaciones(100, 20, ["suma", "suma", "resta"]);
console.log("muchas operaciones: ", res);
var res2 = muchas_operaciones(100, 20, ["resta", "resta", "resta"]);
console.log("muchas operaciones: ", res2);
var res3 = muchas_operaciones(100, 20, ["resta", "suma", "suma"]);
console.log("muchas operaciones: ", res3);
var historico_operaciones = [];
function nueva_operacion(oper) {
    historico_operaciones.push(oper);
    return oper;
}
var oper = [22, 56, "suma"];
var oper2 = [88, 11, "resta"];
nueva_operacion(oper);
var array = [12, 15, 19];
var tupla = [10, 20, 30];
var o;
o = Operacion.Suma;
function sum(num1, num2) {
    return num1 + num2;
}
function llama_a_operacion(num1, num2, func) {
    var resultado = func(num1, num2);
    console.log("el resultado de la funcion es ", resultado);
}
llama_a_operacion(100, 200, sum);
llama_a_operacion(100, 200, function (num1, num2) {
    var resultado;
    resultado = num1 * num2 / 100;
    return resultado;
});
var empresa = {
    nombre: "Marçal Enterprises",
    num_empleados: 15,
};
mostrar_empresa(empresa);
mostrar_empresa({ nombre: "Neoland", num_empleados: 50 });
function mostrar_empresa(emp) {
    console.log("-- DATOS DE LA EMPRESA --");
    console.log(emp.nombre);
    console.log(emp.num_empleados);
    console.log("-------------------------");
}
var tres_numeros = [1, 2, 3];
var tres_palabras = ["Hola", "Uno", "primero"];
var nnn = {
    primero: true,
    segundo: false,
    tercero: false
};
$("h1").html("Tienda de Mascotas");
