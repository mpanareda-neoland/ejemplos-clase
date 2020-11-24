
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

function factoriaPersonas(nombre, apellido, edad, salario) {
  return {
    _nombre: nombre,
    _apellido: apellido,
    _edad: edad,
    _salario: salario,
    get nombre_completo() {
      return this._nombre + " " + this._apellido;
    },
    sube_salario() {
      this._salario += 2000;
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
    },
    get apellido() {
      return this._apellido;
    },
    get edad() {
      return this._edad;
    }
  }
}

class Persona {
  constructor(n, a, sueldo) {
    this.nombre = n;
    this.apellido = a;
    this.sueldo = sueldo;
  }
  get nombrecompleto() {
    return this.apellido + ", " + this.nombre;
  }
  static sueldo_base() {
    return 2000;
  }
}

class Comercial extends Persona {
  constructor(nombre, apellido, sueldo, incentivo) {
    super(nombre, apellido, sueldo);
    this.incentivo = incentivo;
  }
}

class Junior extends Comercial {
  constructor(nombre, apellido, sueldo, incentivo, periodo) {
    super(nombre, apellido, sueldo, incentivo);
    this.periodo = periodo;
  }
}

class Senior extends Comercial {
  constructor(nombre, apellido, sueldo, incentivo) {
    super(nombre, apellido, sueldo, incentivo);
  }
}

class Developer extends Persona {
  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido, sueldo);
  }
}

const persona = new Persona("Marçal", "Panareda", Persona.sueldo_base());
const comercial = new Comercial("Lola", "Lopez", 10000, 5000);
const desarrollador = new Developer("Joaquin", "Gomez", 100);

console.log("persona generica", persona, persona.nombrecompleto);
console.log("comercial", comercial, comercial.nombrecompleto);
console.log("desarrollador", desarrollador, desarrollador.nombrecompleto);

const persona1 = factoriaPersonas("Marçal", "Panareda", 36, 5000);
const persona2 = factoriaPersonas("Lola", "Lopez", 44, 10000);


console.log(persona1, persona1.nombre, persona1["_apellido"], persona1.nombre_completo);
persona1.sube_salario();
console.log(persona1.salario);
persona1.salario = "alto";
console.log(persona1.salario);
persona1.sube_salario();
console.log(persona1.salario);



console.log(persona2);

// const salario = persona1.salario;
const { salario, edad } = persona1;
console.log(salario);
// const edad = persona1.edad;
//&const { edad } = persona1;
console.log(edad);


const contrata = (...nombres) => {
  console.log(nombres);
  // if (nombre1 !== undefined) {
  //   const persona_nueva1 = factoriaPersonas(nombre1, "", 20, 100);
  //   console.log("Nuevo: ", persona_nueva1);
  // }
  // if (nombre2 !== undefined) {
  //   const persona_nueva2 = factoriaPersonas(nombre2, "", 20, 100);
  //   console.log("Nuevo: ", persona_nueva2);
  // }
}

contrata("Pepito", "Juanita", "Pablito", "asd", "dlskfha");


/*function notifica(persona) {
  $.ajax({
    url: "url/para/notificar"
  })
  .done(datos) {
    console.log(datos);
    return datos;
  }
  .fail(error) {
    console.log(error);
    return error;
  };
}*/
function notifica(persona) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let rand = Math.round(Math.random() * 100);
      if (rand > 30) {
        console.log("han pasado 2 segundos");
        resolve("2 segundos después");
      } else {
        reject("Ha ocurrido un error");
      }


    }, 2000);
  });
}

console.log("ANTES");

const resultado = notifica(persona);
resultado
  .then((response) => {
    console.log("VERIFICADO", response);
  })
  .catch((error) => {
    console.log("ERROR", error)
  });

console.log("DESPUES");
