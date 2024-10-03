export const notificarNoRegistros = (aviso) => {
  let pNoRegistros = document.querySelector(".p-noregistros");
  pNoRegistros.classList.add("p-noRegistros-enabled");
  pNoRegistros.textContent = aviso;
};

export const quitaNotificacionNoRegistros = () => {
  document
    .querySelector(".p-noregistros")
    .classList.remove("p-noRegistros-enabled");
};
