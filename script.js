document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Add the 'hidden' class to fade out the splash screen
    // splashScreen.classList.add("hidden");

    setTimeout(function () {
      splashScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  }, 2000);
});
