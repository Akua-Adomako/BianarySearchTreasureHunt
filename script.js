// script.js
document.addEventListener("DOMContentLoaded", () => {
  const arraySize = 9; // Fixed array size
  const treasureIndex = Math.floor(Math.random() * arraySize); // Random treasure position
  const visualizationDiv = document.getElementById("visualization");
  const midInput = document.getElementById("midInput");
  const guessButton = document.getElementById("guessButton");
  const hintDiv = document.getElementById("hint");
  const scoreDiv = document.getElementById("score");
  let attempts = 0;

  // Generate treasure boxes
  for (let i = 0; i < arraySize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("data-index", i);
    visualizationDiv.appendChild(box);
  }

  // Game logic
  guessButton.addEventListener("click", () => {
    const mid = parseInt(midInput.value, 10);

    // Validate input
    if (isNaN(mid) || mid < 0 || mid >= arraySize) {
      hintDiv.textContent = "❌ Invalid guess! Please choose a valid index.";
      return;
    }

    attempts++;
    scoreDiv.textContent = `Attempts: ${attempts}`;

    const boxes = document.querySelectorAll(".box");

    // Reset box styles
    boxes.forEach((box) => box.classList.remove("open"));

    // Check guess
    if (mid === treasureIndex) {
      boxes[mid].classList.add("open");
      hintDiv.textContent = "🎉 You found the treasure!";
      guessButton.disabled = true; // End the game
    } else if (mid < treasureIndex) {
      hintDiv.textContent = "📈 The treasure is further to the right.";
    } else {
      hintDiv.textContent = "📉 The treasure is further to the left.";
    }
  });
});
