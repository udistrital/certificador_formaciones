import cohorteById from "../../Fetching/GET/CohorteById.js";

const llenarModalNewSesion = async (cohorte) => {
  console.log(cohorte);
  document.getElementById("newSesionTipoFormacion").value = cohorte.nombre_tipo_proceso;
  document.getElementById("newSesionIdFormacion").value = cohorte.id_proceso;
  document.getElementById("newSesionNombreFormacion").value = cohorte.nombre_proceso;
  document.getElementById("newSesionIdCohorte").value = cohorte.id_cohorte;

  const infoCohorte = await cohorteById(cohorte.id_cohorte);
  console.log(infoCohorte);

  document.getElementById("newSesionFechaConexion").setAttribute("min", new Date(infoCohorte[0].fecha_inicial).toISOString().split("T")[0]);
  document.getElementById("newSesionFechaConexion").setAttribute("max", new Date(infoCohorte[0].fecha_final).toISOString().split("T")[0]);
};

export default llenarModalNewSesion;
