const $headerSesionBtn = document.querySelector(".sesion__controles");
const $itemSesion = document.querySelector(".sesion__acciones");

$headerSesionBtn.addEventListener("click", (e) => {
  $itemSesion.classList.toggle("sesion__acciones--disabled");
});

const $btn_ham = document.querySelector(".nav__menu");
console.log($btn_ham);

$btn_ham.addEventListener("click", (e) => {
  document.querySelector(".nav").classList.toggle("nav--disabled");
});

const identificarUsuario = async () => {
  let data = await JSON.parse(sessionStorage.getItem("data"));
  document.querySelector(".texto_nombreusuario").textContent =
    data.nombre + " " + data.apellido;
  document.querySelector(".texto_rol").textContent = data.rol;
  document.querySelector(".controles__icono").textContent =
    data.nombre[0] + data.apellido[0];
};

identificarUsuario();
