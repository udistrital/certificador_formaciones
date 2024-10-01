const obtenerParametrosUrlFormulario = () => {
  let idCohorteModelo = parseInt(
    new URLSearchParams(window.location.search).get("idCohorteModelo")
  );
  let cohorte = parseInt(
    new URLSearchParams(window.location.search).get("cohorte")
  );
  let idProceso = parseInt(
    new URLSearchParams(window.location.search).get("idProceso")
  );
  let nombreProceso = new URLSearchParams(window.location.search).get(
    "nombreProceso"
  );
  let nombreTipoProceso = new URLSearchParams(window.location.search).get(
    "nombreTipoProceso"
  );
  let idTipoProceso = parseInt(
    new URLSearchParams(window.location.search).get("idTipoProceso")
  );
  let anio = parseInt(new URLSearchParams(window.location.search).get("anio"));
  let id_formulario = parseInt(new URLSearchParams(window.location.search).get("id_formulario"));


  return {
    idCohorteModelo,
    cohorte,
    idProceso,
    nombreProceso,
    nombreTipoProceso,
    idTipoProceso,
    anio,
    id_formulario
  };
};

export default obtenerParametrosUrlFormulario;
