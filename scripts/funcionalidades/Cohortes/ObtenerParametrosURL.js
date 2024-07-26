import listarCohortes from "../../Fetching/ListarCohortes.js";
import traerUltimaCohorte from "../../Fetching/UltimaCohorte.js";
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
  listarCohortes(idFormacion, tipoFormacion);
  insertarInfoParaCreacionCohorte(idFormacion, nombreFormacion, tipoFormacion);
  traerUltimaCohorte(tipoFormacion, idFormacion);
};

export default obtenerParametrosURL;
