import listaNoCertificadosMid from "../../Fetching/GET/Mid/ListaNoCertificados.js";
import llenaTablaCertificados from "./LlenaTablaCertificados.js";

const certificadosEmitidos = async (id_proceso, id_cohorte, id_modulo) => {
  let certificados;
  if (id_modulo === "null") {
    certificados = await listaNoCertificadosMid(id_cohorte);
  } else {
    certificados = await listaNoCertificadosMid(id_cohorte, id_modulo);
  }
  console.log(certificados);
  llenaTablaCertificados(certificados);
};

export default certificadosEmitidos;
