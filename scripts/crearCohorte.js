import { fetchNuevaCohorte } from "./Fetching/POST/InsertaCohorte.js";
import postNuevoFormulario from "./Fetching/POST/InsertaFormulario.js";
import postNuevaSesion from "./Fetching/POST/InsertarSesion.js";
import formatearFecha from "./funcionalidades/FormateoFecha.js";

const crearCohorteFnc = async () => {
  let fechaInicialAsistenciaCohorte = null;
  let horaInicialAsistenciaCohorte = null;
  let fechaFinalAsistenciaCohorte = null;
  let horaFinalAsistenciaCohorte = null,
    fechaInicialCohorte = null,
    fechaFinalCohorte = null,
    linkCursoOConexion = null,
    fechaConexion = null,
    horaConexion = null,
    modalidad = null;
  let idUsuario = JSON.parse(sessionStorage.getItem("data"))[0].id;
  let idTipoFormacion = document.getElementById("cursoConTutorFormTipoFormacion").value.trim();
  let idFormacion = document.getElementById("cursoConTutorFormIdFormacion").value;
  let nombreFormacion = document.getElementById("cursoConTutorFormNombreFormacion").value;
  let numCohorte = document.getElementById("numCohorte").value;
  let anioCohorte = document.getElementById("anioCohorte").value;
  let fechaInicialCohorteFormInscripcion = document.getElementById("fechaInicialCohorteFormInscripcion").value;
  let fechaFinalCohorteFormInscripcion = document.getElementById("fechaFinalCohorteFormInscripcion").value;
  if (idTipoFormacion !== "8") {
    console.log(idTipoFormacion === "8", typeof idTipoFormacion, typeof "8", idTipoFormacion);

    fechaInicialCohorte = idTipoFormacion === "9" ? document.getElementById("fechaInicialCohorteFormInscripcion").value : document.getElementById("fechaInicialCohorte").value;
    fechaFinalCohorte = idTipoFormacion === "9" ? document.getElementById("fechaConexion").value : document.getElementById("fechaFinalCohorte").value;
    linkCursoOConexion = document.getElementById("linkCursoOConexion").value;
    fechaConexion = document.getElementById("fechaConexion").value;
    horaConexion = document.getElementById("horaConexion").value;
    modalidad = document.getElementById("modalidad").value;
    fechaInicialAsistenciaCohorte = document.getElementById("fechaInicialAsistenciaCohorte").value;
    horaInicialAsistenciaCohorte = document.getElementById("horaInicialAsistenciaCohorte").value;
    fechaFinalAsistenciaCohorte = document.getElementById("fechaFinalAsistenciaCohorte").value;
    horaFinalAsistenciaCohorte = document.getElementById("horiaFinalAsistenciaCohorte").value;
  }
  let incluirIntensidadHoraria = document.getElementById("incluirIntensidadHoraria").value;
  let incluirIntensidadFechaInicial = document.getElementById("incluirIntensidadFechaInicial").value;
  let incluirIntensidadFechaFinal = document.getElementById("incluirIntensidadFechaFinal").value;

  const data = {
    creador: idUsuario,
    tipo_proceso: idTipoFormacion,
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
    formularioRegistro: {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 1,
      hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
      fecha_inicial: formatearFecha(fechaInicialCohorteFormInscripcion),
      fecha_final: formatearFecha(fechaFinalCohorteFormInscripcion),
    },
  };

  if (dataForm.tipo_proceso !== "8") {
    dataForm.formularioAsistencia = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 2,
      hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
      fecha_inicial: `${fechaInicialAsistenciaCohorte} ${horaInicialAsistenciaCohorte}:00`,
      fecha_final: `${fechaFinalAsistenciaCohorte} ${horaFinalAsistenciaCohorte}:00`,
    };

    dataForm.sesion = {
      creador: parseInt(idUsuario),
      cohorte: null,
      fecha_inicial: formatearFecha(fechaConexion + "T" + horaConexion + ":00"),
      fecha_final: formatearFecha(fechaConexion + "T" + horaConexion + ":00"),
      sesion_virtual: modalidad === "on" ? 1 : 0,
      enlace: linkCursoOConexion,
      activo: true,
    };
  }

  if (window.location.pathname.includes("EventosCohortesPage.html")) {
    let fechaInicialCohorteFormDocumentacion = document.getElementById("fechaInicialDocumentacion").value,
      fechaFinalCohorteFormDocumentacion = document.getElementById("fechaFinalDocumentacion").value,
      fechaInicialCohorteFormMemoria = document.getElementById("fechaInicialMemoria").value,
      fechaFinalCohorteFormMemoria = document.getElementById("fechaFinalMemoria").value;

    dataForm.dataFormularioPonente = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 3,
      hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
      fecha_inicial: formatearFecha(fechaInicialCohorteFormInscripcion),
      fecha_final: formatearFecha(fechaFinalCohorteFormInscripcion),
    };

    dataForm.dataFormularioMemorias = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 5,
      hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
      fecha_inicial: formatearFecha(fechaInicialCohorteFormMemoria),
      fecha_final: formatearFecha(fechaFinalCohorteFormMemoria),
    };
    dataForm.dataFormularioDocumentacion = {
      creador: parseInt(idUsuario),
      cohorte: null,
      tipo_formulario: 4,
      hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
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
    dataForm.formularioRegistro.cohorte = resultadoCohorte.resultado.id_cohorte;
    await postNuevoFormulario(dataForm.formularioRegistro);
    let respuestaSesion;
    if (dataForm.tipo_proceso !== "8") {
      dataForm.sesion.cohorte = resultadoCohorte.resultado.id_cohorte;
      respuestaSesion = await postNuevaSesion(dataForm.sesion);
      console.log(respuestaSesion);

      dataForm.formularioAsistencia.cohorte = resultadoCohorte.resultado.id_cohorte;
      dataForm.formularioAsistencia.sesion = respuestaSesion.resultado.id_sesion;
      await postNuevoFormulario(dataForm.formularioAsistencia);
    }

    if (dataForm.tipo_proceso === "11") {
      console.log("Creando formularios apartes");

      dataForm.documentos = {
        id_cohorte: resultadoCohorte.id_cohorte,
        banner: document.getElementById("foto").files[0],
        propuesta: document.getElementById("ponencia").files[0],
        presentacion: document.getElementById("presentacion").files[0],
        memoria: document.getElementById("memoria").files[0],
      };

      console.log(dataForm.documentos);

      dataForm.dataFormularioPonente.cohorte = resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioMemorias.cohorte = resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioDocumentacion.cohorte = resultadoCohorte.resultado.id_cohorte;
      dataForm.dataFormularioDocumentacion.sesion = respuestaSesion.resultado.id_sesion;
      dataForm.dataFormularioDocumentacion.sesion = respuestaSesion.resultado.id_sesion;
      dataForm.dataFormularioDocumentacion.sesion = respuestaSesion.resultado.id_sesion;
      await postNuevoFormulario(dataForm.dataFormularioPonente);
      await postNuevoFormulario(dataForm.dataFormularioMemorias);
      await postNuevoFormulario(dataForm.dataFormularioDocumentacion);
    }
  }
};

export default crearCohorteFnc;
