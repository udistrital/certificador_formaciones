let d = document;
console.log(new Date().getFullYear());

d.getElementById("anioCohorte").setAttribute("min", new Date().getFullYear());
d.getElementById("anioCohorte").setAttribute("max", new Date().getFullYear() + 1);

if (!window.location.pathname.includes("CursoMoocCohortesPage")) {
  d.getElementById("fechaInicialCohorte").setAttribute("min", new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, "0") + "-" + String(new Date().getDate()).padStart(2, "0"));
  d.getElementById("fechaFinalCohorte").setAttribute("min", new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, "0") + "-" + String(new Date().getDate() + 1).padStart(2, "0"));

  document.addEventListener("change", (e) => {
    if (e.target.matches("#fechaInicialCohorte")) {
      d.getElementById("fechaFinalCohorte").setAttribute("min", e.target.value);

      //se configura el rango de fechas para la inscripcion
      d.getElementById("fechaInicialCohorteFormInscripcion").setAttribute("min", e.target.value);
      d.getElementById("fechaFinalCohorteFormInscripcion").setAttribute("min", e.target.value);
    }

    if (e.target.matches("#fechaFinalCohorte")) {
      //se configura el rango de fechas para la inscripcion
      d.getElementById("fechaInicialCohorteFormInscripcion").setAttribute("max", e.target.value);
      d.getElementById("fechaFinalCohorteFormInscripcion").setAttribute("max", e.target.value);

      d.getElementById("fechaConexion").setAttribute("max", e.target.value);
    }

    if (e.target.matches("#fechaInicialCohorteFormInscripcion")) {
      d.getElementById("fechaFinalCohorteFormInscripcion").setAttribute("min", e.target.value);
    }

    if (e.target.matches("#fechaFinalCohorteFormInscripcion")) {
      d.getElementById("fechaConexion").setAttribute("min", e.target.value);
    }

    if (e.target.matches("#fechaConexion")) {
      d.getElementById("fechaInicialAsistenciaCohorte").value = e.target.value;
      d.getElementById("fechaFinalAsistenciaCohorte").value = e.target.value;
      d.getElementById("fechaInicialAsistenciaCohorte").setAttribute("min", e.target.value);
      d.getElementById("fechaFinalAsistenciaCohorte").setAttribute("min", e.target.value);
      d.getElementById("fechaInicialAsistenciaCohorte").setAttribute("max", e.target.value);
      d.getElementById("fechaFinalAsistenciaCohorte").setAttribute("max", e.target.value);
    }

    if (e.target.matches("#horaConexion")) {
      // se aumenta una hora a la hora seleccionada de inicio de asistencia
      let horaFinalAsistencia = parseInt(e.target.value.split(":")[0]);
      if (horaFinalAsistencia === 23) {
        horaFinalAsistencia = "00";
      } else {
        horaFinalAsistencia = (horaFinalAsistencia + 1).toString();
        if (horaFinalAsistencia.length === 1) {
          horaFinalAsistencia = "0" + horaFinalAsistencia;
        }
      }
      horaFinalAsistencia = horaFinalAsistencia + ":" + e.target.value.split(":")[1];
      d.getElementById("horaInicialAsistenciaCohorte").value = e.target.value;
      d.getElementById("horiaFinalAsistenciaCohorte").value = horaFinalAsistencia;
    }

    if (window.location.pathname.includes("EventosCohortesPage")) {
      if (e.target.matches("#fechaConexion")) {
        d.getElementById("fechaInicialDocumentacion").setAttribute("min", e.target.value);
        d.getElementById("fechaInicialMemoria").setAttribute("min", e.target.value);
      }

      if (e.target.matches("#fechaFinalCohorte")) {
        d.getElementById("fechaInicialDocumentacion").setAttribute("max", e.target.value);
        d.getElementById("fechaFinalDocumentacion").setAttribute("max", e.target.value);
        d.getElementById("fechaInicialMemoria").setAttribute("max", e.target.value);
        d.getElementById("fechaFinalMemoria").setAttribute("max", e.target.value);
      }

      if (e.target.matches("#fechaInicialDocumentacion")) {
        d.getElementById("fechaFinalDocumentacion").setAttribute("min", e.target.value);
      }
      if (e.target.matches("#fechaInicialMemoria")) {
        d.getElementById("fechaFinalMemoria").setAttribute("min", e.target.value);
      }
    }
  });
}
