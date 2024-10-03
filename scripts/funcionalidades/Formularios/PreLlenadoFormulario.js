import validaCursante from "../../Fetching/GET/Cursante.js";
import fetchingDependencias from "../../Fetching/GET/ListaDependencias.js";
import { listaDependenciasTipoDependencias } from "../../Fetching/GET/ListaDependenciasTipoDependencias.js";
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
    // console.log(listadoVinculaciones);
    agregarDatosFormulario();
    await agregarOpcionesSelectVinculacion(listadoVinculaciones);
  }

  if (
    window.location.pathname.includes("formularioAsistencia") ||
    window.location.pathname.includes("formularioPostulacion") ||
    window.location.pathname.includes("formularioEvidencias") ||
    window.location.pathname.includes("formularioDocumentos")
  ) {
    agregarDatosFormulario();
    await agregarOpcionesSelectTipoDocumento();
  }

  if (window.location.pathname.includes("formularioValidacionCursante")) {
    await agregarOpcionesSelectTipoDocumento();
  }

  if (
    window.location.pathname.includes("formularioRegistroAspirantes") ||
    window.location.pathname.includes("formularioPostulacion")
  ) {
    let listadoGeneros = await listaGeneros();
    let listaIdentidadesGeneros = await listaIdentidadGenero();
    let listaGruposEtnicos = await listaGrupoEtnico();
    let listaTiposDiscapacidades = await listaTipoDiscapacidad();
    let res = await capturaDatosCursanteUrl();
    let listaDependencias = await fetchingDependencias();
    // console.log(res);

    agregarDatosFormulario();
    await agregarOpcionesSelectTipoDocumento();
    await agregarGenero(listadoGeneros);
    await agregarIdentidadGenero(listaIdentidadesGeneros);
    await agregarGrupoEtnico(listaGruposEtnicos);
    await agregarTipoDiscapacidad(listaTiposDiscapacidades);
    await defineDependencias();

    agregarDatosFormularioExisteCursante(res);
  }
};

const capturaDatosCursanteUrl = async () => {
  let existe_cursante = new URLSearchParams(window.location.search).get(
    "existeCursante"
  );
  let data = {
    tipo_documento: new URLSearchParams(window.location.search).get(
      "tipoDocumento"
    ),
    numero_documento: new URLSearchParams(window.location.search).get(
      "numDocumento"
    ),
  };

  if (existe_cursante == "true") {
    let res = await validaCursante(data);
    return res;
  }

  return { existe: false, cursante: data };
};
const agregarTipoDiscapacidad = async (listaTipoDiscapacidades) => {
  // console.log(listaTipoDiscapacidades);

  const $vinculaciones = document.getElementById("form-discapacidad");

  $vinculaciones.innerHTML = "";

  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione un tipo de discapacidad";
  $vinculaciones.appendChild(defaultOption);

  await listaTipoDiscapacidades.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarGrupoEtnico = async (grupoetnico) => {
  // console.log(grupoetnico);

  const $vinculaciones = document.getElementById("form-grupoEtnico");

  $vinculaciones.innerHTML = "";

  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione un grupo etnico";
  $vinculaciones.appendChild(defaultOption);

  await grupoetnico.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarIdentidadGenero = async (identidadesGeneros) => {
  // console.log(identidadesGeneros);

  const $vinculaciones = document.getElementById("form-identidadGenero");

  $vinculaciones.innerHTML = "";
  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione su identidad de genero";
  $vinculaciones.appendChild(defaultOption);

  await identidadesGeneros.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};
const agregarGenero = async (generos) => {
  // console.log(generos);

  const $vinculaciones = document.getElementById("form-genero");

  $vinculaciones.innerHTML = "";

  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione su genero";
  $vinculaciones.appendChild(defaultOption);

  await generos.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};

const defineDependencias = async () => {
  document.addEventListener("change", async (e) => {
    const validaSelect = e.target.matches("#form-vinculacion");
    console.log(e.target.value, typeof e.target.value);

    if (validaSelect) {
      if (
        e.target.value === "3" ||
        e.target.value === "4" ||
        e.target.value === "5" ||
        e.target.value === "6" ||
        e.target.value === "7"
      ) {
        console.log("estudiante, docente, egresado");
        let listadoDependenciasPorTipo =
          await listaDependenciasTipoDependencias(17);

        listadoDependenciasPorTipo = listadoDependenciasPorTipo.map(
          (dep_tip_dep) => dep_tip_dep.dependencia
        );

        let listadoDependencias = await fetchingDependencias();

        listadoDependencias = listadoDependencias.filter((dependencia) =>
          listadoDependenciasPorTipo.includes(dependencia.id)
        );

        console.log(listadoDependencias);
        agregarDependencia(listadoDependencias, true);
      } else if (e.target.value === "1" || e.target.value === "2") {
        console.log("contratista, administrativo");
        let listadoDependencias = await fetchingDependencias();
        console.log(listadoDependencias);
        agregarDependencia(listadoDependencias, true);
      } else {
        console.log("otro");
        agregarDependencia([], false);
      }
    }
  });
};

export const agregarDependencia = async (dependencias, esSelect) => {
  console.log(dependencias);

  const $labelDependencia = document.getElementById("form__label-dependencia");
  if (esSelect) {
    $labelDependencia.innerHTML = `Seleccione la dependencia a la que pertenece:<select
            name="dependencia"
            id="form-dependencia"
            class="form-input"
            required
          >
            
          </select>`;

    const $dependencias = document.getElementById("form-dependencia");

    $dependencias.innerHTML = "";

    // Crea la opción de "No selección"
    const defaultOption = document.createElement("option");
    defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
    defaultOption.text = "Seleccione la dependencia a la que pertenece";
    $dependencias.appendChild(defaultOption);

    await dependencias.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.text = item.nombre;
      $dependencias.appendChild(option);
    });
  } else {
    $labelDependencia.innerHTML = `Ingrese la institución a la que pertenece: <input
            type="text"
            name="instituto"
            id="form-instituto"
            class="form-input"
            required
          />`;
  }
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
const agregarOpcionesSelectVinculacion = async (data) => {
  const $vinculaciones = document.getElementById("form-vinculacion");

  $vinculaciones.innerHTML = "";

  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione su tipo de vinculacion";
  $vinculaciones.appendChild(defaultOption);

  await data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $vinculaciones.appendChild(option);
  });
};

const agregarOpcionesSelectTipoDocumento = async (preSeleccion) => {
  let listadoTiposDocumento = await fetchingTipoDocumento();
  // console.log(listadoTiposDocumento);

  const $tiposDocumento = document.getElementById("form-tipoDocumento");

  $tiposDocumento.innerHTML = "";

  // Crea la opción de "No selección"
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Puedes dejarlo vacío o asignar un valor que indique 'no seleccionado'
  defaultOption.text = "Seleccione su tipo de documento";
  $tiposDocumento.appendChild(defaultOption);

  await listadoTiposDocumento.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.nombre;
    $tiposDocumento.appendChild(option);
  });
};

const agregarDatosFormularioExisteCursante = (dataCursante) => {
  // console.log(dataCursante);

  if (dataCursante.existe) {
    let $primerNombre = document.getElementById("form-primerNombre"),
      $segundoNombre = document.getElementById("form-segundoNombre"),
      $primerApellido = document.getElementById("form-primerApellido"),
      $segundoApellido = document.getElementById("form-segundoApellido"),
      $codigoEdx = document.getElementById("form-codigoEdx"),
      $fechaNacimiento = document.getElementById("form-fechaNacimiento"),
      $correoPonente = document.getElementById("form-correoPonente"),
      $correoPonenteRepetir = document.getElementById(
        "form-correoPonenteRepetir"
      ),
      $telefonoPonente = document.getElementById("form-telefonoPonente"),
      $telefonoPonenteRepetir = document.getElementById(
        "form-telefonoPonenteRepetir"
      );

    $primerNombre.value = dataCursante.cursante.primer_nombre;
    $segundoNombre.value = dataCursante.cursante.segundo_nombre;
    $primerApellido.value = dataCursante.cursante.primer_apellido;
    $segundoApellido.value = dataCursante.cursante.segundo_apellido;
    $codigoEdx.value = dataCursante.cursante.usuario_edx;
    $fechaNacimiento.value = dataCursante.cursante.fecha_nacimiento;
    $correoPonente.value = dataCursante.cursante.correo;
    $correoPonenteRepetir.value = dataCursante.cursante.correo;
    $telefonoPonente.value = dataCursante.cursante.numero_contacto;
    $telefonoPonenteRepetir.value = dataCursante.cursante.numero_contacto;

    $primerNombre.readOnly = true;
    $segundoNombre.readOnly = true;
    $primerApellido.readOnly = true;
    $segundoApellido.readOnly = true;
    $codigoEdx.readOnly = true;
    $fechaNacimiento.readOnly = true;
    $correoPonente.readOnly = true;
    $correoPonenteRepetir.readOnly = true;
    $telefonoPonente.readOnly = true;
    $telefonoPonenteRepetir.readOnly = true;

    $primerNombre.classList.add("form-input-disabled");
    $segundoNombre.classList.add("form-input-disabled");
    $primerApellido.classList.add("form-input-disabled");
    $segundoApellido.classList.add("form-input-disabled");
    $codigoEdx.classList.add("form-input-disabled");
    $fechaNacimiento.classList.add("form-input-disabled");
    $correoPonente.classList.add("form-input-disabled");
    $correoPonenteRepetir.classList.add("form-input-disabled");
    $telefonoPonente.classList.add("form-input-disabled");
    $telefonoPonenteRepetir.classList.add("form-input-disabled");

    let $genero = document.getElementById("form-genero"),
      $identidadGenero = document.getElementById("form-identidadGenero"),
      $grupoEtnico = document.getElementById("form-grupoEtnico"),
      $discapacidad = document.getElementById("form-discapacidad");

    $genero.value = dataCursante.cursante.genero;
    $identidadGenero.value = dataCursante.cursante.identidad_genero;
    $grupoEtnico.value = dataCursante.cursante.grupo_etnico;
    $discapacidad.value = dataCursante.cursante.tipo_discapacidad;

    $genero.setAttribute("data-selected", dataCursante.cursante.genero);
    $identidadGenero.setAttribute(
      "data-selected",
      dataCursante.cursante.identidad_genero
    );
    $grupoEtnico.setAttribute(
      "data-selected",
      dataCursante.cursante.grupo_etnico
    );
    $discapacidad.setAttribute(
      "data-selected",
      dataCursante.cursante.tipo_discapacidad
    );

    $genero.addEventListener("change", function (event) {
      event.target.value = event.target.getAttribute("data-selected");
    });
    $identidadGenero.addEventListener("change", function (event) {
      event.target.value = event.target.getAttribute("data-selected");
    });
    $grupoEtnico.addEventListener("change", function (event) {
      event.target.value = event.target.getAttribute("data-selected");
    });
    $discapacidad.addEventListener("change", function (event) {
      event.target.value = event.target.getAttribute("data-selected");
    });

    $genero.classList.add("form-input-disabled");
    $identidadGenero.classList.add("form-input-disabled");
    $grupoEtnico.classList.add("form-input-disabled");
    $discapacidad.classList.add("form-input-disabled");
  }

  let $numDocumentoPonente = document.getElementById(
    "form-numDocumentoPonente"
  );
  $numDocumentoPonente.value = dataCursante.cursante.numero_documento;
  $numDocumentoPonente.readOnly = true;

  let $tipoDocumento = document.getElementById("form-tipoDocumento");
  $tipoDocumento.value = dataCursante.cursante.tipo_documento;
  // Guardar el valor seleccionado inicialmente
  $tipoDocumento.setAttribute(
    "data-selected",
    dataCursante.cursante.tipo_documento
  );
  // Prevenir que el usuario cambie la selección
  $tipoDocumento.addEventListener("change", function (event) {
    event.target.value = event.target.getAttribute("data-selected");
  });
};

llenarFormulario();
