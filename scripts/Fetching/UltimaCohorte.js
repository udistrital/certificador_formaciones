const traerUltimaCohorte = (tipoFormacion, idFormacion) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php?idFormacion=${tipoFormacion}&idTipoFormacion=${idFormacion}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      let $numCohorte = document.getElementById("numCohorte");
      //aca en la posicion del 25 ira el numero de la ultima cohorte +1 de la formacion
      $numCohorte.value = 25;
    })
    .catch((error) => console.error(error));
};

export default traerUltimaCohorte;
