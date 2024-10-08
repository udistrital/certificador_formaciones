function verCohorte(data) {
  console.log(data);
  const $accionVerCohorte = document.querySelectorAll(".accion-ver-cohorte");
  $accionVerCohorte.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //aca se captura el id de la formacion que se selecciona para observas las cohortes
      console.log(
        formacion,
        id,
        data[id].id,
        data[id].nombre,
        data[id].tipo_proceso
      );
      switch (data[id].tipo_proceso) {
        case "7":
          location.href = `CursoConTutorCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
        case "8":
          location.href = `CursoMoocCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
        case "9":
          location.href = `CapacitacionCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
        case "10":
          location.href = `DiplomadoCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
        case "11":
          location.href = `EventosCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
      }
    });
  });
}

export default verCohorte;
