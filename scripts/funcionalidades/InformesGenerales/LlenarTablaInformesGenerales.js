import { mostrarModalInfoCohorte } from "../../modals.js";
import { obtenerIdCohorte } from "../../tablasContenidoInfGeneral.js";

const llenarTablaInformesGenerales = (li) => {
  // console.log(li);
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
        <td>${formacion.id_cohorte}</td>
        <td>${formacion.nombre_tipo_proceso}</td>
        <td>${formacion.nombre_proceso}</td>
        <td>${formacion.cohorte}</td>
        <td>${formacion.anio}</td>
        <td>${formacion.fecha_inicial_cohorte}</td>
        <td>${formacion.fecha_final_cohorte}</td>
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
  mostrarModalInfoCohorte();
  obtenerIdCohorte(li);
};

export default llenarTablaInformesGenerales;
