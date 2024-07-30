import {
  redireccionarAsistencias,
  redireccionarCertificaciones,
  redireccionarConfiguraciones,
} from "./Redirecciones.js";

const obtenerIdCohorte = (li) => {
  console.log(li, "dddddddddddddddddddddd");
  let listaAsistencias = document.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log(asistencia);
      console.log(li[id]);
      let idProceso = li[id].proceso,
        idCohorteModelo = li[id].id;
      redireccionarAsistencias(idProceso, idCohorteModelo);
    });
  });

  let listaCertificados = document.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      console.log(li[id]);
      let idProceso = li[id].proceso,
        idCohorteModelo = li[id].id;
      redireccionarCertificaciones(idProceso, idCohorteModelo);
    });
  });

  let listaConfiguraciones = document.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      console.log(li[id]);
      let idProceso = li[id].proceso,
        idCohorteModelo = li[id].id;
      redireccionarConfiguraciones(idProceso, idCohorteModelo);
    });
  });
};

export default obtenerIdCohorte;
