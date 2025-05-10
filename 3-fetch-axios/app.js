
// Problema: Consumo de APIs con Fetch y Axios

// Elementos HTML
const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

// Obtener datos de la API y mostrarlos en el container utilizando...

// FETCH
fetchBtn.addEventListener('click', () => {
  fetch('https://api.artic.edu/api/v1/artworks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      //console.log(data.data)
      renderResults(data.data)
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});


// AXIOS
axiosBtn.addEventListener('click', () => {
  axios.get('https://api.artic.edu/api/v1/artworks')
    .then(response => {
      const data = response.data;
      renderResults(data.data)
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Función de renderizado:
function renderResults(obras) {
  dataContainer.innerHTML = '';
  obras.forEach(obra => {
    const obraElement = document.createElement('div');
    // Obtener: título de la obra, nombre del artista e imagen correspondiente
    obraElement.innerHTML = `
      <h3>${obra.title}</h3>
      <p>${obra.artist_title === null ? "Unknown artist" : obra.artist_title}</p>
      <img src="https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg" alt="${obra.name}">
    `;
    dataContainer.appendChild(obraElement);
  });
}


// ..............................................
// Notas de Clase 📝

// FETCH
// Solicitudes HTTP de forma asíncrona
// Devuelve una promesa
// then: cuando es exitosa, usa datos resueltos
// catch: cuando falla, detecta el error y hace algo

// Solicitud tipo GET
// ("enlace de la petición")
/* fetch( "https://jsonplaceholder.typicode.com/users" )
  .then( respuesta => respuesta.json() ) */ // Convierte en formato JSON
  /* .then ( respuesta => console.log("Status", respuesta.status) ) */ // Obtiene un objeto del cual se puede acceder a sus propiedades como Status
  /* .then( data => console.log(data) ) */ // Imprime la información
  /* .catch( error => console.error("El error es: ", error) ) */ // Captura e imprime el error


// Versión completa
/* fetch( "https://jsonplaceholder.typicode.com/users" )
  .then( respuesta => {

    if( !respuesta.ok ){
      throw new Error(`Error HTTP Status: ${respuesta.status}`)
    } // Manejo directo del error

    return respuesta.json()
  } )
  .then( data => console.log(data) )
  .catch( error => console.error("El error es: ", error) )
 */

// Ejercicio
/* fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP Status: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((data) => console.log(data.results)) // Para acceder directamente a los resultados
  .catch((error) => console.error("El error es: ", error)); */


// Fetch con Async/Await (Otra sintaxis)
/* async function mostrarDatos (){
  try {

    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users") // Espera a que el fetch se resuelva para que respuesta tenga un valor

    if (!respuesta.ok) {
      throw new Error(`Error HTTP Status: ${respuesta.status}`);
    }

    const data = await respuesta.json()

    console.log(data)

  } catch (error) {
    console.error(`Hay un error ${error}`)
  }
}

mostrarDatos() */


// Solicitud tipo POST
// finally da un mensaje final o un código a ejecutar independientemente de si la promesa falla o no
/* fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json" // Establece cómo se manda la info
  },
  body: JSON.stringify({
    nombre: "admin",
    correo: "a@correo.com"
  }) // Lo que se envía
})
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
  .catch()
  .finally() */



// AXIOS

// Ofrece ventajas frente Fetch como una sintaxis más reducida
// Requiere instalación o vinculación
// Incorporación con CDN en archivo HTML

/* axios.get("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => {
    console.log(respuesta.data)
  }) // Data ya está directamente en el objeto, por lo que se ahorra un paso comparado con fetch
  .catch(err => {
    console.error(`Error: ${err}`)
  }) */


// Axios GET con Async/Await
/* async function mostrarUsuarios () {
  try {
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(respuesta.data)
  } catch (error) {
    console.error(`Error: ${err}`)
  }
}

mostrarUsuarios() */

// Axios POST
/* axios.post("ttps://jsonplaceholder.typicode.com/users", {
  nombre: "admin",
  correo: "admin@correo.com"
})
.then(respuesta => {
  console.log(respuesta.data)
})
.catch(error => {
  console.error(`Error: ${error}`)
}) */
