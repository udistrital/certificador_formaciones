import listaRegistrosCohorte from "./Fetching/GET/ListaRegistrosCohorte.js";
import { notificarNoRegistros } from "./funcionalidades/NotificaNoExistenciaRegistros.js";

const obtenerIdCohorteProcesoUrl = () => {
  let id_modulo = null;

  if (window.location.href.includes("idModulo")) {
    id_modulo = new URLSearchParams(window.location.search).get("idModulo");
  }
  return {
    id_proceso: new URLSearchParams(window.location.search).get("idProceso"),
    id_cohorte: new URLSearchParams(window.location.search).get("idCohorte"),
    id_modulo,
  };
};

const mostrarListadoAsistencias = async () => {
  let { id_proceso, id_cohorte, id_modulo } = obtenerIdCohorteProcesoUrl();
  let listadoRagistrosCohorte = await listaRegistrosCohorte(
    id_cohorte,
    id_proceso,
    id_modulo
  );
  console.log(listadoRagistrosCohorte);

  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");
  $tbody.innerHTML = "";

  if (listadoRagistrosCohorte.length !== 0) {
    listadoRagistrosCohorte.forEach((registrado, index) => {
      $template.querySelector("tr").innerHTML = `
          <tr>
              <td>${registrado.nombre_inscrito}</td>
              <td>${registrado.tipo_documento}</td>
              <td>${registrado.numero_documento}</td>
              <td>${registrado.correo_electronico}</td>
              <td>${registrado.numero_contacto}</td>
              <td>${registrado.vinculacion}</td>
              <td>${registrado.dependencia}</td>
              <td>${registrado.fecha_registro}</td>
              <td>${registrado.ultima_asistencia}</td>
              <td class="td-acciones">
              <span class="material-symbols-outlined" title="Ver asistencias">
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
  } else {
    if (window.location.href.includes("idModulo")) {
      notificarNoRegistros("No se encontraron cursantes registrados al modulo");
    } else {
      notificarNoRegistros(
        "No se encontraron cursantes registrados a la cohorte"
      );
    }
  }
};

mostrarListadoAsistencias();
