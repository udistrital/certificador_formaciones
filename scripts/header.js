const $headerSesionBtn = document.querySelector(".sesion__controles");
const $itemSesion = document.querySelector(".sesion__acciones");

$headerSesionBtn.addEventListener("click", (e) => {
  $itemSesion.classList.toggle("sesion__acciones--disabled");
});

const $btn_ham = document.querySelector(".nav__menu");
console.log($btn_ham);

$btn_ham.addEventListener("click", (e) => {
  document.querySelector(".nav").classList.toggle("nav--disabled");
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace que el desplazamiento sea suave
  });
});

const identificarUsuario = async () => {
  let data = await JSON.parse(sessionStorage.getItem("data"));
  console.log(data);
  document.querySelector(".texto_nombreusuario").textContent = data[0].username;
  document.querySelector(".texto_rol").textContent = data[0].nombre;
  document.querySelector(".controles__icono").textContent =
    data[0].nombre[0] + data[0].username[0];
};

identificarUsuario();
