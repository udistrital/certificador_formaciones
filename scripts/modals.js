import crearCohorteFnc from "./crearCohorte.js";
import crearFormacionfnc from "./crearFormacion.js";
import formularioModulo from "./funcionalidades/Modulos/CapturaCamposFormularioModulo.js";
import obtenerParametrosComposForm from "./funcionalidades/Modulos/ObtenerParametrosCamposForm.js";
import reload from "./funcionalidades/ReloadPage.js";
import gotop from "./irTop.js";

const d = document;
const $closeModalNuevaFormacion = d.getElementById(
  "close-modal-nueva-formacion"
);
const $modalNuevaFormacion = d.getElementById("modal-nueva-formacion");
const $openModalNuevaFormacion = d.getElementById("add-nueva-formacion");

const $closeModalNuevaCohorte = d.getElementById("close-modal-nueva-cohorte");
const $modalNuevaCohorte = d.getElementById("modal-nueva-cohorte");
const $openModalNuevaCohorte = d.getElementById("add-nueva-cohorte");

const $closeModalNuevoModulo = d.getElementById("close-modal-nuevo-modulo");
const $modalNuevoModulo = d.getElementById("modal-nuevo-modulo");
const $openModalNuevoModulo = d.getElementById("add-nuevo-modulo");

const $closeModalInfoCohorte = d.getElementById("close-modal-info-cohorte");
const $modalinfoCohorte = d.getElementById("modal-info-cohorte");

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

  if (e.target === $closeModalNuevaCohorte || e.target === $modalNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
  }
  if (e.target === $openModalNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
  }

  if (e.target === $closeModalNuevoModulo || e.target === $modalNuevoModulo) {
    $modalNuevoModulo.classList.toggle("modal-disabled");
  }
  if (e.target === $openModalNuevoModulo) {
    console.log("abriendo modulo new");

    $modalNuevoModulo.classList.toggle("modal-disabled");
  }
  if (e.target === $closeModalInfoCohorte || e.target === $modalinfoCohorte) {
    console.log("modal open or close");
    $modalinfoCohorte.classList.toggle("modal-disabled");
  }
});

/** modal de informacion de una cohorte */

export const mostrarModalInfoCohorte = () => {
  const $openModalInfoCohorte = d.getElementsByClassName("show-info-cohorte");
  Array.from($openModalInfoCohorte).forEach((e, i) => {
    e.addEventListener("click", (event) => {
      console.log("echoi");
      if (event.target === e) {
        console.log(i);
        gotop();
        $modalinfoCohorte.classList.toggle("modal-disabled");
      }
    });
  });
};

mostrarModalInfoCohorte();

d.addEventListener("submit", async (e) => {
  e.preventDefault();
  // CON EL SIGUIENTE CODIGO SE HARA LA PETICION AL SERVIDOR PARA ALMACENAR UNA NUEVA FORMACION,
  // UNA VEZ REALIZADO DEPENDE DEL MENSAJE DEL SERVIDOR SE MOSTRARA UNA NOTIFICACION
  const $btnNuevaFormacion = document.getElementById("modal-form-formacion");
  const $btnNuevaCohorte = document.getElementById("modal-form-cohorte");
  const $btnNuevoModulo = document.getElementById("modal-form-modulo");
  if (e.target === $btnNuevaFormacion) {
    $modalNuevaFormacion.classList.toggle("modal-disabled");
    await crearFormacionfnc();
  } else if (e.target === $btnNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
    await crearCohorteFnc();
  } else if (e.target === $btnNuevoModulo) {
    $modalNuevoModulo.classList.toggle("modal-disabled");
    await formularioModulo(e);
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace que el desplazamiento sea suave
  });
});
