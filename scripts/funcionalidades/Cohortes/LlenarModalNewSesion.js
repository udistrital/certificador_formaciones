const llenarModalNewSesion = async (cohorte) => {
  console.log(cohorte);
  document.getElementById("newSesionTipoFormacion").value = cohorte.nombre_tipo_proceso;
  document.getElementById("newSesionIdFormacion").value = cohorte.id_proceso;
  document.getElementById("newSesionNombreFormacion").value = cohorte.nombre_proceso;
  document.getElementById("newSesionIdCohorte").value = cohorte.id_cohorte;
};

export default llenarModalNewSesion;
