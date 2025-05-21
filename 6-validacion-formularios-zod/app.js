// Proyecto: Validación de formularios con Zod

// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  // El nombre debe ser una cadena no vacía.
  name: z
    .string()
    .min(1, "El campo 'Nombre' no puede estar vacío.")
    .refine((value) => !/\d/.test(value), {
      message: "Por favor, escribe un nombre válido.",
    }),
  // Valida que el correo tenga el formato correcto.
  email: z
    .string()
    .min(1, "El campo 'Correo Electrónico' no puede estar vacío.")
    .email("Por favor, escribe un correo válido."),
  // La contraseña debe tener al menos 6 caracteres.
  password: z.string().min(6, "La contraseña debe tener mínimo 6 carácteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Capturamos los valores ingresados
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  // Validación con try/catch
  /* try {
    // Validar el esquema.
    registerSchema.parse(formData);
    // alert("¡Registro exitoso!");
    document.getElementById("success").innerHTML = "¡Registro exitoso! 🎉"

    // Limpiar formulario después de mandar el registro
    document.getElementById("registerForm").reset();

    // Limpiar mensajes de error
    document.getElementById("errors").innerHTML = "";
  } catch (error) {
    // Muestra los mensajes de error en la página.
    document.getElementById("errors").innerHTML = error.errors
      .map((e) => e.message)
      .join("<br>");
  } */


  // Validación con safeParse
  const mensaje = registerSchema.safeParse(formData);
  console.log(mensaje)

  if (mensaje.success){
    document.getElementById("success").innerHTML = "¡Registro exitoso! 🎉"

    // Limpiar formulario después de mandar el registro
    document.getElementById("registerForm").reset();

    // Limpiar mensajes de error
    document.getElementById("errors").innerHTML = "";

    // Quitar mensaje de éxito en 5 segundos
    setTimeout(() => document.getElementById("success").innerHTML = "", 5000)

  } else{
    document.getElementById("errors").innerHTML = mensaje.error.errors
      .map((e) => e.message)
      .join("<br>");
  }

});
