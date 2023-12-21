import { listaInformesGenerales } from "../models/informesGenerales.js";

const llenarTablaInformesGenerales = () => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-formaciones-generales"
    ).content,
    $tbodyFormacionesGenerales = document.getElementById(
      "tbody-table-formaciones-generales"
    );

  listaInformesGenerales.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
      <td>${formacion.id}</td>
      <td>${formacion.tipoFormacion}</td>
      <td>${formacion.nombreFormacion}</td>
      <td>${formacion.numCohorte}</td>
      <td>${formacion.anioCohorte}</td>
      <td>${formacion.fechaInicialCohorte}</td>
      <td>${formacion.fechaInicialCohorte}</td>
      <td class="td-acciones">
                <span
                  class="material-symbols-outlined show-info-cohorte"
                  title="Ver link"
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
};

llenarTablaInformesGenerales();
