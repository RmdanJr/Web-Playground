const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const nav_ul = document.querySelector("nav ul");
const nav_ul_lis = document.querySelectorAll("nav ul li");
const nav_ul_li_as = document.querySelectorAll("nav ul li a");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let active_link = document.querySelector(".active");

displayMenu = (event) => {
  nav.classList.toggle("open-nav");
  nav_ul.classList.toggle("open-ul");
  for (const li of nav_ul_lis) {
    li.classList.toggle("open-li");
  }
  for (const a of nav_ul_li_as) {
    a.classList.toggle("open-a");
  }
  main.classList.toggle("hide");
  footer.classList.toggle("hide");
};

menu.addEventListener("click", displayMenu);

for (const a of nav_ul_li_as) {
  a.addEventListener("click", (event) => {
    active_link.classList.remove("active");
    event.target.classList.add("active");
    active_link = event.target;
  });
}
