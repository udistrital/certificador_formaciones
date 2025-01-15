import generaExcelCertificados from "../../Fetching/GET/Mid/ExportarCertificados.js";
import getCertificadoPrueba from "../../Fetching/GET/Mid/GetCertificadoPrueba.js";
import listaNoCertificadosMid from "../../Fetching/GET/Mid/ListaNoCertificados.js";
import certificadoPrueba from "./CertificadoPrueba.js";
import certificadosEmitidos from "./CertificadosEmitidos.js";
import generarCertificados from "./GeneraCertificados.js";

export const obtenerParametrosUrl = async () => {
  let id_proceso = new URLSearchParams(window.location.search).get("idProceso");
  let id_cohorte = new URLSearchParams(window.location.search).get("idCohorte");
  let id_modulo = new URLSearchParams(window.location.search).get("idModulo");
  let infoFormacion = {
    id_proceso,
    id_cohorte,
    id_modulo,
  };
  // console.log(infoFormacion);
  document.getElementById("link-cert-emitidos").addEventListener("click", (e) => {
    location.href = `CertificadosEmitidosPage.html?idProceso=${id_proceso}&idCohorte=${id_cohorte}`;
  });
  document.getElementById("link-gen-certificados").addEventListener("click", (e) => {
    location.href = `/pages/Certificados/GenerarCertificadosPage.html?idProceso=${id_proceso}&idCohorte=${id_cohorte}${id_modulo !== null ? "&idModulo=" + id_modulo : ""}`;
  });
  document.getElementById("link-prueba-certificados").addEventListener("click", (e) => {
    location.href = `/pages/Certificados/CertificadoPrueba.html?idProceso=${id_proceso}&idCohorte=${id_cohorte}${id_modulo !== null ? "&idModulo=" + id_modulo : ""}`;
  });

  if (window.location.pathname.includes("GenerarCertificadosPage")) {
    generarCertificados(id_proceso, id_cohorte, id_modulo);
  } else if (window.location.pathname.includes("CertificadosEmitidosPage")) {
    document.getElementById("exportar_certificados").addEventListener("click", async (e) => {
      console.log("Exportar ");
      await generaExcelCertificados(id_cohorte, id_modulo);
    });
    certificadosEmitidos(id_proceso, id_cohorte, id_modulo);
  } else if (window.location.pathname.includes("CertificadoPrueba")) {
    certificadoPrueba(id_proceso, id_cohorte, id_modulo);
  }
};
