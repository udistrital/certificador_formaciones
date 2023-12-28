import { modelCohorteInfo } from "../models/cohorteModel.js";

const copiarLinks = () => {
    // console.log("entra copia");
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

  copiarLinks();