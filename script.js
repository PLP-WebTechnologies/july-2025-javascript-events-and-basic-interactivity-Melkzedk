// Get references to the button and message paragraph
const button = document.getElementById("showMessageBtn");
const message = document.getElementById("message");

// Add click event listener to toggle message visibility
button.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// Get the toggle button
const toggleBtn = document.getElementById("modeToggle");

// Add click event listener
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

