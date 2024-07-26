import formatearFecha from "./funcionalidades/FormateoFecha.js";

const crearCohorteFnc = () => {
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
  let horiaFinalAsistenciaCohorte = document.getElementById(
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
    horiaFinalAsistenciaCohorte,
    incluirIntensidadHoraria,
    incluirIntensidadFechaInicial,
    incluirIntensidadFechaFinal,
    nombreFormacion,
    idFormacion: idFormacion.trim(),
    virtual: modalidad === "on" ? true : false,
  };
  console.log("data:", data);

  let dataCohorteCompleta = {
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
      cohorte: parseInt(numCohorte.trim()),
      fechaConexion,
      horaConexion,
      virtual: modalidad === "on" ? true : false,
      enlace: linkCursoOConexion,
      activo: true,
    },
    formularioAsistencia: {
      creador: parseInt(idUsuario),
      cohorte: parseInt(numCohorte.trim()),
      tipo_formulario: 1,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: fechaInicialAsistenciaCohorte,
      horaInicialAsistenciaCohorte,
      fecha_final: fechaFinalAsistenciaCohorte,
      horiaFinalAsistenciaCohorte,
    },
    formularioRegistro: {
      creador: parseInt(idUsuario),
      cohorte: parseInt(numCohorte.trim()),
      tipo_formulario: 2,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: fechaInicialCohorteFormInscripcion,
      fecha_final: fechaFinalCohorteFormInscripcion,
    },
  };

  console.log(dataCohorteCompleta);

  let dataCohorte = {
    creador: parseInt(idUsuario),
    proceso: parseInt(idFormacion.trim()),
    cohorte: parseInt(numCohorte.trim()),
    anio: parseInt(anioCohorte.trim()),
    fecha_inicial: formatearFecha(fechaInicialCohorte),
    fecha_final: formatearFecha(fechaFinalCohorte),
    activo: true,
  };
  return fetchNuevaCohorte(dataCohorte);
};

const fetchNuevaCohorte = async (data) => {
  let estado = false;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

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
      if ((await JSON.parse(result).estado) === "ok") {
        estado = true;
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
