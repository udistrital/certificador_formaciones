import validaCursante from "../../Fetching/GET/Cursante.js";
import { formularioValidaCursante } from "./CapturaCamposFormularios.js";

const redireccionarFormulario = (
  idCohorteModelo,
  cohorte,
  idProceso,
  nombreProceso,
  nombreTipoProceso,
  idTipoProceso,
  anio
) => {
  /**
   * ${
    validarRedireccion() === "formularioValidacionCursante" &&
    "&existe_cursante=" + validaCursante()
  }
   */
  location.href = `${validarRedireccion()}.html?idCohorteModelo=${idCohorteModelo}&cohorte=${cohorte}&idProceso=${idProceso}&nombreProceso=${nombreProceso}&nombreTipoProceso=${nombreTipoProceso}&idTipoProceso=${idTipoProceso}&anio=${anio}`;
};

const validarRedireccion = () => {
  let fi = "formularioValidacionCursante",
    fp = "formularioPostulacion",
    fd = "formularioDocumentos",
    fm = "formularioEvidencias",
    fa = "formularioAsistencia";
  if (window.location.pathname.includes("PageFormsInscripciones")) {
    return fi;
  } else if (window.location.pathname.includes("PageFormsAsistencias")) {
    return fa;
  } else if (window.location.pathname.includes("PageFormsPostulaciones")) {
    return fp;
  } else if (window.location.pathname.includes("PageFormsEvidencias")) {
    return fm;
  } else if (window.location.pathname.includes("PageFormsDocumentacion")) {
    return fd;
  }
};

export default redireccionarFormulario;
