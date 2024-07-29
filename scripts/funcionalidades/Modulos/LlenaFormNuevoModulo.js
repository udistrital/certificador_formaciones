const llenaFormNuevoModulo = (nombreProceso, idProceso) => {
  console.log(nombreProceso);
  document.getElementById("form-curso-tutor-input-nombre-proceso").value =
    nombreProceso;
  document.getElementById("form-curso-tutor-input-id-proceso").value =
    idProceso;
};

export default llenaFormNuevoModulo;
