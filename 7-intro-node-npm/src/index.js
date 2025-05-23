
// FORMA 1
/* const tareas = require("./tareas")
const objetos = require("./objetos")

console.log(tareas.mostrarTitulo())
console.log(tareas.mostrarMensaje())
console.log(objetos.user.especialidad)

// Con Desestructuración ...
const {mostrarTitulo, mostrarMensaje} = require("./tareas")

console.log(mostrarTitulo())
console.log(mostrarMensaje()) */

// FORMA 2
import { mostrarTitulo, mostrarMensaje } from "./tareas";
import { user } from "./objetos";

console.log(mostrarTitulo())
console.log(mostrarMensaje())
console.log(user.especialidad)

// requiere incluir en package.json ▶️ "type": "module"
