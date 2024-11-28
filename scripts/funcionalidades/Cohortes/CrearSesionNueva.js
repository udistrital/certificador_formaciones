import postNuevoFormulario from "../../Fetching/POST/InsertaFormulario.js";
import postNuevaSesion from "../../Fetching/POST/InsertarSesion.js";
import formatearFecha from "../FormateoFecha.js";

const crearSesionNueva = async (e) => {
  const formData = new FormData(e.target); // Captura los datos del formulario

  const sesion = {
    creador: JSON.parse(sessionStorage.getItem("data"))[0].id,
    cohorte: formData.get("newSesionIdCohorte"),
    fecha_inicial: formatearFecha(formData.get("newSesionFechaConexion") + "T" + formData.get("newSesionHoraConexion") + ":00"),
    fecha_final: formatearFecha(formData.get("newSesionFechaConexion") + "T" + formData.get("newSesionHoraConexion") + ":00"),
    sesion_virtual: formData.get("newSesionModalidad") === "on" ? 1 : 0,
    enlace: formData.get("newSesionlinkCursoOConexion"),
    activo: true,
  };

  //   formData.get("newFormIdModulo") ? (formulario.modulo = formData.get("newFormIdModulo")) : "";

  //   await postNuevoFormulario(formulario);

  // Accediendo a campos individuales
//   console.log("Formulario capturado:", sesion, e.target);
  await postNuevaSesion(sesion);
  e.target.reset();
  //   formData.reset();

  //   console.log(formData.get("newSesionHoraConexion"));
  //   console.log(formData.get("newSesionFechaConexion"));
  //   console.log(formData.get("newSesionModalidad"));
  //   console.log(formData.get("newSesionFechaConexion") + "T" + formData.get("newSesionHoraConexion") + ":00");
};

export default crearSesionNueva;
