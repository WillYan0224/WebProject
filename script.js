const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themebutton = document.querySelector(".theme-button i")
;

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

if(localStorage.getItem("darkMode") === "enabled")
{
  document.body.classList.add("dark-mode");
  themebutton.classList.replace("uil-moon", "uil-sun");
}
else
{
  themebutton.classList.replace("uil-sun", "uil-moon");
}

themebutton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themebutton.classList.toggle("uil-sun", isDarkMode); 
  themebutton.classList.toggle("uil-moon", !isDarkMode);
});

