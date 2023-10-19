const progressBar = document.querySelector('.progress-bar');
const centeredText = document.querySelector('.centered-text');
let progressWidth = 0;  // Valor inicial

// Define una función para ocultar la barra de progreso
function hideProgressBar() {
    progressBar.style.display = 'none';
}

// Define una función para aumentar el valor de la barra de progreso de manera aleatoria
function increaseProgressRandomly() {
    if (progressWidth < 100) {
        // Genera un valor aleatorio entre 1 y 10 y agrégalo al progreso
        const randomIncrement = Math.floor(Math.random() * 10) + 1;
        progressWidth = Math.min(100, progressWidth + randomIncrement);

        progressBar.style.width = progressWidth + '%';
        progressBar.setAttribute('aria-valuenow', progressWidth);

        if (progressWidth >= 100) {
            hideProgressBar();
            centeredText.style.display = 'block';
        }
    }
}

// Configura un temporizador para aumentar gradualmente la barra de progreso de manera aleatoria
const timer = setInterval(increaseProgressRandomly, 100);  // Aumenta cada 200 milisegundos (5 veces por segundo)

// Detén el temporizador cuando se completa la barra de progreso
if (progressWidth >= 100) {
    clearInterval(timer);
    hideProgressBar(); // Asegúrate de que la barra de progreso esté oculta por completo
}
