
// Problema: Simulador de Pedidos en una Cafetería

// Elementos HTML
const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

// Evento al hacer clic en el botón
// 1. Generar objeto pedido con identificador nuevo y estado inicial "En Proceso"
// 2. Mostrar pedido en pantalla
// 3. Después de un tiempo aleatorio, el estado cambia a "Completado"
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: '🥣 En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Funciones
// Recepción de un nuevo pedido
// Crear nuevo elemento <li>, asignar ID y mostrar en pantalla 
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
};

// Actualización visual del estado de los pedidos
// Buscar pedido en la lista por su ID, si existe modificar el estado
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
};

// Simulación de la preparación de pedidos
// Esperar a que la promesa se resuelva en un tiempo aleatorio entre 0 y 10 segundos para cambiar el estado a "Completado"
async function processOrder(order) {
    // setTimeout para simular el tiempo de preparación
    // Promise para manejar la finalización de los pedidos
    // async/await para actualizar el estado del pedido a "Completado" en tiempo real
    await new Promise ( resolve => {
        setTimeout( resolve, Math.random()*10000 )
    } );

    updateOrderStatus(order,"✅ Completado")

};



// NOTAS DE CLASE

// Ejemplo de funcionamiento del Call stack
// Estructura de datos tipo pila que almacena las funciones a ejecutar
/* function multiplicar (x,y) {
    return x*y
} // Tercer paso; devuelve el resultado de la operación

function mostrarCuadrado(x){
    let r = multiplicar(x,x) // Segundo paso, requiere del tercero para resolverse, por lo que es undefined en el momento
    console.log(r) // Cuarto paso; con el resultado del segundo
}

mostrarCuadrado(5) // Primer paso cargado en la pila // Último en ejecutarse */

// Visualizar pasos con: https://pythontutor.com/javascript.html#mode=edit


// ERROR: Stack overflow
// Es como un loop while sin una condición
/* function h () {
    h()
}

h() */


// Web API: funcionalidades proporcionadas por el navegador y no son parte del lenguaje JavaScript en sí, como setTimeout, fetch, y manipulación del DOM.
// Las tareas asíncronas se manejan fuera del Call Stack principal, usando el Callback Queue.
// El Event Loop verifica constantemente si el Call Stack está vacío para mover tareas del Callback Queue al Call Stack.

// Ejemplo código asincrono con uso de web API del navegador

/* console.log('Inicio');

setTimeout(() => {
  console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin'); */

// promise
/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado)); */

// async await
/* async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos(); */


// Postman
// Herramienta para probar APIs y simular peticiones HTTP
// Se puede iniciar sesión con la cuenta de GitHub
// Para acceder a los datos es importante verificar cómo la API devuelve los resultados dentro del formato JSON

/* fetch('https://rickandmortyapi.com/api/character/?page=19')

    .then(response => response.json())

    .then(data => console.log(data)); */

