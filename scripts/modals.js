const d = document;
const $closeModalNuevaFormacion = d.getElementById(
  "close-modal-nueva-formacion"
);
const $modalNuevaFormacion = d.getElementById("modal-nueva-formacion");
const $openModalNuevaFormacion = d.getElementById("add-nueva-formacion");

const $closeModalNuevaCohorte = d.getElementById(
  "close-modal-nueva-cohorte"
);
const $modalNuevaCohorte = d.getElementById("modal-nueva-cohorte");
const $openModalNuevaCohorte = d.getElementById("add-nueva-cohorte");

d.addEventListener("click", (e) => {
  if (
    e.target === $closeModalNuevaFormacion ||
    e.target === $modalNuevaFormacion
  ) {
    $modalNuevaFormacion.classList.toggle("modal-disabled");
  }

  if (e.target === $openModalNuevaFormacion) {
    $modalNuevaFormacion.classList.toggle("modal-disabled");
  }
  if (
    e.target === $closeModalNuevaCohorte ||
    e.target === $modalNuevaCohorte
  ) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
  }

  if (e.target === $openModalNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
  }
});

d.addEventListener("submit", (e) => {
  e.preventDefault();
  // CON EL SIGUIENTE CODIGO SE HARA LA PETICION AL SERVIDOR PARA ALMACENAR UNA NUEVA FORMACION,
  // UNA VEZ REALIZADO DEPENDE DEL MENSAJE DEL SERVIDOR SE MOSTRARA UNA NOTIFICACION
  const $btnNuevaFormacion = document.getElementById("modal-form-formacion");
  const $btnNuevaCohorte = document.getElementById("modal-form-cohorte");
  if (e.target === $btnNuevaFormacion) {
    $modalNuevaFormacion.classList.toggle("modal-disabled");
    let a = 1;
    if (1 === a) {
      const $notificacionVerde = document.getElementById(
        "notificacion-verde-formacion"
        );
        $notificacionVerde.classList.toggle("notificacion-disabled");
        setTimeout(() => {
          $notificacionVerde.classList.toggle("notificacion-disabled");
          window.location.reload();
        }, 1000);
      } else if (0 === a) {
        const $notificacionRoja = document.getElementById(
          "notificacion-roja-formacion"
          );
          $notificacionRoja.classList.toggle("notificacion-disabled");
      setTimeout(() => {
        $notificacionRoja.classList.toggle("notificacion-disabled");
        window.location.reload();
      }, 1000);
    }
  }else if (e.target === $btnNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
    let a = 0;
    if (1 === a) {
      const $notificacionVerde = document.getElementById(
        "notificacion-verde-formacion"
        );
        $notificacionVerde.classList.toggle("notificacion-disabled");
        setTimeout(() => {
          $notificacionVerde.classList.toggle("notificacion-disabled");
          window.location.reload();
        }, 1000);
      } else if (0 === a) {
        const $notificacionRoja = document.getElementById(
          "notificacion-roja-formacion"
          );
          $notificacionRoja.classList.toggle("notificacion-disabled");
      setTimeout(() => {
        $notificacionRoja.classList.toggle("notificacion-disabled");
        window.location.reload();
      }, 1000);
    }
  }
});
