
// Problema: Gestión de una Biblioteca de Libros

// Datos iniciales de libros en formato JSON
// Objeto biblioteca con propiedad libros (array de objetos)
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos asincrónica (simular la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Funciones para interactuar con el inventario:
// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`El libro "${titulo}" ha sido agregado exitosamente a la biblioteca.`)
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        biblioteca.libros.forEach( libro => {
            if (libro.titulo.toLocaleLowerCase() === titulo.toLowerCase()) {
                libro.disponible = nuevoEstado;
                console.log(`El libro "${libro.titulo}" ahora se encuentra ${nuevoEstado ? 'Disponible' : 'Prestado'}.`)
            }
        } )
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
//mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);

agregarLibro("Almendra", "Won-Pyung Sohn", "Ficción", false);
mostrarLibros();


// .........................................
// Notas de Clase

// CALLBACKS ...............................

// Callbacks: funciones que se pasan como argumentos a otras funciones.
// Ejemplo básico de Callback
/* function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse); */


// Función que opera dos números (sin callback)
/* function calcular (num1, num2, tipoCalculo) {
    if (tipoCalculo === "suma") {
        return num1 + num2
    } else if (tipoCalculo === "multiplicacion") {
        return num1 * num2
    }
}

console.log( calcular(3,2,"multiplicacion") ) */


// Función que opera dos números (con callback)
/* function sumar (a,b) {
    return a + b
}
function multip (a,b) {
    return a * b
}
function mensaje (a,b) {
    console.log(`Tus números son: ${a} y ${b}`)
}
function calcular (num1, num2, callback) {
    // Validar si un callback es una función antes de ejecutarlo
    if (typeof callback === "function") {
        return callback(num1,num2)
    }
}

console.log( calcular(2,3,mensaje) )


// También se pueden usar funciones anónimas en lugar de llamar funciones externas
console.log( calcular(2,3, (a,b) => {
    return "Resultado: " + (a*b)
}) )
 */

// setTimeout se puede usar para simular conexiones a APIs. Permite simular un retraso en la respuesta, lo que ayuda a entender cómo funcionarían las operaciones asíncronas reales.
// DOM: en addEventListener se pasa un callback que se ejecuta cuando ocurre el evento.
// Ejemplo práctico de callbacks: mostrar mensajes temporales en una interfaz de usuario. Por ejemplo, mostrar un mensaje de error durante 3 segundos después de enviar un formulario con datos incorrectos. setTimeout se puede usar para hacer desaparecer el mensaje después del tiempo especificado.
// Carga asíncrona de contenido: se sugiere usar el evento DOMContentLoaded para ejecutar código después de que el DOM esté completamente cargado. Las operaciones del DOM son asíncronas por naturaleza y forman parte de las Web APIs del navegador.


// Solución con promesa para evitar el Callback Hell
/* function tarea(ms, mensaje) {
    return new Promise( resolve, reject => {
        setTimeout( () => {
            console.log(mensaje)
            resolve()
        }, ms )
    } )
}

tarea(1000, "Primera tarea completada")
.then( () => tarea(1000, "Segunda tarea completada") )
.then( () => tarea(1000, "Tercera tarea completada") ) */


// JSON Y MANEJO DE DATOS .......................

// Convertir un objeto JSON a javascript

/* const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25

console.log(typeof jsonData) */

// jsonData es un string (texto), por lo que no permite directamente acceder a las propiedades usando, por ejemplo, ".nombre". Se debe hacer la conversión anterior.

// Convertir un objeto de JavaScript a JSON

/* const estudiante = {
    nombre: "Ana",
    edad: 22,
    esEstudiante: true,
    materias: ["Historia", "Inglés", "Literatura"]
  };
  
  const jsonString = JSON.stringify(estudiante);
  
  console.log(typeof jsonString); */


// Otro ejemplo: 

/* const formData = {
    nombre: freshForm.nombre.value,
    apellido_paterno: freshForm.apellido_paterno.value,
    apellido_materno: freshForm.apellido_materno?.value || '',
    edad: freshForm.edad.value,
    correo: freshForm.correo.value,
    contrasena: freshForm.contrasena.value,
    rol: freshForm.rol.value
};
// Petición
const response = await fetch('/Project-Manager/api/usuarios.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
}); */



/* const usuario = {
    nombre: "Lucía",
    edad: 30,
    color: "blanco"
};
  
// Registrar datos (Guardar) en localstorage
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar datos de localStorage
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  
console.log(usuarioGuardado.nombre); */  

// Ej. de uso de localStorage: mantener sesiones de usuario entre diferentes páginas de una aplicación web.

// ⚠️ En Navegador: Inspeccionar > Application > Storage > Local storage
