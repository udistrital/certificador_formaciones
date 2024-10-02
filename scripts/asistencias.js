import listaAsistenciasCohorte from "./Fetching/GET/ListaAsistenciasCohorte.js";
import { notificarNoRegistros } from "./funcionalidades/NotificaNoExistenciaRegistros.js";

const obtenerIdCohorteProcesoUrl = () => {
  let id_modulo = null;

  if (window.location.href.includes("idModulo")) {
    id_modulo = new URLSearchParams(window.location.search).get("idModulo");
  }
  return {
    id_proceso: new URLSearchParams(window.location.search).get("idProceso"),
    id_cohorte: new URLSearchParams(window.location.search).get("idCohorte"),
    id_modulo,
  };
};

const mostrarListadoAsistencias = async () => {
  let { id_proceso, id_cohorte, id_modulo } = obtenerIdCohorteProcesoUrl();
  let listado = await listaAsistenciasCohorte(
    id_cohorte,
    id_proceso,
    id_modulo
  );
  console.log(listado);

  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");
  $tbody.innerHTML = "";

  if (listado.length !== 0) {
    listado.forEach((asistencia, index) => {
      $template.querySelector("tr").innerHTML = `
          <tr>
              <td>${asistencia.nombre_inscrito}</td>
              <td>${asistencia.tipo_documento}</td>
              <td>${asistencia.numero_documento}</td>
              <td>${asistencia.id_asistencia}</td>
              <td>${asistencia.fecha_asistencia}</td>
              <td class="td-acciones">
              <span class="material-symbols-outlined" title="Ver asistencias">
                  <a href="../pages/CursoConTutorCohortesPage.html"
                  >visibility</a
                  ></span
              >
              </td>
          </tr>
          `;

      let clone = document.importNode($template, true);

      $fargmento.appendChild(clone);
    });
    $tbody.appendChild($fargmento);
  } else {
    if (window.location.href.includes("idModulo")) {
      notificarNoRegistros(
        "No se encontraron asistencias registradas el modulo"
      );
    } else {
      notificarNoRegistros(
        "No se encontraron asistencias registradas para la cohorte"
      );
    }
  }
};

mostrarListadoAsistencias();

// let d = document;
// let orderBool = false;
// d.addEventListener("click", (e) => {
//   if (e.target === d.getElementById("asistencia-tipo-sort")) {
//     console.log("nombre completo sort");
//     orderBool = !orderBool;
//     //ORDENAMIENTO DE z A a
//     if (orderBool) {
//       modeloAsistencias.sort((a, b) => {
//         if (a.tipoDoc < b.tipoDoc) {
//           return 1;
//         } else if (a.tipoDoc > b.tipoDoc) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });
//     } else {
//       //ORDENAMIENTO DE a A z
//       modeloAsistencias.sort((a, b) => {
//         if (a.tipoDoc > b.tipoDoc) {
//           return 1;
//         } else if (a.tipoDoc < b.tipoDoc) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });
//     }
//     obtenerDocEstudianteAsistencia(modeloAsistencias);
//   } else if (e.target === d.getElementById("asistencia-numdoc-sort")) {
//     console.log("numero documento sort");
//     orderBool = !orderBool;
//     //ORDENAMIENTO DE MAYOR A MENOR
//     if (orderBool) {
//       modeloAsistencias.sort((a, b) => b.documento - a.documento);
//     } else {
//       //ORDENAMIENTO DE MENOR A MAYOR
//       modeloAsistencias.sort((a, b) => a.documento - b.documento);
//     }
//     obtenerDocEstudianteAsistencia(modeloAsistencias);
//   } else if (e.target === d.getElementById("asistencia-nombreE-sort")) {
//     console.log("nombre completo sort");
//     orderBool = !orderBool;
//     //ORDENAMIENTO DE z A a
//     if (orderBool) {
//       modeloAsistencias.sort((a, b) => {
//         if (a.nombreEstudiante < b.nombreEstudiante) {
//           return 1;
//         } else if (a.nombreEstudiante > b.nombreEstudiante) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });
//     } else {
//       //ORDENAMIENTO DE a A z
//       modeloAsistencias.sort((a, b) => {
//         if (a.nombreEstudiante > b.nombreEstudiante) {
//           return 1;
//         } else if (a.nombreEstudiante < b.nombreEstudiante) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });
//     }
//     obtenerDocEstudianteAsistencia(modeloAsistencias);
//   } else if (e.target === d.getElementById("asistencia-numasis-sort")) {
//     console.log("numero documento sort");
//     orderBool = !orderBool;
//     //ORDENAMIENTO DE MAYOR A MENOR
//     if (orderBool) {
//       modeloAsistencias.sort(
//         (a, b) => b.numeroAsistencias - a.numeroAsistencias
//       );
//     } else {
//       //ORDENAMIENTO DE MENOR A MAYOR
//       modeloAsistencias.sort(
//         (a, b) => a.numeroAsistencias - b.numeroAsistencias
//       );
//     }
//     obtenerDocEstudianteAsistencia(modeloAsistencias);
//   }
//   else if (e.target === d.getElementById("asistencia-ultasis-sort")) {
//     console.log("finicial");
//     orderBool = !orderBool;
//     //ORDENAMIENTO DE MAYOR A MENOR
//     if (orderBool) {
//       modeloAsistencias.sort(
//         (a, b) => b.ultimaAsistencia - a.ultimaAsistencia
//       );
//     } else {
//       //ORDENAMIENTO DE MENOR A MAYOR
//       modeloAsistencias.sort(
//         (a, b) => a.ultimaAsistencia - b.ultimaAsistencia
//       );
//     }
//     obtenerDocEstudianteAsistencia(modeloAsistencias);
//   }
// });

// document
//   .getElementById("input-buscador-asistencia")
//   .addEventListener("input", (event) => {
//     let filtro = event.target.value.toLowerCase();
//     console.log(filtro);
//     let filtrado = modeloAsistencias.filter((asitente) => {
//       return (
//         asitente.nombreEstudiante.toLowerCase().includes(filtro) ||
//         asitente.tipoDoc.toLowerCase().includes(filtro) ||
//         asitente.documento.toString().toLowerCase().includes(filtro) ||
//         asitente.numeroAsistencias.toString().toLowerCase().includes(filtro) ||
//         asitente.ultimaAsistencia.toString().toLowerCase().includes(filtro)
//       );
//     });
//     console.log(filtrado);
//     // obtenerIdCohorte(filtrado);
//     obtenerDocEstudianteAsistencia(filtrado);
//   });

// const obtenerDocEstudianteAsistencia = (listado) => {
//   mostrarListadoAsistencias(listado);
// };
