// Get the language button
const langBtn = document.getElementById("langBtn");

// When the button is clicked, toggle the "show-english" class on the body
langBtn.addEventListener("click", function () {
  document.body.classList.toggle("show-english");

  // Change the button text depending on the current language
  if (document.body.classList.contains("show-english")) {
    langBtn.textContent = "AR";
  } else {
    langBtn.textContent = "EN";
  }
});
