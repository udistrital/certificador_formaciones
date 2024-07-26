import { mostrarModalInfoCohorte } from "../../modals.js";
import mostarInforCohorte from "./MostrarInfoCohorte.js";
import obtenerIdCohorte from "./ObtenerIdCohorte.js";

const listarCohorterFormacion = (listaCohortes) => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor-cohortes"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor-cohortes");

  // console.log(listaCohortes);

  listaCohortes.forEach((cohorte) => {
    $template.querySelector("tr").innerHTML = `
                  <td>${cohorte.cohorte}</td>
                  <td>${cohorte.anio}</td>
                  <td>${cohorte.fecha_inicial}</td>
                  <td>${cohorte.fecha_final}</td>
                  <td class="td-acciones">
                  <span
                    class="material-symbols-outlined show-info-cohorte"
                    title="Ver link"
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

  $tbody.appendChild($fargmento);

  mostarInforCohorte(listaCohortes);
  obtenerIdCohorte(listaCohortes);
  mostrarModalInfoCohorte();
};

export default listarCohorterFormacion;
