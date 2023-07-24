/* assets/js/theme-toggle.js */
function switchTheme(event) {
  if (event.target.checked) {
    document.body.classList.add("dark-theme");
    elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      el.classList.add("dark-theme");
    });
    localStorage.setItem("theme", "dark"); // add this
  } else {
    document.body.classList.remove("dark-theme");
    elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      el.classList.remove("dark-theme");
    });
    localStorage.setItem("theme", "light"); // add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
document.addEventListener("DOMContentLoaded", function () {
  if (currentTheme) {
    if (currentTheme === "dark") {
      elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        el.classList.add("dark-theme");
      });
      document.body?.classList.add("dark-theme");
      document.querySelector("#theme-switch").checked = true;
    }
  }
});
