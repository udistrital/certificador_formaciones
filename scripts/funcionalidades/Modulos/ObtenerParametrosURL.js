import listarModulos from "../../Fetching/GET/ListarModulos.js";
import buscarTipoFormacion from "../BuscarTipoFormacion.js";
import llenaFormNuevoModulo from "./LlenaFormNuevoModulo.js";
import obtenerParametrosComposForm from "./ObtenerParametrosCamposForm.js";

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

  listarModulos(nombreFormacion, tipoFormacion, idFormacion);
  buscarTipoFormacion(tipoFormacion);
  llenaFormNuevoModulo(nombreFormacion, idFormacion);
};

export default obtenerParametrosURL;
