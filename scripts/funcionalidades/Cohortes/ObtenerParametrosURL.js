import listarCohortes from "../../Fetching/GET/ListarCohortes.js";
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
};

export default obtenerParametrosURL;
