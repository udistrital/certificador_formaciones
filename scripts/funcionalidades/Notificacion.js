const notificacion = (estado, texto, donde) => {
  if (donde !== "modal") {
    const articleNotificacion = document.querySelector(".article-notificacion");
    setTimeout(() => {
      return (articleNotificacion.innerHTML = ``);
    }, 5000);
    return (articleNotificacion.innerHTML += `<div
      class="notificacion notificacion-${estado === true ? "verde" : "roja"}"
      id="notificacion-roja-formacion"
      >
      <span class="material-symbols-outlined"> error </span>
      <p>${texto}</p>
      <span></span>
      </div>`);
  } else {
    const articleNotificacionModal = document.querySelector(".article-notificacion-modal");
    setTimeout(() => {
      return (articleNotificacionModal.innerHTML = ``);
    }, 5000);
    return (articleNotificacionModal.innerHTML += `<div
                class="notificacion notificacion-${estado === true ? "verde" : "roja"}"
                id="notificacion-roja-formacion"
              >
                <span class="material-symbols-outlined"> error </span>
                <p>${texto}</p>
                <span></span>
              </div>`);
  }
};

export default notificacion;
