import { redireccionarAsistencias, redireccionarCertificaciones, redireccionarConfiguraciones } from "./Redirecciones.js";

const obtenerIdCohorte = (li) => {
  console.log(li, "dddddddddddddddddddddd");
  let listaAsistencias = document.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log(asistencia, "ssssssssssssss");
      console.log(
        id,
        "id formacion",
        li[id].id,
        "id cohorte:",
        li[id].numCohorte
      );
      redireccionarAsistencias(li[id].numCohorte, li[id].id);
    });
  });

  let listaCertificados = document.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      console.log(
        id,
        "id formacion",
        li[id].idFormacion,
        "id cohorte:",
        li[id].idCohorte
      );
      redireccionarCertificaciones(li[id].numCohorte, li[id].id);
    });
  });

  let listaConfiguraciones = document.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      console.log(
        id,
        "id formacion",
        li[id].idFormacion,
        "id cohorte:",
        li[id].idCohorte
      );
      redireccionarConfiguraciones(li[id].numCohorte, li[id].id);
    });
  });
};

export default obtenerIdCohorte;