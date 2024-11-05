import notificacion from "../Notificacion.js";

export const copiarEnlacesInformesGenerales = (e, inforCohorte) => {
  console.log("entra copia", inforCohorte);
  document.addEventListener("click", (e) => {
    console.log("se dio clic en un enlace");

    let textoACopiar = "";
    if (e.target === document.getElementById("info-cohorte-copia-link-conexion")) {
      console.log("entro a copiar enlace de sesion desde general");

      textoACopiar = inforCohorte.link_sesion[inforCohorte.link_sesion.length - 1].enlace;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
        notificacion(true, "Se ha copidado el enlace de la sesion");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-inscripcion")) {
      textoACopiar = `http://127.0.0.5:5501/pages/formularios/formularioValidacionCursante.html?codigo=` + inforCohorte.link_inscripcion[inforCohorte.link_inscripcion.length - 1].hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-asistencia")) {
      textoACopiar = `http://127.0.0.5:5501/pages/formularios/formsAsistencias/formularioAsistencia.html?codigo=` + inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1].hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-ponentes")) {
      textoACopiar = `http://127.0.0.5:5501/pages/formularios/formularioValidacionCursante.html?codigo=` + inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1].hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-documentacion")) {
      textoACopiar = `http://127.0.0.5:5501/pages/formularios/formsDocumentacion/formularioDocumentos.html?codigo=` + inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1].hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-memorias")) {
      textoACopiar = `http://127.0.0.5:5501/pages/formularios/formsEvidencias/formularioEvidencias.html?codigo=` + inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1].hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }
  });
};
