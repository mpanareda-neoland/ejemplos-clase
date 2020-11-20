
const prefijo = "Hola";

function saludame(nombre) {
  let saludo;
  if (nombre !== undefined) {
    //saludo = prefijo + " " + nombre;
    saludo = `${prefijo} ${nombre}`;
  } else {
    //saludo = prefijo + " desconocido!";
    saludo = `${prefijo} desconocido!`;
  }
  console.log(saludo);
}

function saludame_mejor(nombre = "desconocido") {
  console.log(`${prefijo} ${nombre}`);
}

saludame();
saludame_mejor("Marçal");

/**
 * Función nombre_completo
 * @param nombre string
 * @param apellido string
 * @returns nombre apellido
 */
// function () {}
// () => {}

// function nombre_completo(nombre, apellido) {
//   // let nc;
//   // nc = `${nombre} ${apellido}`;
//   // return nc;
//   return `${nombre} ${apellido}`;
// }
// const nombre_completo = function (nombre, apellido) {
//   return `${nombre} ${apellido}`;
// }
// const nombre_completo = (nombre, apellido) => {
//   return `${nombre} ${apellido}`;
// }
const nombre_completo = (nombre, apellido) => `${nombre} ${apellido}`;

console.log(nombre_completo("Marçal", "Panareda"));


const empleados = ["Pepe", "Luisa", "Ramon", "Maria"];
console.log("Empleados: ", empleados);

// empleados = ["Juan", "Manolito"];
empleados.push("Lola");
console.log("Empleados: ", empleados);

let num = 100;

// function incrementa (numero) {
//   return numero + 10;
// }
const incrementa = (num) => {
  num = num + 10;
  return num;
};

console.log(incrementa(num));
console.log(num);

const cambia = (lista) => {
  lista[0] = lista[0] + 100;
  return lista;
}

let mi_lista = [10, 20, 30];
let mi_otra_lista = cambia(mi_lista);
console.log(mi_otra_lista);
console.log(mi_lista);

mi_otra_lista[1] = 500;
console.log(mi_otra_lista);
console.log(mi_lista);

empleados.forEach(function(item) {
  console.log(item);
});
empleados.forEach((item) => {
  console.log(item);
});
empleados.forEach((item) => console.log(item));

//

// empleados.forEach((item, i) => {
//   empleados[i] = `Empleado: ${item}`;
// });

const empleados_copia = empleados.map(item => item);
console.log("COPIA: ", empleados_copia);

const nuevo_empleados = empleados.map((item) => {
  return `Empleado: ${item}`;
});
console.log("EMPLEADOS: ", empleados);
console.log("NUEVO EMPLEADOS: ", nuevo_empleados);

//

//const empleados_con_L = empleados.filter(item => item[0] === "L");
const empleados_con_L = empleados.filter((item) => {
  return item[0] === "L";
  //if (item.substring(0, 1) === "L") {
  // console.log(item, (item[0] === "L"));
  // if (item[0] === "L") {
  //   return true;
  // } else {
  //   return false;
  // }
});
console.log("EMPLEADOS CON L: ", empleados_con_L);

//

const empleados_en_lis = empleados.reduce((acumulador, item) => {
  return item + item + " -- " + acumulador;
});
console.log(empleados_en_lis);
console.log(empleados.join(" -- "));


// .some()
// .every()


const persona1 = {
  _nombre: "Marçal",
  _apellido: "Panareda",
  _edad: 36,
  _salario: 500000,
  nombre_completo() {
    return this.nombre + " " + this.apellido;
  },
  sube_salario() {
    this._salario += 1000;
  },
  get salario() {
    return this._salario;
  },
  set salario(val) {
    if (typeof val !== "number") {
      console.log("No es un valor correcto");
    } else {
      this._salario = val;
    }
  },
  get nombre() {
    return this._nombre;
  }
};

console.log(persona1, persona1._nombre, persona1["_apellido"], persona1.nombre_completo());
persona1.sube_salario();
console.log(persona1.salario);
persona1.salario = "alto";
console.log(persona1.salario);
persona1.sube_salario();
console.log(persona1.salario);
