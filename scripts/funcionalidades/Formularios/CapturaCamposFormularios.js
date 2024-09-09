import validaCursante from "../../Fetching/GET/Cursante.js";
import insertaRegistro from "../../Fetching/POST/InsertaRegistroAspirante.js";
import obtenerParametrosUrlFormulario from "./ObtenerParametrosUrlFormulario.js";

const capturaCampos = () => {
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
  } else if (
    window.location.pathname.includes("formularioValidacionCursante")
  ) {
    formularioValidaCursante();
  }
};

export const formularioValidaCursante = () => {
  document
    .getElementById("form_cursante")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        tipoDocumento: formData.get("tipoDocumento"),
        numDocumento: formData.get("numDocumentoPonente"),
        terminos: formData.get("terminos"),
      };
      console.log(data);
      let existe_cursante = await validaCursante(data);
      let {
        idCohorteModelo,
        cohorte,
        idProceso,
        nombreProceso,
        nombreTipoProceso,
        idTipoProceso,
        anio,
      } = obtenerParametrosUrlFormulario();
      location.href = `formularioRegistroAspirantes.html?idCohorteModelo=${idCohorteModelo}&cohorte=${cohorte}&idProceso=${idProceso}&nombreProceso=${nombreProceso}&nombreTipoProceso=${nombreTipoProceso}&idTipoProceso=${idTipoProceso}&anio=${anio}&existeCursante=${existe_cursante}&tipoDocumento=${data.tipoDocumento}&numDocumento=${data.numDocumento}&terminos=${data.terminos}`;

      // return data;
    });
};

const formularioRegistro = () => {
  document
    .getElementById("form_inscritos")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        nombreProceso: formData.get("nombreFormacion"),
        nombreTipoProceso: formData.get("tipoFormacion"),
        anio: formData.get("anioFormacion"),
        cohorte: formData.get("numeroCohorte"),
        nombres: formData.get("nombresPonente"),
        apellidos: formData.get("apellidosPonente"),
        tipoDocumento: formData.get("tipoDocumento"),
        numDocumento: formData.get("numDocumentoPonente"),
        numDocumentoConfirmacion: formData.get("numDocumentoPonenteRepetir"),
        correo: formData.get("correoPonente"),
        correoConfirmacion: formData.get("correoPonenteRepetir"),
        numContacto: formData.get("telefonoPonente"),
        numContactoConfirmacion: formData.get("telefonoPonenteRepetir"),
        tipoVinculacion: formData.get("vinculacion"),
        terminos: formData.get("terminos"),
      };
      // console.log(data);
      insertaRegistro(data);
      // return data;
    });
};

const formularioAsistencia = () => {
  document
    .getElementById("form_asistencias")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        nombreProceso: formData.get("nombreFormacion"),
        nombreTipoProceso: formData.get("tipoFormacion"),
        anio: formData.get("anioFormacion"),
        cohorte: formData.get("numeroCohorte"),
        tipoDocumento: formData.get("tipoDocumento"),
        numDocumento: formData.get("numDocumentoPonente"),
        numDocumentoConfirmacion: formData.get("numDocumentoPonenteRepetir"),
        terminos: formData.get("terminos"),
      };
      console.log(data);

      return data;
    });
};

const formularioPostulacion = () => {
  document
    .getElementById("form_ponentes")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        nombreProceso: formData.get("nombreFormacion"),
        nombreTipoProceso: formData.get("tipoFormacion"),
        anio: formData.get("anioFormacion"),
        cohorte: formData.get("numeroCohorte"),
        nombres: formData.get("nombresPostulante"),
        apellidos: formData.get("apellidosPostulante"),
        tipoDocumento: formData.get("tipoDocumento"),
        numDocumento: formData.get("numDocumentoPostulante"),
        numDocumentoConfirmacion: formData.get("numDocumentoPostulanteRepetir"),
        correo: formData.get("correoPostulante"),
        correoConfirmacion: formData.get("correoPostulanteRepetir"),
        numContacto: formData.get("telefonoPostulante"),
        numContactoConfirmacion: formData.get("telefonoPostulanteRepetir"),
        tipoVinculacion: formData.get("vinculacion"),
        perfilPonente: formData.get("perfilPostulante"),
        propuestaPonente: formData.get("propuestaPostulante"),
        terminos: formData.get("terminos"),
      };
      console.log(data);

      return data;
    });
};

const formularioEvidencias = () => {
  document
    .getElementById("form_evidencias")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        nombreProceso: formData.get("nombreFormacion"),
        nombreTipoProceso: formData.get("tipoFormacion"),
        anio: formData.get("anioFormacion"),
        cohorte: formData.get("numeroCohorte"),
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
  document
    .getElementById("form_documentos")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

      const formData = new FormData(event.target); // Crear un objeto FormData
      console.log(event.target);

      // Capturar datos
      let data = {
        nombreProceso: formData.get("nombreFormacion"),
        nombreTipoProceso: formData.get("tipoFormacion"),
        anio: formData.get("anioFormacion"),
        cohorte: formData.get("numeroCohorte"),
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
