function verModulos(data) {
  console.log(data);
  const $accionVerCohorte = document.querySelectorAll(".index-modulos");
  $accionVerCohorte.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //aca se captura el id de la formacion que se selecciona para observas las cohortes
      console.log(
        formacion,
        id,
        data
        // data[id].id,
        // data[id].nombre,
        // data[id].tipo_proceso
      );
      switch (data[id].tipo_proceso) {
        case "5":
          location.href = `../../index.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
        case "6":
          location.href = `../../index.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
          break;
      }
    });
  });
}

export default verModulos;
