import { modelCohorteInfo } from "../../../models/cohorteModel.js";

const copiarLinks = (data) => {
  console.log("entra copia", data, data.listadoSesiones.length);
  document.addEventListener("click", (e) => {
    // console.log(e.target);
    let textoACopiar = "";
    if (
      e.target === document.getElementById("info-cohorte-copia-link-conexion")
    ) {
      textoACopiar =
        data.listadoSesiones.length !== 0
          ? data.listadoSesiones[0].enlace
          : "Link de conexion no existe aún";
      if (textoACopiar === "Link de conexion no existe aún") {
        alert("No existe un enlace de sesión aún");
      } else {
        navigator.clipboard.writeText(textoACopiar).then(() => {
          alert("Se ha copidado el link");
        });
      }
    } else if (
      e.target ===
      document.getElementById("info-cohorte-copia-link-inscripcion")
    ) {
      textoACopiar = data.listadoFormularios[0].hash;
      // console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    } else if (
      e.target === document.getElementById("info-cohorte-copia-link-asistencia")
    ) {
      textoACopiar = data.listadoFormularios[1].hash;
      // console.log(textoACopiar);
      navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Se ha copidado el link");
      });
    }
  });
};

export default copiarLinks;
