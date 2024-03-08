import { modelCohorteInfo } from "../models/cohorteModel.js";
import { cusosCohortesGenerales } from "../models/informesGenerales.js";
import { mostrarInfoCorhorte } from "./modals.js";

let listaInformesGenerales = [];
const listarGeneralesFetch = async () => {
  await fetch("https://65e896cb4bb72f0a9c4fdadd.mockapi.io/api/generales")
    .then((response) => {
      // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      // Parsear la respuesta como JSON
      return response.json();
    })
    .then((data) => {
      // Hacer algo con los datos recibidos
      listaInformesGenerales = data;
      console.log(data);
      llenarTablaInformesGenerales(listaInformesGenerales);
      obtenerIdCohorte(listaInformesGenerales);
      ordenamientos(listaInformesGenerales);
    })
    .catch((error) => {
      // Capturar y manejar cualquier error
      console.error("Error:", error);
      llenarTablaInformesGenerales(cusosCohortesGenerales);
      obtenerIdCohorte(cusosCohortesGenerales);
      ordenamientos(cusosCohortesGenerales);
    });
};

listarGeneralesFetch();

const llenarTablaInformesGenerales = (li) => {
  console.log(li);
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
      <td>${formacion.tipo}</td>
      <td>${formacion.nombre}</td>
      <td>${formacion.numCohorte}</td>
      <td>${formacion.anio}</td>
      <td>${new Date(formacion.fechaI).getFullYear()}/${
      new Date(formacion.fechaI).getMonth() + 1
    }/${new Date(formacion.fechaI).getDate()}</td>
      <td>${new Date(formacion.fechaF).getFullYear()}/${
      new Date(formacion.fechaF).getMonth() + 1
    }/${new Date(formacion.fechaF).getDate()}</td>
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

let d = document;
const ordenamientos = () => {
  let orderBool = false;

  d.addEventListener("click", (e) => {
    console.log(e.target);
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
        listaInformesGenerales.sort((a, b) => {
          if (a.tipo > b.tipo) {
            return 1;
          } else if (a.tipo < b.tipo) {
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
};

document
  .getElementById("input-buscador-informes")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = listaInformesGenerales.filter((formacion) => {
      return (
        formacion.nombre.toLowerCase().includes(filtro) ||
        formacion.tipo.toLowerCase().includes(filtro) ||
        formacion.id.toString().toLowerCase().includes(filtro) ||
        formacion.numCohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anio.toString().toLowerCase().includes(filtro)
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
      console.log("INFORMACION PASADA:" + li[id]);
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

const llenarModalInfoCohorteSeleccionada = (inforCohorte) => {
  console.log("INFORMACION DE LA COHORTE MODAL:" + inforCohorte.id);
  const $numCohorteVisual = document.getElementById(
    "informacion-cohorte-numeral"
  );
  $numCohorteVisual.textContent = `${inforCohorte.tipo} - ${inforCohorte.nombre} - Cohorte [${inforCohorte.numCohorte}]`;
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
    <td>${new Date(inforCohorte.fechaIIns).getFullYear()}/${
    new Date(inforCohorte.fechaIIns).getMonth() + 1
  }/${new Date(inforCohorte.fechaIIns).getDate()} - ${new Date(
    inforCohorte.fechaFIns
  ).getFullYear()}/${new Date(inforCohorte.fechaFIns).getMonth()}/${new Date(
    inforCohorte.fechaFIns
  ).getDate()}</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.fechaFIns).getTime() >= new Date().getTime()
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
    <td>${new Date(inforCohorte.fechaIAsis).getFullYear()}/${
    new Date(inforCohorte.fechaIAsis).getMonth() + 1
  }/${new Date(inforCohorte.fechaIAsis).getDate()} - ${new Date(
    inforCohorte.fechaFAsis
  ).getFullYear()}/${new Date(inforCohorte.fechaFAsis).getMonth()}/${new Date(
    inforCohorte.fechaFAsis
  ).getDate()}</td>
    <td>
      <div class="modal-data-cohorte-estado">
      ${
        new Date(inforCohorte.fechaFAsis).getTime() >= new Date().getTime()
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
  clone = document.importNode($template, true);

  $fargmento.appendChild(clone);

  $tableInfoCohorte.appendChild($fargmento);

  copiarLinks(inforCohorte);
};

const copiarLinks = (inforCohorte) => {
  console.log("entra copia");
  document.addEventListener("click", (e) => {
    let textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      console.log(textoACopiar);
      textoACopiar = inforCohorte.linkConexion;
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar = inforCohorte.linkIns;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar = inforCohorte.linkAsis;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }
  });
};
