import postNuevoFormulario from "./Fetching/POST/InsertaFormulario.js";
import postNuevaSesion from "./Fetching/POST/InsertarSesion.js";
import formatearFecha from "./funcionalidades/FormateoFecha.js";

const crearCohorteFnc = async () => {
  let idUsuario = JSON.parse(sessionStorage.getItem("data"))[0].id;
  let idTipoFormacion = document.getElementById(
    "cursoConTutorFormTipoFormacion"
  ).value;

  let idFormacion = document.getElementById(
    "cursoConTutorFormIdFormacion"
  ).value;

  let nombreFormacion = document.getElementById(
    "cursoConTutorFormNombreFormacion"
  ).value;
  let numCohorte = document.getElementById("numCohorte").value;
  let anioCohorte = document.getElementById("anioCohorte").value;
  let fechaInicialCohorte = document.getElementById(
    "fechaInicialCohorte"
  ).value;
  let fechaFinalCohorte = document.getElementById("fechaFinalCohorte").value;
  let fechaInicialCohorteFormInscripcion = document.getElementById(
    "fechaInicialCohorteFormInscripcion"
  ).value;
  let fechaFinalCohorteFormInscripcion = document.getElementById(
    "fechaFinalCohorteFormInscripcion"
  ).value;
  let linkCursoOConexion = document.getElementById("linkCursoOConexion").value;
  let fechaConexion = document.getElementById("fechaConexion").value;
  let horaConexion = document.getElementById("horaConexion").value;
  let fechaInicialAsistenciaCohorte = document.getElementById(
    "fechaInicialAsistenciaCohorte"
  ).value;
  let horaInicialAsistenciaCohorte = document.getElementById(
    "horaInicialAsistenciaCohorte"
  ).value;
  let fechaFinalAsistenciaCohorte = document.getElementById(
    "fechaFinalAsistenciaCohorte"
  ).value;
  let horaFinalAsistenciaCohorte = document.getElementById(
    "horiaFinalAsistenciaCohorte"
  ).value;
  let incluirIntensidadHoraria = document.getElementById(
    "incluirIntensidadHoraria"
  ).value;
  let incluirIntensidadFechaInicial = document.getElementById(
    "incluirIntensidadFechaInicial"
  ).value;
  let incluirIntensidadFechaFinal = document.getElementById(
    "incluirIntensidadFechaFinal"
  ).value;
  let modalidad = document.getElementById("modalidad").value;

  const data = {
    creador: idUsuario,
    tipo_proceso: idTipoFormacion.trim(),
    cohorte: numCohorte,
    anio: anioCohorte,
    activo: true,
    fechaInicialCohorte,
    fechaFinalCohorte,
    fechaInicialCohorteFormInscripcion,
    fechaFinalCohorteFormInscripcion,
    linkCursoOConexion,
    fechaConexion,
    horaConexion,
    fechaInicialAsistenciaCohorte,
    horaInicialAsistenciaCohorte,
    fechaFinalAsistenciaCohorte,
    horaFinalAsistenciaCohorte,
    incluirIntensidadHoraria,
    incluirIntensidadFechaInicial,
    incluirIntensidadFechaFinal,
    nombreFormacion,
    idFormacion: idFormacion.trim(),
    virtual: modalidad === "on" ? true : false,
  };
  console.log("data:", data);

  let dataForm = {
    tipo_proceso: data.tipo_proceso,
    cohorte: {
      creador: parseInt(idUsuario),
      proceso: parseInt(idFormacion.trim()),
      cohorte: parseInt(numCohorte.trim()),
      anio: parseInt(anioCohorte.trim()),
      fecha_inicial: formatearFecha(fechaInicialCohorte),
      fecha_final: formatearFecha(fechaFinalCohorte),
      activo: true,
    },
    sesion: {
      creador: parseInt(idUsuario),
      cohorte: null,
      fecha_inicial: formatearFecha(fechaConexion),
      fecha_final: formatearFecha(fechaConexion),
      sesion_virtual: modalidad === "on" ? 1 : 0,
      enlace: linkCursoOConexion,
      activo: true,
    },
    formularioAsistencia: {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 2,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: `${fechaInicialAsistenciaCohorte} ${horaInicialAsistenciaCohorte}:00`,
      fecha_final: `${fechaFinalAsistenciaCohorte} ${horaFinalAsistenciaCohorte}:00`,
    },
    formularioRegistro: {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 1,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormInscripcion),
      fecha_final: formatearFecha(fechaFinalCohorteFormInscripcion),
    },
  };
  console.log(window.location.pathname);

  if (window.location.pathname.includes("EventosCohortesPage.html")) {
    let fechaInicialCohorteFormDocumentacion = document.getElementById(
        "fechaInicialCohorteFormDocumentacion"
      ).value,
      fechaFinalCohorteFormDocumentacion = document.getElementById(
        "fechaFinalCohorteFormDocumentacion"
      ).value,
      fechaInicialCohorteFormMemoria = document.getElementById(
        "fechaInicialCohorteFormMemorias"
      ).value,
      fechaFinalCohorteFormMemoria = document.getElementById(
        "fechaFinalCohorteFormMemorias"
      ).value;

    dataForm.formularioPonente = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 2,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormInscripcion),
      fecha_final: formatearFecha(fechaFinalCohorteFormInscripcion),
    };
    dataForm.formularioDocumentacion = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 3,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormDocumentacion),
      fecha_final: formatearFecha(fechaFinalCohorteFormDocumentacion),
    };
    dataForm.formularioMemoria = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 4,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormMemoria),
      fecha_final: formatearFecha(fechaFinalCohorteFormMemoria),
    };
  }

  console.log(dataForm);

  return fetchNuevaCohorte(dataForm);
};

const fetchNuevaCohorte = async (data) => {
  let estado = false;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data.cohorte);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php",
    requestOptions
  )
    .then((response) => response.text())
    .then(async (result) => {
      console.log(JSON.parse(result));
      result = JSON.parse(result);
      if ((await result.estado) === "ok") {
        estado = true;
        data.sesion.cohorte = result.resultado.id_cohorte;
        data.formularioRegistro.cohorte = result.resultado.id_cohorte;
        data.formularioAsistencia.cohorte = result.resultado.id_cohorte;
        postNuevaSesion(data.sesion);
        postNuevoFormulario(data.formularioRegistro);
        postNuevoFormulario(data.formularioAsistencia);
        console.log(data.tipo_proceso, typeof data.tipo_proceso);

        if (data.tipo_proceso === "11") {
          console.log("Creando formularios apartes");

          data.formularioPonente.cohorte = result.resultado.id_cohorte;
          data.formularioDocumentacion.cohorte = result.resultado.id_cohorte;
          data.formularioMemoria.cohorte = result.resultado.id_cohorte;
          postNuevoFormulario(data.formularioPonente);
          postNuevoFormulario(data.formularioDocumentacion);
          postNuevoFormulario(data.formularioMemoria);
        }
        console.log(data.sesion);
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.estado == "error") {
        estado = false;
      }
    });

  return estado;
};

export default crearCohorteFnc;
