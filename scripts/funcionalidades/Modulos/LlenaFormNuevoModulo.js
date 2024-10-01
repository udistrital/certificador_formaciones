const llenaFormNuevoModulo = (id_proceso, id_cohorte) => {
  document.getElementById("form-curso-tutor-input-id-cohorte").value =
    id_cohorte;
  document.getElementById("form-curso-tutor-input-id-proceso").value =
    id_proceso;
};

export default llenaFormNuevoModulo;
