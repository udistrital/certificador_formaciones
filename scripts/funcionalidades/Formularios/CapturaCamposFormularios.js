import fetchingAsistenciaById from "../../Fetching/GET/AsistenciaById.js";
import validaCursante from "../../Fetching/GET/Cursante.js";
import listaRegistros from "../../Fetching/GET/ListaRegistros.js";
import obtenerFormByHash from "../../Fetching/GET/FormByHash.js";
import listaRegistrosMid from "../../Fetching/GET/Mid/ListaRegistrosMid.js";
import fetchingTipoDocumentoById from "../../Fetching/GET/TipoDocumentoId.js";
import traeFormulario from "../../Fetching/GET/TraeFormulario.js";
import insertaAsistencia from "../../Fetching/POST/InsertaAsistencia.js";
import insertaCursante from "../../Fetching/POST/InsertaCursante.js";
import insertaRegistro from "../../Fetching/POST/InsertaRegistroAspirante.js";
import insertaRegistroPonencia from "../../Fetching/POST/InsertaRegistroPonencia.js";
import formatearFecha from "../FormateoFecha.js";
import notificacion from "../Notificacion.js";
import obtenerParametrosUrlFormulario from "./ObtenerParametrosUrlFormulario.js";
import obtenerFormByHashMid from "../../Fetching/GET/Mid/FormByHashMid.js";

const capturaCampos = async () => {
  if (window.location.pathname.includes("formularioRegistroAspirantes")) {
    formularioRegistro();
  } else if (window.location.pathname.includes("formularioAsistencia")) {
    formularioAsistencia();
  } else if (window.location.pathname.includes("formularioPostulacion")) {
    formularioPostulacion();
  } else if (window.location.pathname.includes("formularioEvidencias")) {
    formularioEvidencias();
  } else if (window.location.pathname.includes("formularioDocumentos")) {
    formularioDocumentos();
  } else if (window.location.pathname.includes("formularioValidacionCursante")) {
    formularioValidaCursante();
  }
};

export const formularioValidaCursante = async () => {
  document.getElementById("form_cursante").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    let codigo = await obtenerParametrosUrlFormulario();

    let resultadoTipoFormulario = await obtenerFormByHash(codigo);

    if (!resultadoTipoFormulario.existe) {
      alert("No se logro identificar el formulario");
    } else {
      let tipoformulario = resultadoTipoFormulario.formulario[0].tipo_formulario;

      console.log(typeof tipoformulario);

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        tipo_documento: formData.get("tipoDocumento"),
        numero_documento: formData.get("numDocumentoPonente"),
      };
      console.log(data);
      let res = await validaCursante(data);
      console.log(res);

      let urlRegistro = `formsInscripcion/formularioRegistroAspirantes.html?codigo=${codigo}&tipoDocumento=${data.tipo_documento}&numDocumento=${data.numero_documento}${res.existe === true ? "&id_cursante=" + res.cursante.id : ""}`,
        urlPontente = `formsPostulaciones/formularioPostulacion.html?codigo=${codigo}&tipoDocumento=${data.tipo_documento}&numDocumento=${data.numero_documento}${res.existe === true ? "&id_cursante=" + res.cursante.id : ""}`;

      console.log(urlRegistro, urlPontente);

      if (tipoformulario === "1") {
        location.href = urlRegistro;
      } else if (tipoformulario === "3") {
        location.href = urlPontente;
      }
    }
  });
};

const extraeCursante = () => {
  let id_cursante = new URLSearchParams(window.location.search).has("id_cursante") ? new URLSearchParams(window.location.search).get("id_cursante") : null;

  return id_cursante;
};

const formularioRegistro = async () => {
  console.log("registro");
  let id_cursante = extraeCursante();
  let codigo = await obtenerParametrosUrlFormulario();

  let resultadoFormByHash = await obtenerFormByHashMid(codigo);

  console.log(id_cursante, codigo, resultadoFormByHash);

  document.getElementById("form_inscritos").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    const formData = new FormData(event.target); // Crear un objeto FormData
    let dataCursante = {
      usuario_edx: formData.get("codigoEdx"),
      primer_nombre: formData.get("primerNombre"),
      segundo_nombre: formData.get("segundoNombre"),
      primer_apellido: formData.get("primerApellido"),
      segundo_apellido: formData.get("segundoApellido"),
      fecha_modificado: formatearFecha(Date.now()),
      tipo_documento: formData.get("tipoDocumento"),
      numero_documento: formData.get("numDocumentoPonente"),
      fecha_nacimiento: formData.get("fechaNacimiento"),
      genero: formData.get("genero"),
      identidad_genero: formData.get("identidadGenero"),
      grupo_etnico: formData.get("grupoEtnico"),
      tipo_discapacidad: formData.get("discapacidad"),
      correo: formData.get("correoPonente"),
      numero_contacto: formData.get("telefonoPonente"),
      fecha_creado: formatearFecha(Date.now()),
    };

    let dataRegistro = {
      cursante: null,
      formulario: resultadoFormByHash.formulario[0].id_formulario,
      dependencia: formData.get("dependencia"),
      vinculacion: formData.get("vinculacion"),
      instituto: formData.get("instituto"),
      ponente: 0,
      fecha_registro: formatearFecha(Date.now()),
    };

    if (id_cursante === null) {
      const respuestaInsertaCursante = await insertaCursante(dataCursante);
      console.log(respuestaInsertaCursante);
      if (respuestaInsertaCursante.estado === "ok") {
        notificacion(true, "Se ha registrado como nuevo cursante");
        dataRegistro.cursante = respuestaInsertaCursante.resultado.id_cursante;
        console.log(dataRegistro);
        let validaExistenciaRegistroCohorte = await listaRegistros(dataRegistro.cursante, dataRegistro.formulario);
        if (!validaExistenciaRegistroCohorte.existe) {
          let resultadoInsertaRegistro = await insertaRegistro(dataRegistro);
          console.log(resultadoInsertaRegistro);
          if (resultadoInsertaRegistro.estado === "ok") {
            notificacion(true, "Se registrado el cursante al proceso");
          } else {
            notificacion(false, "No se ha podido registrar el cursante al proceso");
          }
        }
        console.log(validaExistenciaRegistroCohorte);
      } else {
        notificacion(false, "No se logro registrar al cursante");
      }
    } else {
      console.log(dataRegistro);

      dataRegistro.cursante = id_cursante;
      let validaExistenciaRegistroCohorte = await listaRegistros(dataRegistro.cursante, dataRegistro.formulario);
      if (!validaExistenciaRegistroCohorte.existe) {
        let resultadoInsertaRegistro = await insertaRegistro(dataRegistro);
        console.log(resultadoInsertaRegistro);
        if (resultadoInsertaRegistro.estado === "ok") {
          notificacion(true, "Se registrado el cursante a la cohorte o modulo");
        } else {
          notificacion(false, "No se ha podido registrar el cursante a la cohorte o modulo");
        }
      } else {
        notificacion(false, "El cursante ya se encuentra registrado en la cohorte o modulo");
      }
    }
    gotop();
  });
};

const gotop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace que el desplazamiento sea suave
  });
};

const formularioAsistencia = async () => {
  document.getElementById("form_asistencias").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    const formData = new FormData(event.target); // Crear un objeto FormData

    let dataCursante = {
      tipo_documento: formData.get("tipoDocumento"),
      numero_documento: formData.get("numDocumentoPonente"),
    };

    console.log(dataCursante);
    let tipoDocumentoById = await fetchingTipoDocumentoById(dataCursante.tipo_documento);
    console.log(tipoDocumentoById[0].codigo_abreviacion);

    // dataCursante.tipo_documento = tipoDocumentoById[0].codigo_abreviacion;

    const codigo_abreviacion = tipoDocumentoById[0].codigo_abreviacion;

    const codigo = await obtenerParametrosUrlFormulario();
    const resultadoFormByHash = await obtenerFormByHashMid(codigo);
    console.log(codigo, resultadoFormByHash.formulario);
    console.log(resultadoFormByHash.formulario[0].id_modulo);

    if (resultadoFormByHash.existe === true) {
      const resultadoValidaCursante = await validaCursante(dataCursante);
      if (resultadoValidaCursante.existe === true) {
        console.log(resultadoValidaCursante.cursante);
        let resultadoListarRegistros = await listaRegistrosMid(resultadoFormByHash.formulario[0].id_cohorte, resultadoFormByHash.formulario[0].id_modulo);
        console.log(resultadoListarRegistros);

        if (resultadoListarRegistros.existe) {
          let filtraCursante = resultadoListarRegistros.registradoCohorte.filter((registro) => registro.tipo_documento === codigo_abreviacion && registro.numero_documento === dataCursante.numero_documento);
          console.log(filtraCursante);
          if (filtraCursante.length !== 0) {
            console.log(resultadoListarRegistros.registradoCohorte[0].id_registro);
            let dataAsistencia = {
              formulario: resultadoFormByHash.formulario[0].id_formulario,
              registro: resultadoListarRegistros.registradoCohorte[0].id_registro,
              fecha_asistencia: formatearFecha(Date.now()),
            };

            const respuestaAsistenciaById = await fetchingAsistenciaById(dataAsistencia.registro);

            console.log(respuestaAsistenciaById);
            if (respuestaAsistenciaById.length !== 0) {
              notificacion(false, "Ya se registro su asistencia previamente");
            } else {
              let respuestaInsertaAsistencia = await insertaAsistencia(dataAsistencia);
              if (respuestaInsertaAsistencia.estado === "ok") {
                notificacion(true, "Se registro la asistencia");
              } else if (respuestaInsertaAsistencia.estado === "error") {
                notificacion(false, "Hubo un error, no se registro la asistencia");
              }
            }
          } else {
            notificacion(false, "El cursante no esta registrado en la cohorte o modulo");
          }
        } else {
          notificacion(false, "No fue posible cargar el listado de registros");
        }
      } else {
        notificacion(false, "No se encuentra registrado como cursante");
      }
    } else {
      notificacion(false, "No se encontro información del formulario");
    }

    // let respuestaExisteFormulario = await traeFormulario(extraDatosInsertaAsistencia().id_formulario);
    // console.log(respuestaExisteFormulario);

    // if (res.existe === true && respuestaExisteFormulario.existe === true) {
    //   // notificacion(true, "exite cursante y cohorte");

    //   let filtraCursante = resListarRegistros.registradoCohorte.filter((registro) => registro.tipo_documento === tipoDocumentoById[0].codigo_abreviacion && registro.numero_documento === data.numDocumento);

    //   console.log(filtraCursante);

    //   if (resListarRegistros.existe === false || filtraCursante.length === 0) {
    //     notificacion(false, "No se puede registrar la asistencia ya que no esta registrado en la cohorte");
    //   } else if (resListarRegistros.existe) {
    //     let id_registro = filtraCursante[0].id_registro;

    //     console.log(id_registro);

    //     let dataAsistencia = {
    //       formulario: extraDatosInsertaAsistencia().id_formulario,
    //       registro: id_registro,
    //       registro: resListarRegistros.registradoCohorte[0].id_registro,
    //       fecha_creado: formatearFecha(Date.now()),
    //       fecha_modificado: formatearFecha(Date.now()),
    //       fecha_asistencia: formatearFecha(Date.now()),
    //     };
    //     console.log(dataAsistencia);

    //     console.log(respuestaInsertaAsistencia);
    //   }
    // } else {
    //   notificacion(false, "No existe el cursante");
    // }

    // return data;
  });
};

const extraDatosInsertaAsistencia = () => {
  return {
    id_formulario: new URLSearchParams(window.location.search).get("id_formulario"),
  };
};

const formularioPostulacion = async () => {
  console.log("registro");
  let id_cursante = extraeCursante();
  let codigo = await obtenerParametrosUrlFormulario();

  let resultadoFormByHash = await obtenerFormByHashMid(codigo);

  console.log(id_cursante, codigo, resultadoFormByHash);

  document.getElementById("form_ponentes").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    const formData = new FormData(event.target); // Crear un objeto FormData

    let dataCursante = {
      usuario_edx: formData.get("codigoEdx"),
      primer_nombre: formData.get("primerNombre"),
      segundo_nombre: formData.get("segundoNombre"),
      primer_apellido: formData.get("primerApellido"),
      segundo_apellido: formData.get("segundoApellido"),
      fecha_modificado: formatearFecha(Date.now()),
      tipo_documento: formData.get("tipoDocumento"),
      numero_documento: formData.get("numDocumentoPonente"),
      fecha_nacimiento: formData.get("fechaNacimiento"),
      genero: formData.get("genero"),
      identidad_genero: formData.get("identidadGenero"),
      grupo_etnico: formData.get("grupoEtnico"),
      tipo_discapacidad: formData.get("discapacidad"),
      correo: formData.get("correoPonente"),
      numero_contacto: formData.get("telefonoPonente"),
      fecha_creado: formatearFecha(Date.now()),
    };

    let dataRegistro = {
      cursante: id_cursante,
      formulario: resultadoFormByHash.formulario[0].id_formulario,
      vinculacion: formData.get("vinculacion"),
      ponente: true,
      fecha_registro: formatearFecha(Date.now()),
      fecha_creado: formatearFecha(Date.now()),
      fecha_modificado: formatearFecha(Date.now()),
      propuestaPonente: formData.get("propuestaPostulante"),
      perfilPonente: formData.get("perfilPostulante"),
    };

    let dataRegistroPonencia = {
      registro: null,
      perfil: formData.get("perfilPostulante"),
      ponencia: "url del documento propuesta de ponencia",
      duracion: 10,
      aceptado: false,
      presentacion: null,
      foto: null,
      memoria: null,
      fecha_creado: formatearFecha(Date.now()),
      fecha_modificado: formatearFecha(Date.now()),
    };

    if (id_cursante === null) {
      console.log("insertando ");

      let resulCursante = await insertaCursante(dataCursante);
      if (resulCursante.estado === "ok") {
        dataRegistro.cursante = resulCursante.resultado.id_cursante;
      } else if (resulCursante.estado === "error") {
        console.log(resulCursante.resultado.error_motivo);
      }
    }

    let resultadoExistenciaFormulario = await traeFormulario(id_formulario);
    console.log(resultadoExistenciaFormulario);

    let validaExistenciaRegistroCohorte = await listaRegistrosMid(resultadoExistenciaFormulario.formulario[0].cohorte);

    console.log(validaExistenciaRegistroCohorte);

    if (validaExistenciaRegistroCohorte.existe === true) {
      let resultRegistro = await insertaRegistro(dataRegistro);
      console.log(resultRegistro);

      if (resultRegistro.estado === "ok") {
        dataRegistroPonencia.registro = resultRegistro.resultado.id_registro;

        let resultRegistroPonencia = await insertaRegistroPonencia(dataRegistroPonencia);
        if (resultRegistroPonencia.estado === "ok") {
          notificacion(true, "Se registro como ponente a la cohorte");
        }
        console.log(resultRegistroPonencia);
      } else {
        notificacion(false, "Error al registrarse en la cohorte como ponente");
      }
    } else {
      notificacion(false, "Ya se encuentra registrado en la cohorte, como ponente o como cursante");
      // console.log(restulRegistro);
    }

    console.log(dataRegistroPonencia);
    gotop();
  });
};

const formularioEvidencias = () => {
  document.getElementById("form_evidencias").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    let codigo = obtenerParametrosUrlFormulario();

    let resultadoFormByHashMid = await obtenerFormByHashMid(codigo);

    console.log(resultadoFormByHashMid);

    const formData = new FormData(event.target); // Crear un objeto FormData
    // Capturar datos
    let data = {
      // nombreProceso: formData.get("nombreFormacion"),
      // nombreTipoProceso: formData.get("tipoFormacion"),
      // anio: formData.get("anioFormacion"),
      // cohorte: formData.get("numeroCohorte"),
      id_cohorte: idCohorteModelo,
      tipoDocumento: formData.get("tipoDocumento"),
      numDocumento: formData.get("numDocumentoPostulante"),
      numDocumentoConfirmacion: formData.get("numDocumentoPostulanteRepetir"),
      memoria: formData.get("memoriaPonencia"),
    };
    console.log(data);

    return data;
  });
};

const formularioDocumentos = () => {
  document.getElementById("form_documentos").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada
    let { idCohorteModelo, cohorte, idProceso, nombreProceso, nombreTipoProceso, idTipoProceso, anio, id_formulario } = obtenerParametrosUrlFormulario();

    const formData = new FormData(event.target); // Crear un objeto FormData

    // Capturar datos
    let data = {
      id_cohorte: idCohorteModelo,
      tipoDocumento: formData.get("tipoDocumento"),
      numDocumento: formData.get("numDocumentoPostulante"),
      numDocumentoConfirmacion: formData.get("numDocumentoPostulanteRepetir"),
      foto: formData.get("fotoPonente"),
      presentacion: formData.get("presentacionPonente"),
    };
    console.log(data);

    return data;
  });
};

capturaCampos();
