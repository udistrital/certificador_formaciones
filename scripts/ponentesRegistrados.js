import listaRegistrosPonentesCohorte from "./Fetching/GET/ListaRegistrosPonentesCohorte.js";
import llenaFormNuevoModulo from "./funcionalidades/Modulos/LlenaFormNuevoModulo.js";
import obtenerModuloId from "./funcionalidades/Modulos/ObtenerModuloId.js";
import { notificarNoRegistros } from "./funcionalidades/NotificaNoExistenciaRegistros.js";

const obtenerIdCohorteProcesoUrl = () => {
  return {
    id_proceso: new URLSearchParams(window.location.search).get("idProceso"),
    id_cohorte: new URLSearchParams(window.location.search).get("idCohorte"),
  };
};

const mostrarListadoAsistencias = async () => {
  let { id_proceso, id_cohorte } = obtenerIdCohorteProcesoUrl();
  let listadoPonentesRegistradosCohorte = await listaRegistrosPonentesCohorte(
    id_cohorte,
    id_proceso
  );

  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");
  $tbody.innerHTML = "";

  if (listadoPonentesRegistradosCohorte.length !== 0) {
    listadoPonentesRegistradosCohorte.forEach((registrado, index) => {
      $template.querySelector("tr").innerHTML = `
          <tr>
              <td>${registrado.nombre_inscrito}</td>
              <td>${registrado.tipo_documento}</td>
              <td>${registrado.numero_documento}</td>
              <td>${registrado.id_asistencia}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.perfil}</td>
              <td>${registrado.ponencia}</td>
              <td>${registrado.fecha_creado}</td>
              <td class="td-acciones">
              ${
                registrado.aceptado === "0"
                  ? "<div class='index-aceptarPonente'><span class='material-symbols-outlined' title='Aceptar ponente' >person_add</span>Aceptar</div>"
                  : "<div class='index-aceptarPonente'><span class='material-symbols-outlined' title='Rechazar ponente'>person_add_disabled</span>Rechazar</div>"
              }
              </td>
          </tr>
          `;

      let clone = document.importNode($template, true);

      $fargmento.appendChild(clone);
    });
    $tbody.appendChild($fargmento);

    obtenerModuloId(listadoPonentesRegistradosCohorte);
  } else {
    notificarNoRegistros("No se encontraron ponentes registrados a la cohorte");
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
