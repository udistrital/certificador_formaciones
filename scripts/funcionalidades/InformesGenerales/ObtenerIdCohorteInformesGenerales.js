import {
  redireccionarAsistencias,
  redireccionarCertificaciones,
  redireccionarCursantesRegistrados,
  redireccionarEventosModulos,
  redireccionarPonentesRegistrados,
} from "../Cohortes/Redirecciones.js";
import { llenarModalInfoCohorteSeleccionada } from "./LlenarModalInfoCohorteGeneral.js";

export const obtenerIdCohorteInformeGeneral = (li) => {
  //   console.log(li);
  let d = document;
  // llenarTablaInformesGenerales(li);
  let listaInfos = d.querySelectorAll(".index-info-cohorte");
  listaInfos.forEach((formacion, id) => {
    // console.log(formacion[id]);
    formacion.addEventListener("click", (e) => {
      //ACA SE CAPTURA EL ID DE LA FORMACION SELECCIONADA
      //   console.log(li[id]);
      llenarModalInfoCohorteSeleccionada(li[id]);
    });
  });

  let listaAsistencias = d.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      //   console.log(li[id]);
      redireccionarAsistencias(li[id].id_proceso, li[id].id_cohorte);
      // redireccionarAsistencias(li[id].id_cohorte, li[id].id_proceso);
    });
  });

  let listaCertificados = d.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      //   console.log(li[id]);
      redireccionarCertificaciones(li[id].id_proceso, li[id].id_cohorte);
    });
  });

  let listaConfiguraciones = d.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      //   console.log(li[id]);
      // redireccionarConfiguraciones(li[id].id_cohorte, li[id].id_proceso);
    });
  });

  let listaPonentes = document.querySelectorAll(".index-ponentes");
  listaPonentes.forEach((ponente, id) => {
    ponente.addEventListener("click", (e) => {
      let idProceso = li[id].id_proceso,
        idCohorteModelo = li[id].id_cohorte;
      //   console.log(li[id]);
      redireccionarPonentesRegistrados(idProceso, idCohorteModelo);
    });
  });

  let listaCursantes = document.querySelectorAll(".index-cursantes");
  listaCursantes.forEach((cursante, id) => {
    cursante.addEventListener("click", (e) => {
      let idProceso = li[id].id_proceso,
        idCohorteModelo = li[id].id_cohorte;
      //   console.log(li[id]);
      redireccionarCursantesRegistrados(idProceso, idCohorteModelo);
    });
  });

  let listaModulos = document.querySelectorAll(".index-modulos");
  listaModulos.forEach((modulos, id) => {
    modulos.addEventListener("click", (e) => {
      let idProceso = li[id].id_proceso,
        idCohorteModelo = li[id].id_cohorte,
        idTipoFormacion = li[id].id_tipo_proceso;
      //   console.log(li[id]);

      redireccionarEventosModulos(idProceso, idCohorteModelo, idTipoFormacion);
    });
  });
};
