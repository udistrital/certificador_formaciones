import listarCohorterFormacion from "../funcionalidades/Cohortes/ListarCohortesFormacion.js";

const listarCohortes = (idFormacion, idTipoFormacion) => {
  console.log(idFormacion);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php?idFormacion=${idFormacion}&idTipoProceso=${idTipoFormacion}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      result = JSON.parse(result);
      console.log(result);
      let listaCohortesFormacion = result.filter((cohorte) => {
        return cohorte.proceso === idFormacion.toString();
      });
      listarCohorterFormacion(listaCohortesFormacion);
    })
    .catch((error) => console.error(error));
};

export default listarCohortes;
