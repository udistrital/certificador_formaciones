document.addEventListener("DOMContentLoaded", () => {
  const btnCerrarSesion = document.getElementById("header__cerrarSesion");
  btnCerrarSesion.addEventListener("click", (e) => {
    sessionStorage.clear();
    window.location.reload();
  });
});
