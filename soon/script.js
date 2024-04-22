const audio = new Audio("./audio/chirp.mp3"); // Cambia 'ruta/al/sonido' con la ubicación real del archivo de sonido
audio.load();
// Reproducir sonido automáticamente al cargar la página
function playBackgroundSound() {
  audio.loop = true;
  audio.play();
}
function checkLoginStatus() {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    // Redirigir al usuario a la página de actualizaciones
    window.location.href = "./updates/"; // Reemplaza 'bienvenido.html' con la URL de la página a la que deseas redirigir al usuario
  }
}

// Verificar el estado de inicio de sesión al cargar la página
checkLoginStatus();
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("login-error");

    if (username === "update" && password === "") {
      // Guardar el estado de inicio de sesión
      sessionStorage.setItem("isLoggedIn", true);

      // Redirigir al usuario a la página de bienvenida
      window.location.href = "./updates/"; // Reemplaza 'bienvenido.html' con la URL de la página a la que deseas redirigir al usuario
    } else {
      errorMessage.textContent =
        "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
  });

window.onload = function () {
  playBackgroundSound();
};
