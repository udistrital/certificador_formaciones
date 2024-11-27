import postNuevoFormulario from "../../Fetching/POST/InsertaFormulario.js";
import formatearFecha from "../FormateoFecha.js";

const crearFormularioNuevo = async (e) => {
  const formData = new FormData(e.target); // Captura los datos del formulario

  const formulario = {
    creador: JSON.parse(sessionStorage.getItem("data"))[0].id,
    cohorte: formData.get("newFormIdCohorte"),
    tipo_formulario: formData.get("newFormTipoFormulario"),
    hash: Math.random().toString(36).substr(2) + Date.now().toString(36),
    fecha_inicial: formatearFecha(formData.get("newFormFechaInicio")),
    fecha_final: formatearFecha(formData.get("newFormFechaFinal")),
  };

  formData.get("newFormIdModulo") ? (formulario.modulo = formData.get("newFormIdModulo")) : "";

  await postNuevoFormulario(formulario);

  // Accediendo a campos individuales
  console.log("Formulario capturado:", formulario);
};

export default crearFormularioNuevo;
