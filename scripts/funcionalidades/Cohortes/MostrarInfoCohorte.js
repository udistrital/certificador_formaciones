import copiarLinks from "./CopiaLinksCohortes.js";
import { modelCohorteInfo } from "../../../models/cohorteModel.js";

const mostarInforCohorte = (listaCohortes) => {
  let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
  listaLinks.forEach((cohorte, index) => {
    cohorte.addEventListener("click", () => {
      //se captura el id del cohorte del cual se desea saber la informacion
      let idCohorteInfoMostrar = listaCohortes[index].cohorte;
      console.log("hola mundo", listaCohortes[index], idCohorteInfoMostrar);
      const $numCohorteVisual = document.getElementById(
        "informacion-cohorte-numeral"
      );
      $numCohorteVisual.textContent = `Cohorte [${idCohorteInfoMostrar}]`;
    });
  });
  
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor-cohortes-info"
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

  copiarLinks();
};

export default mostarInforCohorte;
