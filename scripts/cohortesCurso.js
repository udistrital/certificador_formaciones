import { listaCohortesCurso } from "../models/informesGenerales.js";
import { modelCohorteInfo } from "../models/cohorteModel.js";

//informacion para copiar, se podria enviar el idde la cohorte
const copiarLinks = () => {
  console.log("entra copia");
  document.addEventListener("click", (e) => {
    
    let input = document.createElement("input"),
      textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      textoACopiar = modelCohorteInfo.linkConexion;
      console.log(textoACopiar);
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar = modelCohorteInfo.linkInscripcion;
      console.log(textoACopiar);
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar = modelCohorteInfo.linkAsistencia;
      console.log(textoACopiar);
    }
    input.setAttribute("value", textoACopiar);
    input.style.display = 'none';
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
  });
};

const mostarInforCohorte = (listaCohortes) => {
  let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
  listaLinks.forEach((cohorte, index) => {
    cohorte.addEventListener("click", () => {
      //se captura el id del cohorte del cual se desea saber la informacion
      let idCohorteInfoMostrar = listaCohortes[index].idCohorte;
      console.log("hola muno", listaCohortes[index], idCohorteInfoMostrar);
    });
  });
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor-cohortes-info"
    ).content,
    $tableInfoCohorte = document.getElementById("table-info-cohorte");
  $template.querySelector("tbody").innerHTML = `<tr>
  <td>Inscripción:</td>
  <td>${modelCohorteInfo.fechaInicioInscripcion} - ${
    modelCohorteInfo.fechaFinalInscripcion
  }</td>
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
  <td>${modelCohorteInfo.fechaInicialAsistencia} - ${
    modelCohorteInfo.fechaFinalAsistencia
  }</td>
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

  listaCohortes.forEach((cohorte) => {
    $template.querySelector("tr").innerHTML = `
                <td>${cohorte.idCohorte}</td>
                <td>${cohorte.anioCohorte}</td>
                <td>${cohorte.fechaInicialCohorte}</td>
                <td>${cohorte.fechaFinalCohorte}</td>
                <td class="td-acciones">
                <span
                  class="material-symbols-outlined show-info-cohorte"
                  title="Ver link"
                >
                  link
                </span>
                <span class="material-symbols-outlined" title="Asistencia">
                  <a href="../pages/AsistenciasPage.html"> fact_check </a>
                </span>
                <span class="material-symbols-outlined" title="Certificaciones">
                  <a href="../pages/CertificadosEmitidosPage.html">
                    workspace_premium
                  </a>
                </span>
                <span class="material-symbols-outlined" title="Configurarción">
                  settings
                </span>
              </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);

  console.log(listaCohortes);
  mostarInforCohorte(listaCohortes);
};

const filtrarCohortesPorFormacion = (idFormacion) => {
  let listaCohortesFormacion = listaCohortesCurso.filter((cohorte) => {
    return cohorte.idFormacion === idFormacion;
  });
  listarCohorterFormacion(listaCohortesFormacion);
};

const obtenerIdFormacion = () => {
  let idFormacion = parseInt(
    new URLSearchParams(window.location.search).get("idFormacion")
  );
  filtrarCohortesPorFormacion(idFormacion);
};

obtenerIdFormacion();
