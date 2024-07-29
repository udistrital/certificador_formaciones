import postNuevoModulo from "../../Fetching/POST/InsertaModulo.js";

const obtenerParametrosComposForm = () => {
  let $nombreModulo = document.getElementById("nombreModulo").value;
  let $intensidadHoraria = document.getElementById("intensidadHoraria").value;
  let $idProceso = document.getElementById(
    "form-curso-tutor-input-id-proceso"
  ).value;
  const data = {
    creador: parseInt("1"),
    proceso: parseInt($idProceso),
    nombre: $nombreModulo,
    intensidad_horaria: parseInt($intensidadHoraria),
  };

  return postNuevoModulo(data);
};

export default obtenerParametrosComposForm;
