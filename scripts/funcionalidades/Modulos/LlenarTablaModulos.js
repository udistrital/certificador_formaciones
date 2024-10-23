import { mostrarModalInfoCohorte } from "../../modals.js";
import mostarInforCohorte from "../Cohortes/MostrarInfoCohorte.js";
import obtenerIdCohorte from "../Cohortes/ObtenerIdCohorte.js";
import { notificarNoRegistros, quitaNotificacionNoRegistros } from "../NotificaNoExistenciaRegistros.js";

const llenarTablaModulos = (listaModulos, id_cohorte) => {
  console.log(listaModulos.length, "dsddddddddddddddd");
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-cursos-tutor").content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");

  // if (listaModulos.length !== 0) {
  listaModulos.forEach((modulo) => {
    $template.querySelector("tr").innerHTML = `
                    <td>${modulo.id_modulo}</td>
                    <td style="overflow-x: auto; max-width: 300px;">${modulo.nombre_modulo}</td>
                    <td>${modulo.nombre_proceso}</td>
                    <td>${modulo.nombre_tipo_proceso}</td>
                    <td class="td-acciones"><span
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
                    <span class="material-symbols-outlined index-cursantes" title="Cursantes registrados">
                    how_to_reg
                    </span>
                    </td>
                    `;
    // ${
    //   window.location.pathname.includes("EventosModulos")
    //     ? '<span class="material-symbols-outlined index-ponentes" title="Ponentes registrados">cast_for_education</span>'
    //     : ""
    // }

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);

  mostarInforCohorte(listaModulos);
  obtenerIdCohorte(listaModulos, id_cohorte);
  mostrarModalInfoCohorte();
  quitaNotificacionNoRegistros();
  // } else {
  //   notificarNoRegistros("No se encontraron modulos registrados");
  // }
};

export default llenarTablaModulos;
