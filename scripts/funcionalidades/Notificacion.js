const notificacion = (estado, texto) => {
  const articleNotificacion = document.querySelector(".article-notificacion");
  return (articleNotificacion.innerHTML += `<div
              class="notificacion notificacion-${
                estado === true ? "verde" : "roja"
              }"
              id="notificacion-roja-formacion"
            >
              <span class="material-symbols-outlined"> error </span>
              <p>${texto}</p>
              <span></span>
            </div>`);
};

export default notificacion;