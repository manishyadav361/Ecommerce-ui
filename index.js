const navbar = document.querySelector(".menu");
const navlink = document.querySelector(".nav-link");
const navlinks = document.querySelectorAll(".nav-link h3");

var flag = false;
navlink.classList.add("toggle-remove");

navbar.addEventListener("click", function () {
  if (flag) {
    navlink.classList.add("toggle-remove");
    flag = false;
  } else {
    navlink.classList.remove("toggle-remove");
    flag = true;
  }
});

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navlink.classList.add("toggle-remove");
    flag = false;
  });
});

AOS.init({ duration: 1000 });

const myElement = document.getElementById("demo");
