import cohorteById from "../../Fetching/GET/CohorteById.js";
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

  const infoCohorte = await cohorteById(cohorte.id_cohorte);
  console.log(infoCohorte);

  document.getElementById("newFormFechaInicio").setAttribute("min", new Date(infoCohorte[0].fecha_inicial).toISOString().split("T")[0]);
  document.getElementById("newFormFechaInicio").setAttribute("max", new Date(infoCohorte[0].fecha_final).toISOString().split("T")[0]);

  document.getElementById("newFormFechaInicio").addEventListener("change", (e) => {
    document.getElementById("newFormFechaFinal").setAttribute("min", document.getElementById("newFormFechaInicio").value);
  });

  document.getElementById("newFormFechaFinal").setAttribute("max", new Date(infoCohorte[0].fecha_final).toISOString().split("T")[0]);
};

export default llenarModalNewForm;
