const container = document.getElementById("container");
const darkMode = document.getElementById("dark-mode");
const logo = document.getElementById("logo");
const search = document.getElementById("search");
const arrow = document.querySelector(".animate-bounce");
darkMode.addEventListener("click", () => {
  container.classList.toggle("bg-black");
  container.classList.toggle("text-white");
  logo.style.backgroundColor = "black";
  search.classList.toggle("text-white");
  darkMode.classList.toggle("text-white");
  arrow.classList.toggle("text-white");
});
