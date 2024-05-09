document.querySelector(".nav-menu-top").style.display = "none";
window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    document.querySelector(".nav-menu-top").style.display = "block";
  } else {
    document.querySelector(".nav-menu-top").style.display = "none";
  }
});
document.querySelector(".nav-menu-top").addEventListener(
  "click",
  (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el desplazamiento sea suave
    });
  },
  true
);
