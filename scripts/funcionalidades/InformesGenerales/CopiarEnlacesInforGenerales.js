export const copiarEnlacesInformesGenerales = (inforCohorte) => {
  console.log("entra copia", inforCohorte);
  document.addEventListener("click", (e) => {
    let textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      textoACopiar =
        inforCohorte.link_sesion[inforCohorte.link_sesion.length - 1].enlace;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar =
        inforCohorte.link_inscripcion[inforCohorte.link_inscripcion.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar =
        inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-ponentes")
    ) {
      textoACopiar =
        inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-documentacion")
    ) {
      textoACopiar =
        inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-memorias")
    ) {
      textoACopiar =
        inforCohorte.link_asistencia[inforCohorte.link_asistencia.length - 1]
          .hash;
      console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }
  });
};
