// Proyecto: Formulario para Registro de Eventos

document
  .getElementById("registroEvento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Objeto con variables a utilizar
    const data = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      telefono: document.getElementById("telefono").value,
      intereses: document.querySelectorAll('input[name="intereses"]:checked'),
      horario: document.querySelector('input[name="horario"]:checked')?.value, // se añadió "?.value" para acceder al valor seleccionado
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
    };

    // Desestructuración del objeto data
    const { nombre, correo, telefono, intereses, horario, fecha, hora } = data;

    // Validaciones básicas
    // Asegurar el llenado de los campos
    if (
      !nombre ||
      !correo ||
      !telefono ||
      intereses.length === 0 ||
      !horario ||
      !fecha ||
      !hora
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Asegurar que se envíe el nombre con mínimo un apellido
    // Expresión regular:
    // ^\D+ = Mínimo un carácter (no número) sin espacios al inicio
    // \s+ = al menos un espacio entre palabras
    // \D+$ = al menos un caracter (no número) sin espacios al final
    if (!/^\D+\s+\D+$/.test(nombre)) {
      alert("Por favor, ingresa tu nombre completo con al menos un apellido.");
      return;
    }

    // Asegurar que el número de teléfono sea válido (sólo números y exactamente 10 dígitos)
    // Expresión regular (/ = delimitadores):
    // ^ = validación desde el primer carácter
    // \d = cualquier dígito numérico
    // {10} = exactamente 10 dígitos
    // $ = final de la cadena (no más caarácteres después)
    if (!/^\d{10}$/.test(telefono)) {
      alert("Por favor, introduce un número telefónico válido (10 dígitos).");
      return;
    }

    // Asegurar que el correo sea válido (contenga un @)
    // Ya viene implícito en el formulario
    /* if ( !correo.includes('@') ) {
        alert('Por favor, introduce un correo válido.');
        return;
      } */

    // Asgurar que la fecha sea posterior al día actual
    const hoy = new Date(); // Obtener la fecha del día actual
    const fechaIngresada = new Date(fecha);
    if (fechaIngresada <= hoy) {
      alert(
        "Por favor, introduce una fecha válida (debe ser posterior al día de hoy)."
      );
      return;
    }

    // Asegurar que la hora seleccionada corresponda con el horario anteriormente seleccionado
    const rangosHorario = {
      mañana: { inicio: "06:00", fin: "12:00" },
      tarde: { inicio: "12:00", fin: "18:00" },
      noche: { inicio: "18:00", fin: "23:00" },
    };
    const rango = rangosHorario[horario]; // Obtener rango correspondiente
    if (hora < rango.inicio || hora > rango.fin) {
      alert(
        `Por favor, selecciona una hora dentro del horario seleccionado: ${rango.inicio} - ${rango.fin} h.`
      );
      return;
    }

    // Si todo está bien, se permite el "envío" del registro
    alert("Registro exitoso. ¡Gracias por registrarte!");

    // Limpiar el formulario después del "envío"
    document.getElementById("registroEvento").reset();
  });
