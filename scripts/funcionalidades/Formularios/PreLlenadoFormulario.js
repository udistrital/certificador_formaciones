import fetchingTipoDocumento from "../../Fetching/GET/ListaTipoDocumento.js";
import fetchingVinculacion from "../../Fetching/GET/ListaVinculacion.js";
import obtenerParametrosUrlFormulario from "./ObtenerParametrosUrlFormulario.js";

const llenarFormulario = async () => {
  let {
    idCohorteModelo,
    cohorte,
    idProceso,
    nombreProceso,
    nombreTipoProceso,
    idTipoProceso,
    anio,
  } = obtenerParametrosUrlFormulario();

  document.getElementById("form-nombreFormacion").value = nombreProceso;
  document.getElementById("form-tipoFormacion").value = nombreTipoProceso;
  document.getElementById("form-anioFormacion").value = anio;
  document.getElementById("form-numeroCohorte").value = cohorte;

  if (
    window.location.pathname.includes("formularioRegistroAspirantes") ||
    window.location.pathname.includes("formularioPostulacion")
  ) {
    let listadoVinculaciones = await fetchingVinculacion();
    console.log(listadoVinculaciones);
    agregarOpcionesSelectVinculacion(listadoVinculaciones);
  }

  if (
    window.location.pathname.includes("formularioAsistencia") ||
    window.location.pathname.includes("formularioPostulacion") ||
    window.location.pathname.includes("formularioEvidencias") ||
    window.location.pathname.includes("formularioDocumentos") ||
    window.location.pathname.includes("formularioRegistroAspirantes")
  ) {
    agregarOpcionesSelectTipoDocumento();
  }

};

const agregarOpcionesSelectVinculacion = (data) => {
  const $vinculaciones = document.getElementById("form-vinculacion");

  $vinculaciones.innerHTML = "";

  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};

const agregarOpcionesSelectTipoDocumento = async () => {
  let listadoTiposDocumento = await fetchingTipoDocumento();
  console.log(listadoTiposDocumento);

  const $tiposDocumento = document.getElementById("form-tipoDocumento");

  $tiposDocumento.innerHTML = "";

  listadoTiposDocumento.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $tiposDocumento.appendChild(option);
  });
};

llenarFormulario();
