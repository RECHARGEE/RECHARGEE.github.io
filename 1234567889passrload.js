let score = 0;
let boostMultiplier = 100;
let boosterCount2x = 0;
let boosterCount3x = 0;

// Función para actualizar la puntuación mostrada en la pantalla
function updateScore() {
  document.getElementById("score").innerText = score;
}
updateScore();
// Función para mostrar mensajes estilo toast en el footer
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";
  setTimeout(function () {
    toast.style.display = "none";
  }, 3000); // Ocultar el toast después de 3 segundos
}

// Función para manejar el evento de toque/clic en el área de incremento
document.getElementById("touchArea").addEventListener("click", function () {
  score += 1 * boostMultiplier; // Aumenta la puntuación según el multiplicador de boost
  updateScore(); // Actualiza la puntuación mostrada
});

// Función para comprar boosters
function buyBooster(multiplier, baseCost) {
  let boosterCost =
    baseCost * Math.pow(2, multiplier === 2 ? boosterCount2x : boosterCount3x);

  if (
    score >= boosterCost &&
    (multiplier === 2 ? boosterCount2x : boosterCount3x) < 3
  ) {
    score -= boosterCost;
    boostMultiplier *= multiplier;

    if (multiplier === 2) {
      boosterCount2x++;
      document.getElementById(
        "booster2"
      ).innerText = `Comprar x2 Booster (Precio: ${
        20 * Math.pow(2, boosterCount2x)
      })`;
      if (boosterCount2x === 3) {
        document.getElementById("booster2").disabled = true;
        showToast("¡Ya alcanzaste el límite de compra para el booster x2!");
      }
    } else if (multiplier === 3) {
      boosterCount3x++;
      document.getElementById(
        "booster3"
      ).innerText = `Comprar x3 Booster (Precio: ${
        1300 * Math.pow(2, boosterCount3x)
      })`;
      if (boosterCount3x === 3) {
        document.getElementById("booster3").disabled = true;
        showToast("¡Ya alcanzaste el límite de compra para el booster x3!");
      }
    }

    updateScore();
    showToast(`¡Compraste un booster x${multiplier}!`);
  } else if ((multiplier === 2 ? boosterCount2x : boosterCount3x) >= 3) {
    showToast(
      `¡Ya alcanzaste el límite de compra para el booster x${multiplier}!`
    );
  } else {
    showToast("¡No tienes suficientes puntos para comprar este booster!");
  }
}
