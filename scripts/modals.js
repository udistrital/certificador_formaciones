import crearCohorteFnc from "./crearCohorte.js";
import crearFormacionfnc from "./crearFormacion.js";
import crearFormularioNuevo from "./funcionalidades/Cohortes/CrearFormularioNuevo.js";
import crearSesionNueva from "./funcionalidades/Cohortes/CrearSesionNueva.js";
import formularioModulo from "./funcionalidades/Modulos/CapturaCamposFormularioModulo.js";
import obtenerParametrosComposForm from "./funcionalidades/Modulos/ObtenerParametrosCamposForm.js";
import notificacion from "./funcionalidades/Notificacion.js";
import reload from "./funcionalidades/ReloadPage.js";
import gotop from "./irTop.js";

const d = document;
const $closeModalNuevaFormacion = d.getElementById("close-modal-nueva-formacion");
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

const $modalNewForm = d.getElementById("modal-newform");
const $closeModalNewForm = d.getElementById("close-modal-new-form");

const $modalNewSesion = d.getElementById("modal-newsesion");
const $closeModalNewSesion = d.getElementById("close-modal-new-sesion");

d.addEventListener("click", (e) => {
  if (e.target === $closeModalNuevaFormacion || e.target === $modalNuevaFormacion) {
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
  if (e.target === $closeModalNewForm || e.target === $modalNewForm) {
    console.log("modal open or close");
    $modalNewForm.classList.toggle("modal-disabled");
  }
  if (e.target === $closeModalNewSesion || e.target === $modalNewSesion) {
    console.log("modal open or close");
    $modalNewSesion.classList.toggle("modal-disabled");
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

export const mostrarModalNewForm = () => {
  const $openModalNewForm = d.getElementsByClassName("show-select-new-form");
  Array.from($openModalNewForm).forEach((e, i) => {
    e.addEventListener("click", (event) => {
      console.log("echoi");
      if (event.target === e) {
        console.log(i);
        gotop();
        $modalNewForm.classList.toggle("modal-disabled");
      }
    });
  });
};
export const mostrarModalNewSesion = () => {
  const $openModalNewSesion = d.getElementsByClassName("show-new-sesion");
  Array.from($openModalNewSesion).forEach((e, i) => {
    e.addEventListener("click", (event) => {
      console.log("echoi");
      if (event.target === e) {
        console.log(i);
        gotop();
        $modalNewSesion.classList.toggle("modal-disabled");
      }
    });
  });
};

mostrarModalNewSesion();

mostrarModalNewForm();

mostrarModalInfoCohorte();

d.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target);

  // CON EL SIGUIENTE CODIGO SE HARA LA PETICION AL SERVIDOR PARA ALMACENAR UNA NUEVA FORMACION,
  // UNA VEZ REALIZADO DEPENDE DEL MENSAJE DEL SERVIDOR SE MOSTRARA UNA NOTIFICACION
  const $btnNuevaFormacion = document.getElementById("modal-form-formacion");
  const $btnNuevaCohorte = document.getElementById("modal-form-cohorte");
  const $btnNuevoModulo = document.getElementById("modal-form-modulo");
  const $btnNuevoFormulario = document.getElementById("modal-form-newformulario");
  const $btnNuevaSesion = document.getElementById("modal-form-newsesion");
  if (e.target === $btnNuevaFormacion) {
    $modalNuevaFormacion.classList.toggle("modal-disabled");
    await crearFormacionfnc();
  } else if (e.target === $btnNuevaCohorte) {
    $modalNuevaCohorte.classList.toggle("modal-disabled");
    await crearCohorteFnc();
  } else if (e.target === $btnNuevoModulo) {
    $modalNuevoModulo.classList.toggle("modal-disabled");
    await formularioModulo(e);
  } else if (e.target === $btnNuevoFormulario) {
    $modalNewForm.classList.toggle("modal-disabled");
    await crearFormularioNuevo(e);
    // notificacion(true, "creando form");
  } else if (e.target === $btnNuevaSesion) {
    $modalNewSesion.classList.toggle("modal-disabled");

    await crearSesionNueva(e);
    // notificacion(true, "creando sesion");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace que el desplazamiento sea suave
  });
});
