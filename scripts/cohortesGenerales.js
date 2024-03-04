import { modelCohorteInfo } from "../models/cohorteModel.js";

const copiarLinks = () => {
  console.log("entra copia");
  document.addEventListener("click", (e) => {
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
  });
};

copiarLinks();
