import notificacion from "../Notificacion.js";

const copiarLinks = (cohorte) => {
  console.log("entra copia", cohorte);
  document.addEventListener("click", (e) => {
    console.log(e.target);
    let textoACopiar = "";
    if (e.target === document.getElementById("info-cohorte-copia-link-conexion")) {
      textoACopiar = cohorte.link_sesion.length !== 0 ? cohorte.link_sesion[cohorte.link_sesion.length - 1].enlace : alert("No se registra enlace de la sesion");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copidado el enlace de la sesion", "modal");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-inscripcion")) {
      textoACopiar = cohorte.link_inscripcion.length !== 0 ? `http://127.0.0.5:5501/pages/formularios/formularioValidacionCursante.html?codigo=` + cohorte.link_inscripcion[cohorte.link_inscripcion.length - 1].hash : alert("No se registra enlace de la formulario de inscripcion");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copiado el enlace de formulario de inscripcion", "modal");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-asistencia")) {
      textoACopiar = cohorte.link_asistencia.length !== 0 ? `http://127.0.0.5:5501/pages/formularios/formsAsistencias/formularioAsistencia.html?codigo=` + cohorte.link_asistencia[cohorte.link_asistencia.length - 1].hash : alert("No se registra enlace de la formulario de asistencia");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copiado el enlace de formulario de asistencia", "modal");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-ponentes")) {
      textoACopiar = cohorte.link_asistencia.length !== 0 ? `http://127.0.0.5:5501/pages/formularios/formularioValidacionCursante.html?codigo=` + cohorte.link_asistencia[cohorte.link_asistencia.length - 1].hash : alert("No se registra enlace de la formulario de asistencia");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copiado el enlace de formulario de registro de ponentes", "modal");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-documentacion")) {
      textoACopiar = cohorte.link_asistencia.length !== 0 ? `http://127.0.0.5:5501/pages/formularios/formsDocumentacion/formularioDocumentos.html?codigo=` + cohorte.link_asistencia[cohorte.link_asistencia.length - 1].hash : alert("No se registra enlace de la formulario de asistencia");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copiado el enlace de formulario de documentacion", "modal");
      });
    } else if (e.target === document.getElementById("info-cohorte-copia-link-memorias")) {
      textoACopiar = cohorte.link_asistencia.length !== 0 ? `http://127.0.0.5:5501/pages/formularios/formsEvidencias/formularioEvidencias.html?codigo=` + cohorte.link_asistencia[cohorte.link_asistencia.length - 1].hash : alert("No se registra enlace de la formulario de asistencia");
      navigator.clipboard.writeText(textoACopiar).then(() => {
        notificacion(true, "Se ha copiado el enlace de formulario de memorias", "modal");
      });
    }
  });
};

export default copiarLinks;
