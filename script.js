const burgerIcon = document.querySelector(".icon-nav");
const navLinks = document.querySelector(".nav-links ul");
burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("showLinks");
});
