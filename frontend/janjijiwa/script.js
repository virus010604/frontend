const navbarNav = document.querySelector(".navbar-nav");
//sesudah
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// tombol search
const searchform = document.querySelector(".searchform");
const searchbox = document.querySelector("#searchbox");
document.querySelector("#searcha").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};
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
// shop
const shop = document.querySelector(".shopcart")
document.querySelector("#shopping-cart").onclick = (e) => {
  shop.classList.toggle("active");
  e.preventDefault();
};
const cart = document.querySelector("#shopping-cart")
document.addEventListener("click", function (e) {
  if (!cart.contains(e.target) && !shop.contains(e.target)) {
    shop.classList.remove("active");
  }
});