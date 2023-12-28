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
      <span class="material-symbols-outlined" title="Asistencia">
      <a href="../pages/AsistenciasPage.html"> fact_check </a>
      </span>
      <span class="material-symbols-outlined" title="Certificaciones">
      <a href="../pages/CertificadosEmitidosPage.html">
      workspace_premium
      </a>
      </span>
      <span class="material-symbols-outlined" title="Configurarción">
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

const obtenerIdCohorte = (li) => {
  llenarTablaInformesGenerales(li);
  let listaInfos = d.querySelectorAll(".index-info-cohorte");
  listaInfos.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //ACA SE CAPTURA EL ID DE LA FORMACION SELECCIONADA
      console.log(id, "id", li[id].id);
    });
  });
};

obtenerIdCohorte(listaInformesGenerales);
