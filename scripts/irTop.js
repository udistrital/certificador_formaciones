window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    document.getElementById("nav-menu-top").style.display = "block";
  } else {
    document.getElementById("nav-menu-top").style.display = "none";
  }
});
document.getElementById("nav-menu-top").addEventListener(
  "click",
  (e) => {
    console.log("gool");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el desplazamiento sea suave
    });
  },
  true
);
