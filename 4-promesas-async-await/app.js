
// Problema: Sistema de Reservas para un Restaurante

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si hay suficientes mesas disponibles, resuelve la promesa,
       if (mesasDisponibles >= mesasSolicitadas) {

        if (mesasSolicitadas === 1) {
          resolve(`La mesa solicitada está disponible.`)
        } else {
        resolve( `Las ${mesasSolicitadas} mesas solicitadas se encuentran disponibles.`)}

       } else if (mesasDisponibles === 0) {
            reject(`Lo sentimos, no hay mesas disponibles en este momento.`)
          } else {reject(`Lo sentimos, sólo contamos con ${mesasDisponibles} mesas disponibles.`)}// de lo contrario, se rechaza.
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula un envío de correo. Usa Math.random() para simular si el correo se envió correctamente o si ocurrió un error.
      const valorAleatorio = Math.floor(Math.random() * 10) // Valores entre 0 y 9
      if (valorAleatorio >= 0 && valorAleatorio < 5) {
        reject(`Lo sentimos, ${nombreCliente}, ha ocurrido un error al enviar tu correo de confirmación. Por favor, inténtalo de nuevo. ✉️❌`)
      } else {
        resolve(`¡Gracias por tu reservación, ${nombreCliente}! Tu correo de confimación ha sido enviado con éxito. ✉️✔️`)
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {

    // Verificar que el número de mesas solicitadas sea válido
    if (isNaN(mesasSolicitadas) || mesasSolicitadas === 0) {
      console.log("Por favor, ingresa un número de mesas válido.")
      return
    }

    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    
    // Si hay mesas disponibles, llama a la función para enviar la confirmación.
    console.log(disponibilidad);

    console.log("Enviando correo de confirmación de la reservación ...")
    const correo = await enviarConfirmacionReserva(nombreCliente)
    console.log(correo);

    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("⚠️ Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada
const nombre = prompt("Nombre del Cliente: ")
const mesas = Number(prompt("Número de mesas a reservar: ")) // Texto se convierte en NaN
hacerReserva(nombre, mesas);



// .................................................

// NOTAS DE CLASE 📝

// PROMESAS
// Objeto que representa la finalización o fracaso de una operación asíncrona
// fetch trabaja con promesas

// Ejercicio 🍔
// Relación de tiempo de ejecución y proceso
// Encadenamiento de promesas (.then)
// Manejo de errores (.catch)
// Finally (es independiente de lo que pase)

// En cuántos pasos se prepara una hamburguesa (.then):
// 1. Reunir los ingredientes (3 s)
// 2. Cocinar la carne (2 s)
// 3. Calentar el pan (1 s)
// 4. Armar (2 s)
// 5. Servir (1 s)

/* let tiendaAbierta = false // o true

let pedido = (tiempo, proceso) => {
  return new Promise( (resolve, reject) => {
    if (tiendaAbierta) {
      setTimeout( () => {
        resolve( proceso() )
      }, tiempo )
      
    } else {
      reject( console.log("Tienda Cerrada") )
    }

  } )
}

pedido( 3000, () => console.log("Ingredientes reunidos correctamente 🥬") )
.then( () => {
  return pedido( 2000, () => console.log("La carne ha sido cocinada 🍖") )
} ) // Es importante que retorne porque el siguiente then depende de ello
.then( () => {
  return pedido( 1000, () => console.log("El pan se calentó correctamente 🫓") )
} )
.then( () => {
  return pedido( 2000, () => console.log("La hamburguesa se ha armado 🍔") )
} )
.then( () => {
  return pedido( 1000, () => console.log("Hamburguesa servida. Disfrútala! ✨") )
} )
.catch( () => {
  console.log("El cliente se ha ido 😭")
} ) // Manejo de errores // Un error entre los then también envía directamente a catch
.finally( () => {
  console.log("Jornada finalizada, la tienda ha cerrado 🚫")
} ) */


// ASYNC/AWAIT
// async siempre devuelve una promesa (incluso si no se usa directamente)
// await espera que la promesa se resuelva o rechace

// Ventaja sobre .then: Mejora la legibilidad y estructura del código asícnrono

// try, catch, finally

// Ejemplo 🍔
/* let tiendaAbierta = true

async function pedido () {
    try{
        await fakeFunction
    }
    catch(error){
        console.log("fakeFunction no existe",error)
    }
    finally{
        console.log("Código que siempre se ejecuta")
    }
}

pedido ()
.then( () => {
    console.log("Texto después del async await")
} )
 */

/* 
// Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Juan' });
      } else {
        reject('Usuario no encontrado');
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
  try {
    const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
    console.log(usuario); // Muestra los datos del usuario
  } catch (error) {
    console.log(error); // Maneja el error si la promesa es rechazada
  }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1
 */
