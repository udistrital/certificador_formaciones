let linksVisitados = ["http://127.0.0.5:5501/index.html"];
export function registrarNavegacion() {
  if (
    location.href === "http://127.0.0.5:5501/index.html" ||
    location.href === "http://127.0.0.5:5501/"
  ) {
    // console.log("es");
    localStorage.setItem("linksVisitados", JSON.stringify(linksVisitados));
  }

  console.log(localStorage);

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

const llenarHistorial = () => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-historial-enlace").content;

  const $artHistorial = document.getElementsByClassName(
    "historial-nav-article"
  );
  // console.log($artHistorial);
  console.log(linksVisitados);
  linksVisitados.forEach((link) => {
    $template.querySelector("a").setAttribute("href", link);
    $template.querySelector("a").setAttribute("target", "_blank");
    $template.querySelector("a").textContent = `/${
      link.includes("index.html")
        ? "home"
        : link.includes("CursoConTutorPage")
        ? "Curso con tutor"
        : link.includes("CursoConTutorCohortesPage")
        ? "Cohortes curso con tutor"
        : link.includes("AsistenciasPage")
        ? "Asistencia"
        : link.includes("CertificadosEmitidosPage")
        ? "Certificados emitidos"
        : link.includes("GenerarCertificadosPage")
        ? "Generar certificado"
        : link.includes("CursoMoocPage")
        ? "Curso Mooc"
        : link.includes("CapacitacionTaller")
        ? "Capacitacion o taller"
        : link.includes("DiplomadosPage")
        ? "Diplomado"
        : link.includes("AsistenciasPage")
        ? "Asistencia"
        : link.includes("CertificadosEmitidosPage")
        ? "Certificados emitidos"
        : link.includes("GenerarCertificadosPage")
        ? "Generar certificados"
        : link.includes("CursoConTutorCohortesPage")
        ? "Cohortes curso con tutor"
        : link.includes("CursoMoocCohortesPage")
        ? "Cohortes curso Mooc"
        : link.includes("CapacitacionCohortesPage")
        ? "Cohortes Capacitacion o taller"
        : link.includes("DiplomadoCohortesPage")
        ? "Cohortes diplomados"
        : link.includes("CursosModulos")
        ? "Modulos diplomados"
        : link.includes("EventosCohortesPage")
        ? "Cohortes eventos"
        : link.includes("EventosCohortesPage")
        ?"Eventos"
        :""
    }`;
    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $artHistorial[0].appendChild($fargmento);
};

llenarHistorial();
