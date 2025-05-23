
import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const botonReiniciar = document.getElementById('reiniciar');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        botonReiniciar.style.display = 'block'; // Mostrar el botón para jugar de nuevo
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});

// Evento para reiniciar el juego
botonReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Nuevo número secreto
    mensaje.textContent = '';
    inputNumero.value = '';
    botonReiniciar.style.display = 'none'; // Ocultar el botón nuevamente
});
