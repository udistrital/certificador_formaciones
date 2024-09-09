import listaGeneros from "../../Fetching/GET/ListaGeneros.js";
import listaGrupoEtnico from "../../Fetching/GET/ListaGrupoEtnico.js";
import listaIdentidadGenero from "../../Fetching/GET/ListaIdentidadGenero.js";
import listaTipoDiscapacidad from "../../Fetching/GET/ListaTipoDiscapacidad.js";
import fetchingTipoDocumento from "../../Fetching/GET/ListaTipoDocumento.js";
import fetchingVinculacion from "../../Fetching/GET/ListaVinculacion.js";
import obtenerParametrosUrlFormulario from "./ObtenerParametrosUrlFormulario.js";

const llenarFormulario = async () => {
  if (
    window.location.pathname.includes("formularioRegistroAspirantes") ||
    window.location.pathname.includes("formularioPostulacion")
  ) {
    let listadoVinculaciones = await fetchingVinculacion();
    console.log(listadoVinculaciones);
    agregarDatosFormulario();
    agregarOpcionesSelectVinculacion(listadoVinculaciones);
  }

  if (
    window.location.pathname.includes("formularioAsistencia") ||
    window.location.pathname.includes("formularioPostulacion") ||
    window.location.pathname.includes("formularioEvidencias") ||
    window.location.pathname.includes("formularioDocumentos")
  ) {
    agregarDatosFormulario();
    agregarOpcionesSelectTipoDocumento();
  }

  if (window.location.pathname.includes("formularioValidacionCursante")) {
    agregarOpcionesSelectTipoDocumento();
  }

  if (window.location.pathname.includes("formularioRegistroAspirantes")) {
    let listadoGeneros = await listaGeneros();
    let listaIdentidadesGeneros = await listaIdentidadGenero();
    let listaGruposEtnicos = await listaGrupoEtnico();
    let listaTiposDiscapacidades = await listaTipoDiscapacidad();
    let { tipoDocumento, numDocumento, terminos } = capturaDatosCursanteUrl();

    document.getElementById("form-numDocumentoPonente").value = numDocumento;
    document.getElementById("form-numDocumentoPonente").readOnly  = true;

    agregarDatosFormulario();
    agregarOpcionesSelectTipoDocumento(tipoDocumento);
    agregarGenero(listadoGeneros);
    agregarIdentidadGenero(listaIdentidadesGeneros);
    agregarGrupoEtnico(listaGruposEtnicos);
    agregarTipoDiscapacidad(listaTiposDiscapacidades);
  }
};

const capturaDatosCursanteUrl = () => {
  let tipoDocumento = new URLSearchParams(window.location.search).get(
    "tipoDocumento"
  );
  let numDocumento = new URLSearchParams(window.location.search).get(
    "numDocumento"
  );
  let terminos = new URLSearchParams(window.location.search).get("terminos");

  return { tipoDocumento, numDocumento, terminos };
};
const agregarTipoDiscapacidad = (listaTipoDiscapacidades) => {
  console.log(listaTipoDiscapacidades);

  const $vinculaciones = document.getElementById("form-discapacidad");

  $vinculaciones.innerHTML = "";

  listaTipoDiscapacidades.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarGrupoEtnico = (grupoetnico) => {
  console.log(grupoetnico);

  const $vinculaciones = document.getElementById("form-grupoEtnico");

  $vinculaciones.innerHTML = "";

  grupoetnico.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarIdentidadGenero = (identidadesGeneros) => {
  console.log(identidadesGeneros);

  const $vinculaciones = document.getElementById("form-identidadGenero");

  $vinculaciones.innerHTML = "";

  identidadesGeneros.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarGenero = (generos) => {
  console.log(generos);

  const $vinculaciones = document.getElementById("form-genero");

  $vinculaciones.innerHTML = "";

  generos.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarDatosFormulario = () => {
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

const agregarOpcionesSelectTipoDocumento = async (preSeleccion) => {
  let listadoTiposDocumento = await fetchingTipoDocumento();
  console.log(listadoTiposDocumento);

  const $tiposDocumento = document.getElementById("form-tipoDocumento");

  $tiposDocumento.innerHTML = "";

  await listadoTiposDocumento.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $tiposDocumento.appendChild(option);
  });

  preSeleccion && ($tiposDocumento.value = preSeleccion);

  // Guardar el valor seleccionado inicialmente
  preSeleccion && $tiposDocumento.setAttribute("data-selected", preSeleccion);

  // Prevenir que el usuario cambie la selección
  $tiposDocumento.addEventListener("change", function (event) {
    event.target.value = event.target.getAttribute("data-selected");
  });
};

llenarFormulario();
