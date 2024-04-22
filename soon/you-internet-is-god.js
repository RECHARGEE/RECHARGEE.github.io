      // Función para mostrar un mensaje estilo Toast
      function mostrarToast(mensaje) {
        var toast = document.getElementById("toast");
        toast.textContent = mensaje;
        toast.style.display = "block";
        // Oculta el Toast después de 3 segundos
        setTimeout(function () {
          toast.style.display = "none";
        }, 3000);
      }

      // Variable para almacenar el estado anterior de la conexión
      var conexionAnterior = true; // Se asume que al cargar la página está conectado

      // Función para comprobar la conexión
      function comprobarConexion() {
        // Verifica si el navegador está online
        if (navigator.onLine) {
          // Si previamente estaba desconectado, muestra el Toast de conexión restaurada
          if (!conexionAnterior) {
            mostrarToast("¡Conexión restaurada!");
          }
          conexionAnterior = true;

          // Espera 1 segundo y luego muestra el icono de conexión estable
          setTimeout(function () {
            document.getElementById("internet-ok").style.display = "block";
            document.getElementById("internet-bad").style.display = "none";
          }, 1000); // Espera 1 segundo antes de mostrar el icono de conexión estable
        } else {
          // Si previamente estaba conectado, muestra el Toast de conexión perdida
          if (conexionAnterior) {
            mostrarToast("¡Conexión perdida!");
          }
          conexionAnterior = false;

          // Espera 2 segundos y luego muestra el icono de sin conexión
          setTimeout(function () {
            document.getElementById("internet-ok").style.display = "none";
            document.getElementById("internet-bad").style.display = "block";
          }, 2000); // Espera 2 segundos antes de mostrar el icono de sin conexión
        }
      }

      // Llama a la función al cargar la página para comprobar la conexión inicialmente
      comprobarConexion();

      // Configura un evento para detectar cambios en la conexión
      window.addEventListener("online", comprobarConexion);
      window.addEventListener("offline", comprobarConexion);
