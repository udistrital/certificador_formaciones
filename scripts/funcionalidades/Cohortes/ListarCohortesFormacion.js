import { mostrarModalInfoCohorte, mostrarModalNewForm } from "../../modals.js";
import { notificarNoRegistros, quitaNotificacionNoRegistros } from "../NotificaNoExistenciaRegistros.js";
import mostarInforCohorte from "./MostrarInfoCohorte.js";
import obtenerIdCohorte from "./ObtenerIdCohorte.js";

const listarCohorterFormacion = (listaCohortes) => {
  console.log(listaCohortes);

  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-cursos-tutor-cohortes").content,
    $tbody = document.getElementById("tbody-table-cursos-tutor-cohortes");

  // console.log(listaCohortes);

  if (listaCohortes.length !== 0) {
    listaCohortes.forEach((cohorte) => {
      console.log(cohorte.nombre_tipo_proceso);

      $template.querySelector("tr").innerHTML = `
                    <td>${cohorte.id_cohorte}) ${cohorte.anio} - ${cohorte.cohorte}</td>
                    <td>${cohorte.anio}</td>
                    <td>${cohorte.fecha_inicial_cohorte}</td>
                    <td>${cohorte.fecha_final_cohorte}</td>
                    <td class="td-acciones">
                    <span class="material-symbols-outlined show-select-new-form index-newform" title="Crear nuevo formulario">
                    post_add
                    </span>
                    <span
                      class="material-symbols-outlined show-info-cohorte"
                      title="Ver link"
                    >
                      link
                    </span>
                    ${cohorte.nombre_tipo_proceso === "Curso MOOC" ? "" : '<span class="material-symbols-outlined index-asistencias" title="Asistencia">fact_check</span>'}
                    
                    <span class="material-symbols-outlined index-certificados" title="Certificaciones">
                        workspace_premium
                    </span>
                    <span class="material-symbols-outlined index-cursantes" title="Cursantes registrados">
                    how_to_reg
                    </span>
                    ${
                      window.location.pathname.includes("EventosCohortesPage")
                        ? '<span class="material-symbols-outlined index-ponentes" title="Ponentes registrados">cast_for_education</span> <span class="material-symbols-outlined index-modulos" title="Modulos de cohorte">stack</span>'
                        : window.location.pathname.includes("DiplomadoCohortesPage")
                        ? '<span class="material-symbols-outlined index-modulos" title="Modulos de cohorte">stack</span>'
                        : ""
                    }
                    
                      
                      </td>`;
      // <span class="material-symbols-outlined index-configuracion" title="Configurarción">
      //   settings
      // </span>

      let clone = document.importNode($template, true);

      $fargmento.appendChild(clone);
    });

    $tbody.appendChild($fargmento);

    mostarInforCohorte(listaCohortes);
    obtenerIdCohorte(listaCohortes);
    mostrarModalInfoCohorte();
    mostrarModalNewForm();
    quitaNotificacionNoRegistros();
  } else {
    notificarNoRegistros("No se han encontrado cohortes registradas");
  }
};

export default listarCohorterFormacion;
