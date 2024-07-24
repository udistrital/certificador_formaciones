const asignarTipoFormacionAFormulario = (
  idTipoFormacion,
  nombreTipoFormacion
) => {
  const $inputTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion"
  );
  const $inputTipoFormacionId = document.getElementById(
    "form-curso-tutor-input-tipo-formacion-id"
  );
  $inputTipoFormacion.setAttribute("value", nombreTipoFormacion);
  $inputTipoFormacionId.setAttribute("value", idTipoFormacion);
};

export default asignarTipoFormacionAFormulario;
