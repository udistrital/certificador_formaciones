import llenaSelectNewForm from "../LlenaSelectTipoFormulario.js";

const llenarModalNewForm = async (cohorte) => {
  llenaSelectNewForm(cohorte);

  console.log(cohorte);
  document.getElementById("newFormTipoFormacion").value = cohorte.nombre_tipo_proceso;
  document.getElementById("newFormIdFormacion").value = cohorte.id_proceso;
  document.getElementById("newFormNombreFormacion").value = cohorte.nombre_proceso;
  document.getElementById("newFormIdCohorte").value = cohorte.id_cohorte;
  if (cohorte.id_modulo) {
    document.getElementById("newFormIdModulo").value = cohorte.id_modulo;
  }
};

export default llenarModalNewForm;
