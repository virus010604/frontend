const navbarNav = document.querySelector(".navbar-nav");
//sesudah
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// tombol search
const searchform = document.querySelector(".searchform");
document.querySelector("#searcha").onclick = () => {
  searchform.classList.toggle("active");
};

const searchbox = document.querySelector("searchbox");
document.addEventListener("click", function (e) {
  if (!searcha.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
});

//klik di luar sidebar
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
