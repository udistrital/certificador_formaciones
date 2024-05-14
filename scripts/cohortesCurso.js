import { cusosCohortesGenerales } from "../models/informesGenerales.js";
import { modelCohorteInfo } from "../models/cohorteModel.js";

const listaCohortesCurso = cusosCohortesGenerales;

//informacion para copiar, se podria enviar el idde la cohorte
const copiarLinks = () => {
  console.log("entra copia");
  document.addEventListener("click", (e) => {
    console.log(e.target);
    let textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      textoACopiar = modelCohorteInfo.linkConexion;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar = modelCohorteInfo.linkInscripcion;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar = modelCohorteInfo.linkAsistencia;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }

    // let input = document.createElement("input");
    // input.setAttribute("value", textoACopiar);
    // // input.style.display = "none";
    // document.body.appendChild(input);
    // input.select();
    // document.execCommand("copy");
    // document.body.removeChild(input);
  });
};

const mostarInforCohorte = (listaCohortes) => {
  let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
  listaLinks.forEach((cohorte, index) => {
    cohorte.addEventListener("click", () => {
      //se captura el id del cohorte del cual se desea saber la informacion
      let idCohorteInfoMostrar = listaCohortes[index].numCohorte;
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

const listarCohorterFormacion = (listaCohortes) => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor-cohortes"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor-cohortes");

    console.log(listaCohortes);

  listaCohortes.forEach((cohorte) => {
    $template.querySelector("tr").innerHTML = `
                <td>${cohorte.numCohorte}</td>
                <td>${cohorte.anio}</td>
                <td>${new Date(cohorte.fechaI).getFullYear()}/${ new Date(cohorte.fechaI).getMonth()}/${new Date(cohorte.fechaI).getDate()}</td>
                <td>${new Date(cohorte.fechaF).getFullYear()}/${new Date(cohorte.fechaF).getMonth()}/${new Date(cohorte.fechaF).getDate()}</td>
                <td class="td-acciones">
                <span
                  class="material-symbols-outlined show-info-cohorte"
                  title="Ver link"
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

  $tbody.appendChild($fargmento);

  mostarInforCohorte(listaCohortes);
};

const filtrarCohortesPorFormacion = (idFormacion) => {
  console.log(
    "Id formacion que llega" + idFormacion + " de tipo" + typeof idFormacion
  );
  let listaCohortesFormacion = listaCohortesCurso.filter((cohorte) => {
    return cohorte.id === idFormacion.toString();
  });

  listarCohorterFormacion(listaCohortesFormacion);
};

const insertarInfoParaCreacionCohorte = (
  idFormacion,
  nombreFormacion,
  tipoFormacion
) => {
  let $inputNombreFormacion = document.getElementById(
    "cursoConTutorFormNombreFormacion"
  );
  let $inputTipoFormacion = document.getElementById(
    "cursoConTutorFormTipoFormacion"
  );
  console.log(nombreFormacion, tipoFormacion, idFormacion);
  $inputNombreFormacion.setAttribute("value", ` ${nombreFormacion}`);
  $inputTipoFormacion.setAttribute("value", ` ${tipoFormacion}`);
};

const obtenerIdFormacionURL = () => {
  let idFormacion = parseInt(
    new URLSearchParams(window.location.search).get("idFormacion")
  );
  let nombreFormacion = new URLSearchParams(window.location.search).get(
    "nombreFormacion"
  );
  let tipoFormacion = new URLSearchParams(window.location.search).get(
    "tipoFormacion"
  );

  console.log(
    "Obtener info url: " + nombreFormacion,
    tipoFormacion,
    idFormacion
  );
  filtrarCohortesPorFormacion(idFormacion);
  insertarInfoParaCreacionCohorte(idFormacion, nombreFormacion, tipoFormacion);
};

obtenerIdFormacionURL();

const redireccionarAsistencias = (idCohorte, idFormacion) => {
  location.href = `../pages/AsistenciasPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarCertificaciones = (idCohorte, idFormacion) => {
  location.href = `../pages/Certificados/CertificadosEmitidosPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
const redireccionarConfiguraciones = (idCohorte, idFormacion) => {
  location.href = `CursoConTutorCohortesPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};

const obtenerIdCohorte = (li) => {
  let listaAsistencias = document.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log(
        id,
        "id formacion",
        li[id].idFormacion,
        "id cohorte:",
        li[id].idCohorte
      );
      redireccionarAsistencias(li[id].idCohorte, li[id].idFormacion);
    });
  });

  let listaCertificados = document.querySelectorAll(".index-certificados");
  listaCertificados.forEach((certificados, id) => {
    certificados.addEventListener("click", (e) => {
      console.log(
        id,
        "id formacion",
        li[id].idFormacion,
        "id cohorte:",
        li[id].idCohorte
      );
      redireccionarCertificaciones(li[id].idCohorte, li[id].idFormacion);
    });
  });

  let listaConfiguraciones = document.querySelectorAll(".index-configuracion");
  listaConfiguraciones.forEach((configuracion, id) => {
    configuracion.addEventListener("click", (e) => {
      console.log(
        id,
        "id formacion",
        li[id].idFormacion,
        "id cohorte:",
        li[id].idCohorte
      );
      redireccionarConfiguraciones(li[id].idCohorte, li[id].idFormacion);
    });
  });
};

obtenerIdCohorte(listaCohortesCurso);
