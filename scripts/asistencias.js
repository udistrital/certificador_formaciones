import { modeloAsistencias } from "../models/modeloAsistencia.js";

const mostrarListadoAsistencias = () => {
    console.log(modeloAsistencias);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");

  modeloAsistencias.forEach((asistencia, index) => {
    $template.querySelector("tr").innerHTML = `
        <tr>
            <td>${asistencia.nombreEstudiante}</td>
            <td>${asistencia.tipoDoc}</td>
            <td>${asistencia.documento}</td>
            <td>${asistencia.numeroAsistencias}</td>
            <td>${asistencia.ultimaAsistencia}</td>
            <td class="td-acciones">
            <span class="material-symbols-outlined" title="Ver cohortes">
                <a href="../pages/CursoConTutorCohortesPage.html"
                >visibility</a
                ></span
            >
            </td>
        </tr>
        `;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });
  $tbody.appendChild($fargmento);
};

mostrarListadoAsistencias();
