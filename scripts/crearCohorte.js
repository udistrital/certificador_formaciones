import { fetchNuevaCohorte } from "./Fetching/POST/InsertaCohorte.js";
import postNuevoFormulario from "./Fetching/POST/InsertaFormulario.js";
import postNuevaSesion from "./Fetching/POST/InsertarSesion.js";
import formatearFecha from "./funcionalidades/FormateoFecha.js";
import notificacion from "./funcionalidades/Notificacion.js";

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
        "fechaInicialDocumentacion"
      ).value,
      fechaFinalCohorteFormDocumentacion = document.getElementById(
        "fechaFinalDocumentacion"
      ).value,
      fechaInicialCohorteFormMemoria = document.getElementById(
        "fechaInicialMemoria"
      ).value,
      fechaFinalCohorteFormMemoria =
        document.getElementById("fechaFinalMemoria").value;

    // let resultInsertaFormularioPonentes = await postNuevoFormulario(
    //   dataFormularioPonente
    // );
    // let resultInsertaFormularioDocumentacion = await postNuevoFormulario(
    //   dataFormularioDocumentacion
    // );
    // let resultInsertaFormularioMemoria = await postNuevoFormulario(
    //   dataFormularioMemorias
    // );

    dataForm.dataFormularioPonente = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 3,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormInscripcion),
      fecha_final: formatearFecha(fechaFinalCohorteFormInscripcion),
    };

    dataForm.dataFormularioMemorias = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 5,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormMemoria),
      fecha_final: formatearFecha(fechaFinalCohorteFormMemoria),
    };
    dataForm.dataFormularioDocumentacion = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 4,
      hash: `http://127.0.0.5:5501/pages/formularios/formsInscripcion/formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${numCohorte}`,
      fecha_inicial: formatearFecha(fechaInicialCohorteFormDocumentacion),
      fecha_final: formatearFecha(fechaFinalCohorteFormDocumentacion),
    };
  }
  insertaDataForm(dataForm);
};

const insertaDataForm = async (dataForm) => {
  console.log(dataForm);
  let resultadoCohorte = await fetchNuevaCohorte(dataForm);

  if (resultadoCohorte.estado === "ok") {
    dataForm.sesion.cohorte = resultadoCohorte.resultado.id_cohorte;
    let respuestaSesion = await postNuevaSesion(dataForm.sesion);
    console.log(respuestaSesion);

    dataForm.formularioRegistro.cohorte = resultadoCohorte.resultado.id_cohorte;
    dataForm.formularioAsistencia.cohorte =
      resultadoCohorte.resultado.id_cohorte;
    dataForm.formularioAsistencia.sesion = respuestaSesion.resultado.id_sesion;
    dataForm.formularioAsistencia.sesion = respuestaSesion.resultado.id_sesion;
    await postNuevoFormulario(dataForm.formularioRegistro);
    await postNuevoFormulario(dataForm.formularioAsistencia);

    if (dataForm.tipo_proceso === "11") {
      console.log("Creando formularios apartes");

      dataForm.dataFormularioPonente.cohorte =
        resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioMemorias.cohorte =
        resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioDocumentacion.cohorte =
        resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioDocumentacion.sesion =
        respuestaSesion.resultado.id_sesion;
      dataForm.dataFormularioDocumentacion.sesion =
        respuestaSesion.resultado.id_sesion;
      dataForm.dataFormularioDocumentacion.sesion =
        respuestaSesion.resultado.id_sesion;
      await postNuevoFormulario(dataForm.dataFormularioPonente);
      await postNuevoFormulario(dataForm.dataFormularioMemorias);
      await postNuevoFormulario(dataForm.dataFormularioDocumentacion);
    }
  }
};

export default crearCohorteFnc;
