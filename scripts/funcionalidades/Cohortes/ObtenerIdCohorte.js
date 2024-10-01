import {
  redireccionarAsistencias,
  redireccionarCertificaciones,
  redireccionarConfiguraciones,
  redireccionarCursantesRegistrados,
  redireccionarEventosModulos,
  redireccionarPonentesRegistrados,
} from "./Redirecciones.js";

const obtenerIdCohorte = (li) => {
  let listaAsistencias = document.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("CursosModulos") ||
        window.location.pathname.includes("EventosModulos")
      ) {
        let idProceso = li[id].proceso,
          idCohorteModelo = li[id].cohorte,
          idModulo = li[id].id;
        redireccionarAsistencias(idProceso, idCohorteModelo, idModulo);
      } else {
        let idProceso = li[id].id_proceso,
          idCohorteModelo = li[id].id_cohorte;
        redireccionarAsistencias(idProceso, idCohorteModelo);
      }
    });
  });

  let listaCertificados = document.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("CursosModulos") ||
        window.location.pathname.includes("EventosModulos")
      ) {
        let idProceso = li[id].proceso,
          idCohorteModelo = li[id].cohorte,
          idModulo = li[id].id;
        redireccionarCertificaciones(idProceso, idCohorteModelo, idModulo);
      } else {
        let idProceso = li[id].id_proceso,
          idCohorteModelo = li[id].id_cohorte;
        redireccionarCertificaciones(idProceso, idCohorteModelo);
      }
    });
  });

  let listaConfiguraciones = document.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("CursosModulos") ||
        window.location.pathname.includes("EventosModulos")
      ) {
        let idProceso = li[id].proceso,
          idCohorteModelo = li[id].cohorte,
          idModulo = li[id].id;
        redireccionarConfiguraciones(idProceso, idCohorteModelo, idModulo);
      } else {
        let idProceso = li[id].id_proceso,
          idCohorteModelo = li[id].id_cohorte;
        redireccionarConfiguraciones(idProceso, idCohorteModelo);
      }
    });
  });

  let listaPonentes = document.querySelectorAll(".index-ponentes");
  listaPonentes.forEach((ponente, id) => {
    ponente.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("CursosModulos") ||
        window.location.pathname.includes("EventosModulos")
      ) {
        let idProceso = li[id].proceso,
          idCohorteModelo = li[id].cohorte,
          idModulo = li[id].id;
        redireccionarPonentesRegistrados(idProceso, idCohorteModelo, idModulo);
      } else {
        let idProceso = li[id].id_proceso,
          idCohorteModelo = li[id].id_cohorte;
        redireccionarPonentesRegistrados(idProceso, idCohorteModelo);
      }
    });
  });

  let listaCursantes = document.querySelectorAll(".index-cursantes");
  listaCursantes.forEach((cursante, id) => {
    cursante.addEventListener("click", (e) => {
      if (
        window.location.pathname.includes("CursosModulos") ||
        window.location.pathname.includes("EventosModulos")
      ) {
        let idProceso = li[id].proceso,
          idCohorteModelo = li[id].cohorte,
          idModulo = li[id].id;
        redireccionarCursantesRegistrados(idProceso, idCohorteModelo, idModulo);
      } else {
        let idProceso = li[id].id_proceso,
          idCohorteModelo = li[id].id_cohorte;
        redireccionarCursantesRegistrados(idProceso, idCohorteModelo);
      }
    });
  });

  let listaModulos = document.querySelectorAll(".index-modulos");
  listaModulos.forEach((modulos, id) => {
    modulos.addEventListener("click", (e) => {
      let idProceso = li[id].id_proceso,
        idCohorteModelo = li[id].id_cohorte;
      redireccionarEventosModulos(idProceso, idCohorteModelo);
    });
  });
};

export default obtenerIdCohorte;
