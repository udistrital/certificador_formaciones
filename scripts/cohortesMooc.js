// import { listaCohortesMooc } from "../models/cursoMoocCohortes.js";

// //informacion para copiar, se podria enviar el idde la cohorte
// const copiarLinks = () => {
//   console.log("entra copia");
//   document.addEventListener("click", (e) => {
//     console.log(e.target);
//     let textoACopiar = "";
//     if (
//       e.target === document.getElementById("info-cohorte-copia-link-conexion")
//     ) {
//       textoACopiar = cohorte.linkConexion;
//       console.log(textoACopiar);
//       navigator.clipboard.writeText(textoACopiar).then(() => {
//         alert("Se ha copidado el link");
//       });
//     } else if (
//       e.target ===
//       document.getElementById("info-cohorte-copia-link-inscripcion")
//     ) {
//       textoACopiar = cohorte.linkInscripcion;
//       console.log(textoACopiar);
//       navigator.clipboard.writeText(textoACopiar).then(() => {
//         alert("Se ha copidado el link");
//       });
//     } else if (
//       e.target === document.getElementById("info-cohorte-copia-link-asistencia")
//     ) {
//       textoACopiar = cohorte.linkAsistencia;
//       console.log(textoACopiar);
//       navigator.clipboard.writeText(textoACopiar).then(() => {
//         alert("Se ha copidado el link");
//       });
//     }

//     // let input = document.createElement("input");
//     // input.setAttribute("value", textoACopiar);
//     // // input.style.display = "none";
//     // document.body.appendChild(input);
//     // input.select();
//     // document.execCommand("copy");
//     // document.body.removeChild(input);
//   });
// };

// const mostarInforCohorte = (cohorte) => {
//   console.log(cohorte);
//   const $numCohorteVisual = document.getElementById(
//     "informacion-cohorte-numeral"
//   );
//   $numCohorteVisual.textContent = `Cohorte [${cohorte.id}]`;

//   const $fargmento = document.createDocumentFragment(),
//     $template = document.getElementById(
//       "template-renglon-cursos-tutor-cohortes-info"
//     ).content,
//     $tableInfoCohorte = document.getElementById("table-info-cohorte");

//   try {
//     let list = document.querySelectorAll(".tr-modal-infocohorte");

//     Array.from(list).forEach((element) => {
//       element.remove();
//     });
//   } catch (error) {}

//   $template.querySelector("tbody").innerHTML = "";
//   let clone = document.importNode($template, true);

//   $fargmento.appendChild(clone);

//   $tableInfoCohorte.appendChild($fargmento);

//   $template.querySelector(
//     "tbody"
//   ).innerHTML = `<tr class="tr-modal-infocohorte">
//   <td>Inscripción</td>
//   <td>${new Date(cohorte.fechaIIns).getFullYear()}/${new Date(
//     cohorte.fechaIIns
//   ).getMonth()}/${new Date(cohorte.fechaIIns).getDate()} - ${new Date(
//     cohorte.fechaFIns
//   ).getFullYear()}/${new Date(cohorte.fechaFIns).getMonth()}/${new Date(
//     cohorte.fechaFIns
//   ).getDate()}</td>
//   <td>
//     <div class="modal-data-cohorte-estado">
//     ${
//       new Date(cohorte.fechaFIns).getTime() >= new Date().getTime()
//         ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
//         : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
//     }
//     </div>
//   </td>
//   <td>
//     <span
//       class="material-symbols-outlined share-info-cohorte"
//       title="Copiar link de inscripción"
//       id="info-cohorte-copia-link-inscripcion"
//     >
//       share
//     </span>
//   </td>
// </tr>
// <tr class="tr-modal-infocohorte">
//   <td>Asistencia</td>
//   <td>${new Date(cohorte.fechaIAsis).getFullYear()}/${new Date(
//     cohorte.fechaIAsis
//   ).getMonth()}/${new Date(cohorte.fechaIAsis).getDate()} - ${new Date(
//     cohorte.fechaFAsis
//   ).getFullYear()}/${new Date(cohorte.fechaFAsis).getMonth()}/${new Date(
//     cohorte.fechaFAsis
//   ).getDate()}</td>
//   <td>
//     <div class="modal-data-cohorte-estado">
//     ${
//       new Date(cohorte.fechaFAsis).getTime() >= new Date().getTime()
//         ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
//         : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
//     }
//     </div>
//   </td>
//   <td>
//     <span
//       class="material-symbols-outlined share-info-cohorte"
//       title="Copiar link de asistencia"
//       id="info-cohorte-copia-link-asistencia"
//     >
//       share
//     </span>
//   </td>
// </tr>`;
//   clone = document.importNode($template, true);

//   $fargmento.appendChild(clone);

//   $tableInfoCohorte.appendChild($fargmento);

//   copiarLinks();
// };

// const obtenerIdCohorte = (li) => {
//   let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
//   listaLinks.forEach((cohorte, index) => {
//     cohorte.addEventListener("click", () => {
//       //se captura el id del cohorte del cual se desea saber la informacion
//       let idCohorteInfoMostrar = li[index].id;
//       console.log("hola muno", li[index], idCohorteInfoMostrar);
//       mostarInforCohorte(li[index]);
//     });
//   });

//   let listaAsistencias = document.querySelectorAll(".index-asistencias");
//   listaAsistencias.forEach((asistencia, id) => {
//     asistencia.addEventListener("click", (e) => {
//       console.log(
//         id,
//         "id formacion",
//         li[id].idFormacion,
//         "id cohorte:",
//         li[id].idCohorte
//       );
//       redireccionarAsistencias(li[id].numCohorte, li[id].id);
//     });
//   });

//   let listaCertificados = document.querySelectorAll(".index-certificados");
//   listaCertificados.forEach((certificados, id) => {
//     certificados.addEventListener("click", (e) => {
//       console.log(
//         id,
//         "id formacion",
//         li[id].idFormacion,
//         "id cohorte:",
//         li[id].idCohorte
//       );
//       redireccionarCertificaciones(li[id].numCohorte, li[id].id);
//     });
//   });

//   let listaConfiguraciones = document.querySelectorAll(".index-configuracion");
//   listaConfiguraciones.forEach((configuracion, id) => {
//     configuracion.addEventListener("click", (e) => {
//       console.log(
//         id,
//         "id formacion",
//         li[id].idFormacion,
//         "id cohorte:",
//         li[id].idCohorte
//       );
//       redireccionarConfiguraciones(li[id].numCohorte, li[id].id);
//     });
//   });
// };

// const listarCohorterFormacion = (listaCohortes) => {
//   const $fargmento = document.createDocumentFragment(),
//     $template = document.getElementById(
//       "template-renglon-cursos-tutor-cohortes"
//     ).content,
//     $tbody = document.getElementById("tbody-table-cursos-tutor-cohortes");

//   listaCohortes.forEach((cohorte) => {
//     $template.querySelector("tr").innerHTML = `
//                 <td>${cohorte.id}</td>
//                 <td>${cohorte.anio}</td>
//                 <td>${new Date(cohorte.finicial).getFullYear()}/${new Date(
//       cohorte.finicial
//     ).getMonth()}/${new Date(cohorte.finicial).getDate()}</td>
//                 <td>${new Date(cohorte.ffinal).getFullYear()}/${new Date(
//       cohorte.ffinal
//     ).getMonth()}/${new Date(cohorte.ffinal).getDate()}</td>
//                 <td class="td-acciones">
//                 <span
//                   class="material-symbols-outlined show-info-cohorte"
//                   title="Ver link"
//                 >
//                   link
//                 </span>
//                 <span class="material-symbols-outlined index-asistencias" title="Asistencia">
//                   fact_check
//                 </span>
//                 <span class="material-symbols-outlined index-certificados" title="Certificaciones">
//                     workspace_premium
//                 </span>
//                 <span class="material-symbols-outlined index-configuracion" title="Configurarción">
//                   settings
//                 </span>
//               </td>`;

//     let clone = document.importNode($template, true);

//     $fargmento.appendChild(clone);
//   });

//   $tbody.appendChild($fargmento);

//   console.log(listaCohortes);
//   obtenerIdCohorte(listaCohortes);
// };

// listarCohorterFormacion(listaCohortesMooc);

// const insertarInfoParaCreacionCohorte = (
//   idFormacion,
//   nombreFormacion,
//   tipoFormacion
// ) => {
//   let $inputNombreFormacion = document.getElementById(
//     "cursoConTutorFormNombreFormacion"
//   );
//   let $inputTipoFormacion = document.getElementById(
//     "cursoConTutorFormTipoFormacion"
//   );
//   console.log(nombreFormacion, tipoFormacion, idFormacion);
//   $inputNombreFormacion.setAttribute("value", ` ${nombreFormacion}`);
//   $inputTipoFormacion.setAttribute("value", ` ${tipoFormacion}`);
// };

// const obtenerIdFormacionURL = () => {
//   let idFormacion = parseInt(
//     new URLSearchParams(window.location.search).get("idFormacion")
//   );
//   let nombreFormacion = new URLSearchParams(window.location.search).get(
//     "nombreFormacion"
//   );
//   let tipoFormacion = new URLSearchParams(window.location.search).get(
//     "tipoFormacion"
//   );

//   console.log(
//     "CAMBIO DIRECCION:" + nombreFormacion,
//     tipoFormacion,
//     idFormacion
//   );
//   insertarInfoParaCreacionCohorte(idFormacion, nombreFormacion, tipoFormacion);
// };

// obtenerIdFormacionURL();

// const redireccionarAsistencias = (idCohorte, idFormacion) => {
//   location.href = `../AsistenciasPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
// };
// const redireccionarCertificaciones = (idCohorte, idFormacion) => {
//   location.href = `../Certificados/CertificadosEmitidosPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
// };
// const redireccionarConfiguraciones = (idCohorte, idFormacion) => {
//   location.href = `CursoMoocCohortesPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
// };

// import copiarLinks from "./funcionalidades/Cohortes/CopiaLinksCohortes.js";
import obtenerParametrosURL from "./funcionalidades/Cohortes/ObtenerParametrosURL.js";

// copiarLinks();

obtenerParametrosURL();
