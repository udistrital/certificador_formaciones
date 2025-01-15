import listaNoCertificadosMid from "../../Fetching/GET/Mid/ListaNoCertificados.js";
import llenaTablaCertificados from "./LlenaTablaCertificados.js";
import listaCertificadosMid from "../../Fetching/GET/Mid/ListaCertificados.js";

const certificadosEmitidos = async (id_proceso, id_cohorte, id_modulo) => {
  
  let certificados;
  if (id_modulo === "null") {
    certificados = await listaCertificadosMid(id_cohorte);
  } else {
    certificados = await listaCertificadosMid(id_cohorte, id_modulo);
  }
  console.log(certificados);
  llenaTablaCertificados(certificados);//555555
};

export default certificadosEmitidos;
