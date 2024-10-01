let linksVisitados = ["http://127.0.0.5:5501/index.html"];
export function registrarNavegacion() {
  if (
    location.href === "http://127.0.0.5:5501/index.html" ||
    location.href === "http://127.0.0.5:5501/"
  ) {
    // console.log("es");
    localStorage.setItem("linksVisitados", JSON.stringify(linksVisitados));
  }

  // console.log(localStorage);

  linksVisitados = JSON.parse(localStorage.getItem("linksVisitados")) || [
    window.location.href,
  ];

  if (!linksVisitados.includes(window.location.href)) {
    linksVisitados.push(window.location.href);
    localStorage.setItem("linksVisitados", JSON.stringify(linksVisitados));
  }
}

// Llamada a la función para registrar la navegación en la primera carga
registrarNavegacion();

const obtenerInformacionURL = (link) => {
  let informacion = new URLSearchParams(link);

  let paramsObj = {};
  informacion.forEach((value, key) => {
    paramsObj[key] = value;
  });
  // console.log(paramsObj);
  return paramsObj;
};
const llenarHistorial = () => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-historial-enlace").content;

  const $artHistorial = document.getElementsByClassName(
    "historial-nav-article"
  );
  // console.log($artHistorial);
  // console.log(linksVisitados);
  linksVisitados.forEach((link) => {
    let nombreFormacion = obtenerInformacionURL(link).nombreFormacion;
    $template.querySelector("a").setAttribute("href", link);
    $template.querySelector("a").setAttribute("target", "_blank");
    $template.querySelector("a").textContent = `/${
      link.includes("index.html")
        ? "home"
        : link.includes("CursoConTutorPage") 
        ? `Curso con tutor ${nombreFormacion ? nombreFormacion : ""}` 
        : link.includes("CursoConTutorCohortesPage") 
        ? `Cohortes curso con tutor ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("AsistenciasPage") 
        ? `Asistencia ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CertificadosEmitidosPage")  
        ? `Certificados emitidos ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("GenerarCertificadosPage")  
        ? `Generar certificado ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CursoMoocPage")  
        ? `Curso Mooc ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CapacitacionTaller")  
        ? `Capacitacion o taller ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("DiplomadosPage")  
        ? `Diplomado ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("AsistenciasPage")  
        ? `Asistencia ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CertificadosEmitidosPage")  
        ? `Certificados emitidos ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("GenerarCertificadosPage")  
        ? `Generar certificados ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CursoConTutorCohortesPage")  
        ? `Cohortes curso con tutor ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CursoMoocCohortesPage") 
        ? `Cohortes curso Mooc ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CapacitacionCohortesPage")  
        ? `Cohortes Capacitacion o taller ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("DiplomadoCohortesPage")  
        ? `Cohortes diplomados ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CursosModulos")  
        ? `Modulos diplomados ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("EventosCohortesPage") 
        ? `Cohortes eventos ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("EventosCohortesPage")  
        ? `Eventos ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("PageFormsAsistencias")  
        ? `Formularios asistencias ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("PageFormsDocumentacion")  
        ? `Formularios documentación ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("PageFormsInscripciones")  
        ? `Formularios de inscripción ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("PageFormsPostulaciones")  
        ? `Formularios de inscripcion ponentes ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("PageFormsEvidencias")  
        ? `Formularios de evidencias ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("EventosPage")  
        ? `Eventos ${nombreFormacion ? nombreFormacion : ""}`
        : link.includes("CursantesRegistrados")
        ? "Cursantes registrados"
        : link.includes("PonentesRegistrados")
        ? "Ponentes registrados"
        : link.includes("EventosModulos")
        ? "Modulos"
        :""
    }`;
    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });


  $artHistorial[0].appendChild($fargmento);
};

llenarHistorial();
