import { notificarNoRegistros, quitaNotificacionNoRegistros } from "../NotificaNoExistenciaRegistros.js";

const llenaTablaCertificados = (certificados) => {
  console.log(certificados);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-nocertificados").content,
    $tbodyFormacionesGenerales = document.getElementById("tbody-table-nocertificados");
  $tbodyFormacionesGenerales.innerHTML = "";

  if (certificados.noCertificados.length !== 0) {
    certificados.noCertificados.forEach((formacion) => {
      $template.querySelector("tr").innerHTML = `
              <td>${formacion.nombre_inscrito}</td>
              <td>${formacion.tipo_documento}</td>
              <td>${formacion.numero_documento}</td>
              <td>${formacion.correo_electronico}</td>
              <td>${formacion.numero_contacto}</td>
              <td>${formacion.vinculacion}</td>
              <td>${formacion.dependencia}</td>
              <td>${formacion.fecha_registro}</td>
              <td>${formacion.ultima_asistencia}</td>
              <td class="td-acciones td-acciones-index">
                <span class="material-symbols-outlined" title="Ver certificado"> <a href="../pages/CursoConTutorCohortesPage.html">visibility</a></span>
                <span class="material-symbols-outlined" title="Descargar certificado"> download </span>
                <span class="material-symbols-outlined" title="Enviar certificado"> forward_to_inbox </span>
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
    notificarNoRegistros("No se encontraron registrados con certificación");
  }

  $tbodyFormacionesGenerales.appendChild($fargmento);
};

export default llenaTablaCertificados;
