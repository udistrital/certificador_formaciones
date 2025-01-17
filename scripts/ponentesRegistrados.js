import listaRegistrosPonentesCohorte from "./Fetching/GET/ListaRegistrosPonentesCohorte.js";
import llenaFormNuevoModulo from "./funcionalidades/Modulos/LlenaFormNuevoModulo.js";
import obtenerModuloId from "./funcionalidades/Modulos/ObtenerModuloId.js";
import { notificarNoRegistros } from "./funcionalidades/NotificaNoExistenciaRegistros.js";

const obtenerIdCohorteProcesoUrl = () => {
  return {
    id_proceso: new URLSearchParams(window.location.search).get("idProceso"),
    id_cohorte: new URLSearchParams(window.location.search).get("idCohorte"),
  };
};

const mostrarListadoAsistencias = async () => {
  let { id_proceso, id_cohorte } = obtenerIdCohorteProcesoUrl();
  let listadoPonentesRegistradosCohorte = await listaRegistrosPonentesCohorte(
    id_cohorte,
    id_proceso
  );

  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");
  $tbody.innerHTML = "";

  if (listadoPonentesRegistradosCohorte.length !== 0) {
    listadoPonentesRegistradosCohorte.forEach((registrado, index) => {
      $template.querySelector("tr").innerHTML = `
          <tr>
              <td>${registrado.nombre_inscrito}</td>
              <td>${registrado.tipo_documento}</td>
              <td>${registrado.numero_documento}</td>
              <td>${registrado.correo_electronico}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.fecha_asistencia}</td>
              <td>${registrado.perfil}</td>
              <td>${registrado.ponencia}</td>
              <td>${registrado.fecha_creado}</td>
              <td class="td-acciones">
              ${
                registrado.aceptado === "0"
                  ? "<div class='index-aceptarPonente'><span class='material-symbols-outlined' title='Aceptar ponente' >person_add</span>Aceptar</div>"
                  : "<div class='index-aceptarPonente'><span class='material-symbols-outlined' title='Rechazar ponente'>person_add_disabled</span>Rechazar</div>"
              }
              </td>
          </tr>
          `;

      let clone = document.importNode($template, true);

      $fargmento.appendChild(clone);
    });
    $tbody.appendChild($fargmento);

    obtenerModuloId(listadoPonentesRegistradosCohorte);
  } else {
    notificarNoRegistros("No se encontraron ponentes registrados a la cohorte");
  }
};

mostrarListadoAsistencias();