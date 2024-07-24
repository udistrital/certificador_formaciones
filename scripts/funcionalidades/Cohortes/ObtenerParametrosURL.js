import fetchListarCohortesFormacion from "./FetchListadoCohortes.js";
import filtrarCohortesPorFormacion from "./FiltrarCohortesPorFormacion.js";
import insertarInfoParaCreacionCohorte from "./InsertarInformacionFormacion.js";

const obtenerParametrosURL = () => {
  let idFormacion = parseInt(
    new URLSearchParams(window.location.search).get("idFormacion")
  );
  let nombreFormacion = new URLSearchParams(window.location.search).get(
    "nombreFormacion"
  );
  let tipoFormacion = new URLSearchParams(window.location.search).get(
    "tipoFormacion"
  );

  console.log(
    "Obtener info url: " + nombreFormacion,
    tipoFormacion,
    idFormacion
  );
  //se usa la siguiente funcion en caso de que se retornen todos los cohortes y haya que filtrarlos de acuerdo con el numero de formacion
  filtrarCohortesPorFormacion(idFormacion);
  //en caso de que se necesite peticion fetch, se enviara el idFormacion, y el tipo de formacion para traer unicamente las cohortes necesarias
  //   fetchListarCohortesFormacion(idFormacion, tipoFormacion);
  insertarInfoParaCreacionCohorte(idFormacion, nombreFormacion, tipoFormacion);
};

export default obtenerParametrosURL;
