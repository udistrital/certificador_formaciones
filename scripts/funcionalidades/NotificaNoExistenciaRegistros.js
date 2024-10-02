export const notificarNoRegistros = (aviso) => {
  let pNoRegistros = document.querySelector(".p-noregistros");
  pNoRegistros.classList.toggle("p-noRegistros-enabled");
  pNoRegistros.textContent = aviso;
};
