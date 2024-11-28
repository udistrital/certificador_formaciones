import { mostrarModalInfoCohorte, mostrarModalNewForm, mostrarModalNewSesion } from "../../modals.js";
import llenaSelectNewForm from "../LlenaSelectTipoFormulario.js";
import { notificarNoRegistros, quitaNotificacionNoRegistros } from "../NotificaNoExistenciaRegistros.js";
import { obtenerIdCohorteInformeGeneral } from "./ObtenerIdCohorteInformesGenerales.js";

const llenarTablaInformesGenerales = (li) => {
  console.log(li);
  // debugger;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-formaciones-generales").content,
    $tbodyFormacionesGenerales = document.getElementById("tbody-table-formaciones-generales");
  $tbodyFormacionesGenerales.innerHTML = "";

  if (li.length !== 0) {
    li.forEach((formacion) => {
      $template.querySelector("tr").innerHTML = `
          <td>${formacion.id_cohorte}</td>
          <td>${formacion.nombre_tipo_proceso}</td>
          <td>${formacion.nombre_proceso}</td>
          <td>${formacion.anio}</td>
          <td>${formacion.cohorte}</td>
          <td>${formacion.fecha_inicial_cohorte}</td>
          <td>${formacion.fecha_final_cohorte}</td>
          <td class="td-acciones td-acciones-index">
          <span class="material-symbols-outlined show-new-sesion index-newsesion" title="Agregar nueva sesión">
          video_chat
          </span>
          <span class="material-symbols-outlined show-select-new-form index-newform" title="Crear nuevo formulario">
          post_add
          </span>
          <span
          class="material-symbols-outlined show-info-cohorte index-info-cohorte"
          title="Ver link información cohorte"
          >
          link
          </span>
          <span class="material-symbols-outlined index-certificados" title="Certificaciones">
          workspace_premium
          </span>
          
          <span class="material-symbols-outlined index-cursantes" title="Cursantes registrados">
          how_to_reg
          </span>
          <span class="material-symbols-outlined index-asistencias ${formacion.id_tipo_proceso === "8" ? "icon-disabled" : ""}" title="Asistencia">
          fact_check
          </span>
            <span class="material-symbols-outlined index-ponentes ${formacion.id_tipo_proceso !== "11" ? "icon-disabled" : ""}" title="Ponentes registrados">cast_for_education</span> 
            <span class="material-symbols-outlined index-modulos ${formacion.id_tipo_proceso !== "11" && formacion.id_tipo_proceso !== "10" ? "icon-disabled" : ""}" title="Modulos de cohorte">stack</span>
          
          </td>`;
      {
        /* <span class="material-symbols-outlined index-configuracion" title="Configurarción">
          settings
          </span> */
      }
      let clone = document.importNode($template, true);

      $fargmento.appendChild(clone);
      quitaNotificacionNoRegistros();
    });
  } else {
    notificarNoRegistros("No se encontraron cortes registradas aun");
  }

  $tbodyFormacionesGenerales.appendChild($fargmento);
  mostrarModalInfoCohorte();
  mostrarModalNewForm();
  mostrarModalNewSesion();
  obtenerIdCohorteInformeGeneral(li);
};

export default llenarTablaInformesGenerales;
