import { copiarEnlacesInformesGenerales } from "./CopiarEnlacesInforGenerales.js";

export const llenarModalInfoCohorteSeleccionada = (inforCohorte) => {
  console.log("INFORMACION DE LA COHORTE MODAL:" + inforCohorte);
  const $numCohorteVisual = document.getElementById("informacion-cohorte-numeral");
  $numCohorteVisual.textContent = `${inforCohorte.nombre_tipo_proceso} - ${inforCohorte.nombre_proceso} - Cohorte [ ${inforCohorte.anio}-${inforCohorte.cohorte} ]`;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-cohortes-info").content,
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
      <td>${inforCohorte.link_inscripcion[0].fecha_inicial} - ${inforCohorte.link_inscripcion[0].fecha_final}</td>
      <td>
        <div class="modal-data-cohorte-estado">
        ${
          new Date(inforCohorte.link_inscripcion[0].fecha_final).getTime() >= new Date().getTime()
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
    ${
      inforCohorte.id_tipo_proceso !== "8"
        ? `<tr class="tr-modal-infocohorte">
      <td>Asistencia</td>
      <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${inforCohorte.link_asistencia[0].fecha_final}</td>
      <td>
        <div class="modal-data-cohorte-estado">
        ${
          new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >= new Date().getTime()
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
    </tr>`
        : ""
    }
    
  
    ${
      inforCohorte.id_tipo_proceso === "11"
        ? `<tr class="tr-modal-infocohorte">
      <td>Ponentes</td>
      <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${inforCohorte.link_asistencia[0].fecha_final}</td>
      <td>
        <div class="modal-data-cohorte-estado">
        ${
          new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >= new Date().getTime()
            ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
            : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
        }
        </div>
      </td>
      <td>
        <span
          class="material-symbols-outlined share-info-cohorte"
          title="Copiar link de ponentes"
          id="info-cohorte-copia-link-ponentes"
        >
          share
        </span>
      </td>
    </tr>
    <tr class="tr-modal-infocohorte">
      <td>Documentación</td>
      <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${inforCohorte.link_asistencia[0].fecha_final}</td>
      <td>
        <div class="modal-data-cohorte-estado">
        ${
          new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >= new Date().getTime()
            ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
            : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
        }
        </div>
      </td>
      <td>
        <span
          class="material-symbols-outlined share-info-cohorte"
          title="Copiar link de asistencia"
          id="info-cohorte-copia-link-documentacion"
        >
          share
        </span>
      </td>
    </tr>
    <tr class="tr-modal-infocohorte">
      <td>Memorias</td>
      <td>${inforCohorte.link_asistencia[0].fecha_inicial} - ${inforCohorte.link_asistencia[0].fecha_final}</td>
      <td>
        <div class="modal-data-cohorte-estado">
        ${
          new Date(inforCohorte.link_asistencia[0].fecha_final).getTime() >= new Date().getTime()
            ? '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span>'
            : '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span>'
        }
        </div>
      </td>
      <td>
        <span
          class="material-symbols-outlined share-info-cohorte"
          title="Copiar link de asistencia"
          id="info-cohorte-copia-link-memorias"
        >
          share
        </span>
      </td>
    </tr>
    
    
    `
        : ""
    }
  
    
    
  
    `;

  clone = document.importNode($template, true);

  $fargmento.appendChild(clone);

  $tableInfoCohorte.appendChild($fargmento);

  if (inforCohorte.id_tipo_proceso === "8") {
    document.getElementById("info-cohorte-copia-link-conexion").style.display = "none";
  }

  copiarEnlacesInformesGenerales(inforCohorte);
};
