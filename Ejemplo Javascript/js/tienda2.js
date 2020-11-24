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


let carrito = [101, 117.55, 199.99, 205, 1013, 1000];
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

function factoriaArticulos(nombre, precio, unidades) {
  return {
    // propiedades
    _nombre: nombre,
    _precio: precio,
    _unidades: unidades,
    // metodos
    vende() {
      this.unidades--;
    },
    // setters
    set nombre(valor) {
      if (typeof valor === "string") {
        this._nombre = valor;
      } else {
        console.log("El nombre tiene que ser un texto");
      }
    },
    set precio(valor) {
      if (typeof valor === "number") {
        this._precio = valor;
      } else {
        console.log("El precio tiene que ser un número");
      }
    },
    set unidades(valor) {
      if (typeof valor === "number") {
        this._unidades = valor;
      } else {
        console.log("Las unidades tienen que ser un número");
      }
    },
    // getters
    get nombre() {
      return this._nombre;
    },
    get precio() {
      return this._precio;
    },
    get unidades() {
      return this._unidades;
    }
  }
}

const articulo1 = factoriaArticulos("Comida", 100, 3);
const articulo2 = factoriaArticulos("Bebida", 20, 5);
const articulo3 = factoriaArticulos("Postres", 50, 100);

console.log(articulo1, articulo1.nombre);
articulo1.vende();
articulo2.vende();
console.log(articulo1, articulo2, articulo3);

const { nombre, precio, unidades } = articulo2;
console.log(nombre, precio, unidades);

/**
 * Función anadir_carrito añadir precios a la variable carrito
 * @param precios lista dinámica de precios (rest parameter)
 */
const anadir_carrito = (...precios) => {
  // precios.forEach((item) => {
  //   carrito.push(item);
  // });
  carrito = carrito.concat(precios);
};

anadir_carrito(100);
console.log("Carrito +1 elemento", carrito);
anadir_carrito(12, 19, 15.15);
console.log("Carrito +3 elementos", carrito);


let unidades_total = [];

let unidades_pequenas = [1, 2, 3, 4, 5];
let unidades_grandes = [10, 20, 30, 40, 50];

// funcion que añada a unidades las unidades pequeñas y las unidades unidades_grandes
// unidades [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
const crear_unidades = () => {
  unidades_total = unidades_pequenas.concat(unidades_grandes);
}
crear_unidades();
console.log(unidades_total);

// 3 arrays paises_europa, paises_america, paises_asia
let paises_europa = [];
let paises_america = [];
let paises_asia = [];

// Función para añadir paises a una mi_lista
// Recibe un primer parámetro con la lista donde queremos guardar
// Recibe en varios parámetros los paises para añadir a la lista
// Devuelve la lista actualizada
const anadir_paises = (lista, ...paises) => {
  return lista.concat(paises);
}

paises_europa = anadir_paises(paises_europa, "España", "Francia", "Italia", "Alemania");
paises_america = anadir_paises(paises_america, "Argentina", "Ecuador", "Chile");
paises_asia = anadir_paises(paises_asia, "China", "Rusia");

console.log("europa", paises_europa);
console.log("america", paises_america);

let zona_local = paises_europa; // paises de europa
// let zona_global = paises_europa.concat(paises_america, paises_asia); // paises europa, america, asia
let zona_global = [...paises_europa, ...paises_america, ...paises_asia];
// let zona_global_mal = [paises_europa, paises_america, paises_asia];

console.log("ZONA LOCAL: ", zona_local);
console.log("ZONA GLOBAL: ", zona_global);
// console.log("ZONA GLOBAL MAL: ", zona_global_mal);


// Clase Articulo -> nombre, precio, unidades
class Articulo {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this._unidades = 100;
  }
  vende() {
    this._unidades--;
  }
  get unidades() {
    return this._unidades;
  }
  set unidades(valor) {
    this._unidades = valor;
  }
  static iva(reducido) {
    let iva;
    if (reducido) {
      iva = 10;
    } else {
      iva = 21;
    }
    return iva;
  }
}

// clase Digital -> caducidad -> texto
class Digital extends Articulo {
  constructor(nombre, precio, caducidad) {
    super(nombre, precio);
    this.caducidad = caducidad;
  }
}
// clase Fisico -> tamano -> objeto { ancho: xxx, alto: xxx }
class Fisico extends Articulo {
  constructor(nombre, precio, ancho, alto) {
    super(nombre, precio);
    this.tamano = {
      ancho: ancho,
      alto: alto
    };
  }
  enviar() {
    console.log("Se ha mandado el producto");
  }
}

const arroz = new Fisico("arroz", 1.5, 12, 43);
const curso = new Digital("curso", 100, "2020-12-01");

console.log("Arroz", arroz);
console.log("Curso", curso);

arroz.enviar();

console.log("Mi iva es del ", Articulo.iva(true));


// carrito -> lista de precios
// funcion retorne media de precios del carrito
/**
 * @param carrito Lista
 * @returns numero -> media de precios
 */
const media = (carrito) => {
  let media;
  if (carrito.length > 0) {
    let suma = carrito.reduce((acumulador, item) => acumulador + item);
    media = suma / carrito.length;
  } else {
    throw "El carrito no tiene ningún elemento";
  }

  return media;
}

try {
  carrito = [];

  console.log("ANTES DE HACER LA MEDIA");
  const media_carrito = media(carrito);
  console.log("MEDIA DEL CARRITO. ", media_carrito);

  let otra_operacion = media_carrito + 10;
  console.log("OTRA OPERACION. ", otra_operacion);
} catch(e) {
  console.log(e);
}

// variable global direccion
let direccion = "Calle Falsa 123";

/**
 * Función verifica_direccion
 * @param resolve función ok
 * @param reject función error
 * console log "verificando la direccion nombre"
 * después de 2 segundos, resolver con "direccion correcta"
 */
function verifica_direccion(resolve, reject) {
  console.log("Verificando la dirección " + direccion);
  setTimeout(() => {
    var rand = Math.round(Math.random() * 100);
    if (rand > 30) {
      resolve("La dirección es correcta");
    } else {
      reject("Todo mal");
    }
  }, 2000);
}

/**
 * Funcion realiza_pedido
 * @param resolve función ok
 * @param reject función error
 * 80% veces resuelva "pedido realizado correctamente"
 * 20% veces rechace "error al procesar el pedido"
 */
 function realiza_pedido(resolve, reject) {
   console.log("Vamos a realizar el pedido");
   setTimeout(() => {
     var rand = Math.round(Math.random() * 100);
     if (rand > 20) {
       resolve("Pedido realizado correctamente");
     } else {
       reject("Error al procesar el pedido");
     }
   }, 2500);
 }

/**
 * Función verifica compra
 * Sin parámetros
 * @return Promise
 */
function verifica_compra() {
 return new Promise(verifica_direccion);
}

/**
 * Función pedido
 * Sin parametros
 * @return Promise
 */
 function pedido() {
   return new Promise(realiza_pedido)
 }

/**
 * Funcion verificado
 * @param resultado Texto resultado
 * Muestra por la consola el resultado
 */
function verificado(resultado) {
  console.log("VERIFICADO: ", resultado);
  return pedido();
}

 /**
  * Funcion error
  * @param error Texto de error
  * Muestra por la consola el error
  */
function error(error) {
  console.log("ERROR: ", error);
}

// const verificacion = verifica_compra();
$(document).ready(function() {

  $("#pedido").on("click", () => {
    direccion = $("#direccion").val();
    const verif = verifica_compra();
    verif
      .then((resultado) => {
        console.log("VERIFICADO: ", resultado);
        return pedido();
      })
      .then((response) => {
        console.log("PEDIDO: ", response);
      })
      .catch(error);
  });

})
