import { notificarNoRegistros, quitaNotificacionNoRegistros } from "../NotificaNoExistenciaRegistros.js";

const llenaTablaNoCertificados = (noCertificados, nombre_tipo_proceso) => {
  if (nombre_tipo_proceso === "Curso MOOC") {
    document.querySelector(".asistencias-boton-exportar.btn").style.display = "none";
    document.querySelector(".btn-generar-certificados.btn").style.display = "none";
  }

  console.log(noCertificados, nombre_tipo_proceso);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-nocertificados").content,
    $tbodyFormacionesGenerales = document.getElementById("tbody-table-nocertificados");
  $tbodyFormacionesGenerales.innerHTML = "";

  if (noCertificados.noCertificados.length !== 0) {
    noCertificados.noCertificados.forEach((formacion) => {
      $template.querySelector("tr").innerHTML = `
              <td>
                ${
                  nombre_tipo_proceso !== "Curso MOOC"
                    ? '<label for="check-gen-certificados" id="label-check-gen-certificados"><span style="display: none">check</span><input type="checkbox" name="check-gen-certificados" id="check-gen-certificados" class="check-gen-certificados"/></label>'
                    : "No seleccionable"
                }
              </td>
              <td>${formacion.nombre_inscrito}</td>
              <td>${formacion.tipo_documento}</td>
              <td>${formacion.numero_documento}</td>
              <td>${formacion.correo_electronico}</td>
              <td>${formacion.telefono}</td>
              <td>${formacion.vinculacion}</td>
              <td>${formacion.dependencia}</td>
              <td>${formacion.fecha_registro}</td>
              <td>${formacion.numero_asistencia}</td>
              <td class="td-acciones td-acciones-index">
              ${nombre_tipo_proceso !== "Curso MOOC" ? '<span class="material-symbols-outlined index-noCertificado" title="Generar certificado"> badge </span>' : "Sin acciones por ejecutar"}
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
    notificarNoRegistros("No se encontraron registrados sin certificación");
  }

  $tbodyFormacionesGenerales.appendChild($fargmento);
};

export default llenaTablaNoCertificados;
