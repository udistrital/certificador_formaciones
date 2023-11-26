const $navlista = document.getElementById("nav-lista");
const $btnHamNav = document.getElementById("nav-menu-hamburguer");

$btnHamNav.addEventListener("click", (e) => {
  $navlista.classList.toggle("nav-lista-disable");
});

const $headerSesionBtn = document.getElementById("sesion-div-controles");
const $itemSesion = document.getElementById("nav-item-sublista-sesion");

$headerSesionBtn.addEventListener("click", (e) => {
  $itemSesion.classList.toggle("nav-item-sublista-disable");
});

document.addEventListener('click', (e)=>{
    if (e.target.matches('.nli-tf')) {
        document.getElementById('nis-tf').classList.toggle('nis-tf');
    } else if (e.target.matches('.nli-f')) {
        document.getElementById('nis-f').classList.toggle('nis-f');
    }
});
