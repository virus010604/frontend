const navbarNav = document.querySelector(".navbar-nav");
//sesudah
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
