import listaNoCertificadosMid from "../../Fetching/GET/Mid/ListaNoCertificados.js";
import procesoById from "../../Fetching/GET/ProcesoById.js";
import llenaTablaNoCertificados from "./LlenaTablaNoCertificados.js";
import obtenerIdCursanteNoCertificado from "./ObtenerIdCursanteNoCertificado.js";

const generarCertificados = async (id_proceso, id_cohorte, id_modulo) => {
  let noCertificados;
  const proceso = await procesoById(id_proceso);
  const nombre_tipo_proceso = proceso.proceso[0].nombre_tipo_proceso;
  if (id_modulo === "null") {
    noCertificados = await listaNoCertificadosMid(id_cohorte);
  } else {
    noCertificados = await listaNoCertificadosMid(id_cohorte, id_modulo);
  }

  llenaTablaNoCertificados(noCertificados, nombre_tipo_proceso);
  if (id_modulo === "null") {
    obtenerIdCursanteNoCertificado(noCertificados, id_cohorte);
  } else {
    obtenerIdCursanteNoCertificado(noCertificados, id_cohorte, id_modulo);
  }
};

export default generarCertificados;
