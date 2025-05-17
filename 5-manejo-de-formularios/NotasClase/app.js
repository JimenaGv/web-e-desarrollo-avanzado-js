const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío automático del formulario

  // Capturar datos del formulario
  // event captura todo lo de submit

  /* const name = document.getElementById("name").value;
  const email = document.getElementById("email").value; */

  /* const checkbox = document.querySelector('input[type="checkbox"]'); */
  /* const checkbox = document.getElementsByName("intereses"); */ // Para obtener todos los valores seleccionados

  /* console.log(checkbox.checked); // true o false
  console.log(checkbox.value);
 */
  /* const selectedRadio = document.querySelector('input[name="genero"]:checked'); */

  /* console.log(selectedRadio.value); // "masculino", "femenino" o "otro" */

  // Forma organizada:
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    intereses: document.querySelector('input[type="checkbox"]'),
    genero: document.querySelector('input[name="genero"]:checked').value,
    ciudad: document.getElementById('ciudad').value,
    fecha: document.getElementById('fecha').value,
    hora: document.getElementById('hora').value,
    archivo: document.getElementById('archivo').files[0] // Referencia al elemento. archivo es un objeto; files es un array.
  };
  console.log(data.intereses.checked); // true o false
  console.log(data.intereses.value);
  console.log(data.genero); // "masculino", "femenino" o "otro"
  console.log(data.ciudad); // Valor de la opción seleccionada
  console.log(`Fecha: ${fecha}, Hora: ${hora}`);
  console.log(archivo.name); // Nombre del archivo

  // Ejemplos de validación

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;

  // 💡Podemos tener todas las expresiones regulares en un solo objeto
  /* let reggex = {
    noSimbols : /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/
  } */

  //console.log( regex.test(name.trim()) )

  // Desestructuración del objeto data
  const { name, email } = data;

  if (!name || !regex.test(name.trim())) {
    alert("Por favor, llena el campo de 'Nombre' con carácteres válidos.");
    return;
  } // "" = false; "pepe" = true

  if (!email.includes("@")) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }

  console.log(`Nombre: ${name}, Correo: ${email}`);

  // Para el envío de datos se usa fetch y el método POST
  /* fetch("https://api.ejemplo.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Datos enviados:", data))
    .catch((error) => console.error("Error:", error)); */

  // Para limpiar el formulario
  form.reset();
});
