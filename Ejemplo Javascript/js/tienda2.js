const iva_reducido = 10;
const iva_normal = 21;

/**
 * @param reducido booleano
 * @returns 10, 21 dependiendo de si es reducido o no
 */
function iva(reducido = false) {
  let iva;
  if (reducido) {
    iva = iva_reducido;
  } else {
    iva = iva_normal;
  }
  return iva;
}

const mi_iva = iva();
console.log(`Mi iva es del ${mi_iva}%`);

/**
 * Función calc_iva
 * @param precio number
 * @param iva number
 * @returns number el precio con IVA
 */
 const calc_iva = (precio, iva) => precio + (precio * iva / 100);

 const precio_con_iva = calc_iva(100, mi_iva);
 console.log(`El producto vale ${precio_con_iva}€ iva incluido`);


const carrito = [101, 117.55, 199.99, 205, 1013, 1000];
carrito.forEach((item) => {
  console.log(item);
});

const carrito_con_iva = carrito.map((item) => {
  return calc_iva(item, mi_iva);
});
console.log("Carrito con iva: ", carrito_con_iva);

// const carrito_precios_caros = carrito.filter(item => item >= 20);
const carrito_precios_caros = carrito.filter((item) => {
  return item >= 20;
});
console.log("Carrito precios caros: ", carrito_precios_caros);

const precio_carrito = carrito.reduce((acumulador, item) => {
  return acumulador + item;
});
console.log("Precio Carrito: ", precio_carrito);

const carrito_con_zero = carrito.some((item) => {
  return item === 0;
});
console.log("Hay algun elemento a cero?", carrito_con_zero);

const carrito_caro = carrito.every((item) => {
  return item > 100;
});
console.log("Son todos > 100", carrito_caro);


// Objeto articulo1
// propiedades: nombre, precio, unidades
// métodos: vende -> restar una unidad
const articulo1 = {
  nombre: "Comida",
  precio: 100,
  unidades: 3,
  vende() {
    this.unidades--;
  }
}
console.log(articulo1);
articulo1.vende();
console.log(articulo1);
