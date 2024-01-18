import { modelCohorteInfo } from "../models/cohorteModel.js";
import { listaInformesGenerales } from "../models/informesGenerales.js";
import { mostrarInfoCorhorte } from "./modals.js";

const llenarTablaInformesGenerales = (li) => {
  // debugger;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-formaciones-generales"
    ).content,
    $tbodyFormacionesGenerales = document.getElementById(
      "tbody-table-formaciones-generales"
    );
  $tbodyFormacionesGenerales.innerHTML = "";
  li.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
      <td>${formacion.id}</td>
      <td>${formacion.tipoFormacion}</td>
      <td>${formacion.nombreFormacion}</td>
      <td>${formacion.numCohorte}</td>
      <td>${formacion.anioCohorte}</td>
      <td>${formacion.fechaInicialCohorte.getFullYear()}/${
      formacion.fechaInicialCohorte.getMonth() + 1
    }/${formacion.fechaInicialCohorte.getDate()}</td>
      <td>${formacion.fechaInicialCohorte.getFullYear()}/${
      formacion.fechaInicialCohorte.getMonth() + 1
    }/${formacion.fechaInicialCohorte.getDate()}</td>
      <td class="td-acciones">
      <span
      class="material-symbols-outlined show-info-cohorte index-info-cohorte"
      title="Ver link información cohorte"
      >
      link
      </span>
      <span class="material-symbols-outlined index-asistencias" title="Asistencia">
      fact_check
      </span>
      <span class="material-symbols-outlined index-certificados" title="Certificaciones">
      workspace_premium
      </span>
      <span class="material-symbols-outlined index-configuracion" title="Configurarción">
      settings
      </span>
      </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbodyFormacionesGenerales.appendChild($fargmento);
  mostrarInfoCorhorte();
};

llenarTablaInformesGenerales(listaInformesGenerales);

let d = document;
let orderBool = false;

d.addEventListener("click", (e) => {
  if (e.target === d.getElementById("index-sort-id")) {
    console.log("id");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      listaInformesGenerales.sort((a, b) => b.id - a.id);
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      listaInformesGenerales.sort((a, b) => a.id - b.id);
    }
    obtenerIdCohorte(listaInformesGenerales);
  } else if (e.target === d.getElementById("index-sort-tipo")) {
    console.log("tipo");
    orderBool = !orderBool;

    //ORDENAMIENTO DE z A a
    if (orderBool) {
      listaInformesGenerales.sort((a, b) => {
        if (a.tipoFormacion < b.tipoFormacion) {
          return 1;
        } else if (a.tipoFormacion > b.tipoFormacion) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      //ORDENAMIENTO DE a A z
      listaInformesGenerales.sort((a, b) => {
        if (a.tipoFormacion > b.tipoFormacion) {
          return 1;
        } else if (a.tipoFormacion < b.tipoFormacion) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    obtenerIdCohorte(listaInformesGenerales);
  } else if (e.target === d.getElementById("index-sort-nombre")) {
    console.log("nombre");
    orderBool = !orderBool;

    //ORDENAMIENTO DE z A a
    if (orderBool) {
      listaInformesGenerales.sort((a, b) => {
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
      listaInformesGenerales.sort((a, b) => {
        if (a.nombreFormacion > b.nombreFormacion) {
          return 1;
        } else if (a.nombreFormacion < b.nombreFormacion) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    obtenerIdCohorte(listaInformesGenerales);
  } else if (e.target === d.getElementById("index-sort-fechaInicial")) {
    console.log("finicial");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      listaInformesGenerales.sort(
        (a, b) => b.fechaInicialCohorte - a.fechaInicialCohorte
      );
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      listaInformesGenerales.sort(
        (a, b) => a.fechaInicialCohorte - b.fechaInicialCohorte
      );
    }
    obtenerIdCohorte(listaInformesGenerales);
  } else if (e.target === d.getElementById("index-sort-fechaFinal")) {
    console.log("ffinal");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      listaInformesGenerales.sort(
        (a, b) => b.fechaFinalCohorte - a.fechaFinalCohorte
      );
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      listaInformesGenerales.sort(
        (a, b) => a.fechaFinalCohorte - b.fechaFinalCohorte
      );
    }
    obtenerIdCohorte(listaInformesGenerales);
  }
});

document
  .getElementById("input-buscador-informes")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = listaInformesGenerales.filter((formacion) => {
      return (
        formacion.nombreFormacion.toLowerCase().includes(filtro) ||
        formacion.tipoFormacion.toLowerCase().includes(filtro) ||
        formacion.id.toString().toLowerCase().includes(filtro) ||
        formacion.numCohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anioCohorte.toString().toLowerCase().includes(filtro)
      );
    });
    console.log(filtrado);
    obtenerIdCohorte(filtrado);
  });

const redireccionarAsistencias = (idCohorte, idFormacion) => {
  location.href = `../pages/AsistenciasPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarCertificaciones = (idCohorte, idFormacion) => {
  location.href = `../pages/CertificadosEmitidosPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarConfiguraciones = (idCohorte, idFormacion) => {
  location.href = `../index.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};

const obtenerIdCohorte = (li) => {
  llenarTablaInformesGenerales(li);
  let listaInfos = d.querySelectorAll(".index-info-cohorte");
  listaInfos.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //ACA SE CAPTURA EL ID DE LA FORMACION SELECCIONADA
      console.log(id, "id", li[id].id, li[id]);
      llenarModalInfoCohorteSeleccionada(li[id]);
    });
  });

  let listaAsistencias = d.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log(id, "id", li[id].id);
      redireccionarAsistencias(li[id].numCohorte, li[id].id);
    });
  });

  let listaCertificados = d.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      console.log(id, "id", li[id].id);
      redireccionarCertificaciones(li[id].numCohorte, li[id].id);
    });
  });

  let listaConfiguraciones = d.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      console.log(id, "id", li[id].id);
      redireccionarConfiguraciones(li[id].numCohorte, li[id].id);
    });
  });
};

obtenerIdCohorte(listaInformesGenerales);

const llenarModalInfoCohorteSeleccionada = (inforCohorte) => {
  const $numCohorteVisual = document.getElementById(
    "informacion-cohorte-numeral"
  );
  $numCohorteVisual.textContent = `${inforCohorte.tipoFormacion} - ${inforCohorte.nombreFormacion} - Cohorte [${inforCohorte.numCohorte}]`;
  console.log(inforCohorte);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cohortes-info"
    ).content,
    $tableInfoCohorte = document.getElementById("table-info-cohorte");
  $template.querySelector("tbody").innerHTML = `<tr>
  <td>Inscripción</td>
  <td>${modelCohorteInfo.fechaInicioInscripcion.getFullYear()}/${modelCohorteInfo.fechaInicioInscripcion.getMonth()}/${modelCohorteInfo.fechaInicioInscripcion.getDate()} - ${modelCohorteInfo.fechaFinalInscripcion.getFullYear()}/${modelCohorteInfo.fechaFinalInscripcion.getMonth()}/${modelCohorteInfo.fechaFinalInscripcion.getDate()}</td>
  <td>
    <div class="modal-data-cohorte-estado">
    ${
      modelCohorteInfo.estadoInscripcion === "activo"
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
<tr>
  <td>Asistencia</td>
  <td>${modelCohorteInfo.fechaInicialAsistencia.getFullYear()}/${modelCohorteInfo.fechaInicialAsistencia.getMonth()}/${modelCohorteInfo.fechaInicialAsistencia.getDate()} - ${modelCohorteInfo.fechaFinalAsistencia.getFullYear()}/${modelCohorteInfo.fechaFinalAsistencia.getMonth()}/${modelCohorteInfo.fechaFinalAsistencia.getDate()}</td>
  <td>
    <div class="modal-data-cohorte-estado">
    ${
      modelCohorteInfo.estadoAsistencia === "activo"
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
</tr>`;
  let clone = document.importNode($template, true);

  $fargmento.appendChild(clone);

  $tableInfoCohorte.appendChild($fargmento);
};
