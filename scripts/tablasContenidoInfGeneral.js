import cohortesGeneralesGET from "./Fetching/GET/CohortesGeneral.js";
import llenarTablaInformesGenerales from "./funcionalidades/InformesGenerales/LlenarTablaInformesGenerales.js";

let listaInformesGenerales = [];

// const llenarTablaInformesGenerales = (li) => {
//   console.log(li);
//   // debugger;
//   const $fargmento = document.createDocumentFragment(),
//     $template = document.getElementById(
//       "template-renglon-formaciones-generales"
//     ).content,
//     $tbodyFormacionesGenerales = document.getElementById(
//       "tbody-table-formaciones-generales"
//     );
//   $tbodyFormacionesGenerales.innerHTML = "";
//   li.forEach((formacion) => {
//     $template.querySelector("tr").innerHTML = `
//       <td>${formacion.id}</td>
//       <td>${formacion.tipo}</td>
//       <td>${formacion.nombre}</td>
//       <td>${formacion.numCohorte}</td>
//       <td>${formacion.anio}</td>
//       <td>${new Date(formacion.fechaI).getFullYear()}/${
//       new Date(formacion.fechaI).getMonth() + 1
//     }/${new Date(formacion.fechaI).getDate()}</td>
//       <td>${new Date(formacion.fechaF).getFullYear()}/${
//       new Date(formacion.fechaF).getMonth() + 1
//     }/${new Date(formacion.fechaF).getDate()}</td>
//       <td class="td-acciones">
//       <span
//       class="material-symbols-outlined show-info-cohorte index-info-cohorte"
//       title="Ver link información cohorte"
//       >
//       link
//       </span>
//       <span class="material-symbols-outlined index-asistencias" title="Asistencia">
//       fact_check
//       </span>
//       <span class="material-symbols-outlined index-certificados" title="Certificaciones">
//       workspace_premium
//       </span>
//       <span class="material-symbols-outlined index-configuracion" title="Configurarción">
//       settings
//       </span>
//       </td>`;

//     let clone = document.importNode($template, true);

//     $fargmento.appendChild(clone);
//   });

//   $tbodyFormacionesGenerales.appendChild($fargmento);
//   mostrarModalInfoCohorte();
// };

let d = document;
const ordenamientos = (listadoCohortes) => {
  // console.log(listaInformesGenerales);
  let orderBool = false;
  d.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target === d.getElementById("index-sort-id")) {
      console.log("id");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => b.id - a.id);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => a.id - b.id);
      }
      obtenerIdCohorte(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-tipo")) {
      console.log("tipo");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listadoCohortes.sort((a, b) => {
          if (a.tipo < b.tipo) {
            return 1;
          } else if (a.tipo > b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listadoCohortes.sort((a, b) => {
          if (a.tipo > b.tipo) {
            return 1;
          } else if (a.tipo < b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-nombre")) {
      console.log("nombre");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listadoCohortes.sort((a, b) => {
          if (a.nombreFormacion < b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion > b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listadoCohortes.sort((a, b) => {
          if (a.nombreFormacion > b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion < b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-fechaInicial")) {
      console.log("finicial");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort(
          (a, b) => b.fechaInicialCohorte - a.fechaInicialCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort(
          (a, b) => a.fechaInicialCohorte - b.fechaInicialCohorte
        );
      }
      obtenerIdCohorte(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-fechaFinal")) {
      console.log("ffinal");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort(
          (a, b) => b.fechaFinalCohorte - a.fechaFinalCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort(
          (a, b) => a.fechaFinalCohorte - b.fechaFinalCohorte
        );
      }
      obtenerIdCohorte(listadoCohortes);
    }
  });
};

document
  .getElementById("input-buscador-informes")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = listaInformesGenerales.filter((formacion) => {
      return (
        formacion.nombre_proceso.toLowerCase().includes(filtro) ||
        formacion.nombre_tipo_proceso.toLowerCase().includes(filtro) ||
        formacion.id_cohorte.toString().toLowerCase().includes(filtro) ||
        formacion.cohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anio.toString().toLowerCase().includes(filtro)
      );
    });
    console.log(filtrado);
    obtenerIdCohorte(filtrado);
    llenarTablaInformesGenerales(filtrado)
  });

const redireccionarAsistencias = (idCohorte, idFormacion) => {
  location.href = `../pages/AsistenciasPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarCertificaciones = (idCohorte, idFormacion) => {
  location.href = `../pages/Certificados/CertificadosEmitidosPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarConfiguraciones = (idCohorte, idFormacion) => {
  location.href = `../index.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};

export const obtenerIdCohorte = (li) => {
  console.log(li);
  // llenarTablaInformesGenerales(li);
  let listaInfos = d.querySelectorAll(".index-info-cohorte");
  listaInfos.forEach((formacion, id) => {
    // console.log(formacion[id]);
    formacion.addEventListener("click", (e) => {
      //ACA SE CAPTURA EL ID DE LA FORMACION SELECCIONADA
      console.log("id:", id, li[0]);
      // console.log("INFORMACION PASADA:" + li[id]);
      llenarModalInfoCohorteSeleccionada(li[id]);
    });
  });

  let listaAsistencias = d.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      // console.log(id, "id", li[id].id);
      redireccionarAsistencias(li[id].id_cohorte, li[id].id_proceso);
    });
  });

  let listaCertificados = d.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      // console.log(id, "id", li[id].id);
      redireccionarCertificaciones(li[id].id_cohorte, li[id].id_proceso);
    });
  });

  let listaConfiguraciones = d.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      // console.log(id, "id", li[id].id);
      redireccionarConfiguraciones(li[id].id_cohorte, li[id].id_proceso);
    });
  });
};

const llenarModalInfoCohorteSeleccionada = (inforCohorte) => {
  console.log("INFORMACION DE LA COHORTE MODAL:" + inforCohorte);
  const $numCohorteVisual = document.getElementById(
    "informacion-cohorte-numeral"
  );
  $numCohorteVisual.textContent = `${inforCohorte.nombre_tipo_proceso} - ${inforCohorte.nombre_proceso} - Cohorte [ ${inforCohorte.anio}-${inforCohorte.cohorte} ]`;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cohortes-info"
    ).content,
    $tableInfoCohorte = document.getElementById("table-info-cohorte");

  try {
    let list = document.querySelectorAll(".tr-modal-infocohorte");

    Array.from(list).forEach((element) => {
      element.remove();
    });
  } catch (error) {}

  $template.querySelector("tbody").innerHTML = "";
  let clone = document.importNode($template, true);

  $fargmento.appendChild(clone);

  $tableInfoCohorte.appendChild($fargmento);
  $template.querySelector("tbody").innerHTML = `
  <tr class="tr-modal-infocohorte">
    <td>Inscripción</td>
    <td>${inforCohorte.link_inscripcion[0].fecha_inicial} - ${
    inforCohorte.link_inscripcion[0].fecha_final
  }</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.link_inscripcion[0].fecha_final).getTime() >=
        new Date().getTime()
          ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
          : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
      } 
      </div>
    </td>
    <td>
      <span
        class="material-symbols-outlined share-info-cohorte"
        title="Copiar link de inscripción"
        id="info-cohorte-copia-link-inscripcion"
      >
        share
      </span>
    </td>
  </tr>
  <tr class="tr-modal-infocohorte">
    <td>Asistencia</td>
    <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${
    inforCohorte.link_asistencia[0].fecha_final
  }</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >=
        new Date().getTime()
          ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
          : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
      }
      </div>
    </td>
    <td>
      <span
        class="material-symbols-outlined share-info-cohorte"
        title="Copiar link de asistencia"
        id="info-cohorte-copia-link-asistencia"
      >
        share
      </span>
    </td>
  </tr>

  ${inforCohorte.id_tipo_proceso === "11" ? `<tr class="tr-modal-infocohorte">
    <td>Ponentes</td>
    <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${
    inforCohorte.link_asistencia[0].fecha_final
  }</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >=
        new Date().getTime()
          ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
          : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
      }
      </div>
    </td>
    <td>
      <span
        class="material-symbols-outlined share-info-cohorte"
        title="Copiar link de asistencia"
        id="info-cohorte-copia-link-asistencia"
      >
        share
      </span>
    </td>
  </tr>
  <tr class="tr-modal-infocohorte">
    <td>Documentación</td>
    <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${
    inforCohorte.link_asistencia[0].fecha_final
  }</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >=
        new Date().getTime()
          ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
          : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
      }
      </div>
    </td>
    <td>
      <span
        class="material-symbols-outlined share-info-cohorte"
        title="Copiar link de asistencia"
        id="info-cohorte-copia-link-asistencia"
      >
        share
      </span>
    </td>
  </tr>
  <tr class="tr-modal-infocohorte">
    <td>Memorias</td>
    <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${
    inforCohorte.link_asistencia[0].fecha_final
  }</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >=
        new Date().getTime()
          ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
          : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
      }
      </div>
    </td>
    <td>
      <span
        class="material-symbols-outlined share-info-cohorte"
        title="Copiar link de asistencia"
        id="info-cohorte-copia-link-asistencia"
      >
        share
      </span>
    </td>
  </tr>
  
  ` : ""}

  
  

  `
  
  clone = document.importNode($template, true);

  $fargmento.appendChild(clone);

  $tableInfoCohorte.appendChild($fargmento);

  copiarLinks(inforCohorte);
};

const copiarLinks = (inforCohorte) => {
  console.log("entra copia", inforCohorte);
  document.addEventListener("click", (e) => {
    let textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      textoACopiar =
        inforCohorte.link_sesion[inforCohorte.link_sesion.length - 1].enlace;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar =
        inforCohorte.link_inscripcion[inforCohorte.link_inscripcion.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar =
        inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }
  });
};

const listarGeneralesFetch = async () => {
  // Capturar y manejar cualquier error
  let result = await cohortesGeneralesGET();
  ordenamientos(result);
  llenarTablaInformesGenerales(result);
  // llenarTablaInformesGenerales(cusosCohortesGenerales);
  listaInformesGenerales = result;
  obtenerIdCohorte(result);
};

listarGeneralesFetch();
