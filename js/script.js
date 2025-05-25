document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");
  
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-theme");
  
      if (body.classList.contains("light-theme")) {
        icon.textContent = "🌞"; // switch to light mode
      } else {
        icon.textContent = "🌙"; // switch to dark mode
      }
    });
  });
  
