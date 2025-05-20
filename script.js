const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});