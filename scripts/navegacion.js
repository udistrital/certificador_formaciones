let linksVisitados = [];
export function registrarNavegacion() {
  if (
    location.href === "http://127.0.0.5:5500/index.html" ||
    location.href === "http://127.0.0.5:5500/"
  ) {
    // console.log("es");
    linksVisitados = ["http://127.0.0.5:5500/index.html"];
    localStorage.setItem("linksVisitados", JSON.stringify(linksVisitados));
  }

  linksVisitados = JSON.parse(localStorage.getItem("linksVisitados")) || [
    window.location.href,
  ];
  // console.log(localStorage);
  if (localStorage.getItem("linksVisitados")) {
    // console.log("existe");
    // console.log(linksVisitados);
  }

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
  linksVisitados.forEach((link) => {
    $template.querySelector("a").setAttribute("href", link);
    $template.querySelector("a").setAttribute("target", "_blank");
    $template.querySelector("a").textContent = `/${
      link.includes("index.html")
        ? "home"
        : link.includes("CursoConTutorPage")
        ? "Curso con tutor"
        : link.includes("CursoConTutorCohortesPage")
        ? "Cohortes"
        : link.includes("AsistenciasPage")
        ? "Asistencia"
        : link.includes("CertificadosEmitidosPage")
        ? "Certificados emitidos"
        : link.includes("GenerarCertificadosPage")
        ? "Generar certificado"
        : ""
    }`;
    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $artHistorial[0].appendChild($fargmento);
};

llenarHistorial();
