import listarModulos from "../../Fetching/GET/ListarModulos.js";
import buscarTipoFormacion from "../BuscarTipoFormacion.js";
import llenaFormNuevoModulo from "./LlenaFormNuevoModulo.js";
import obtenerParametrosComposForm from "./ObtenerParametrosCamposForm.js";

const obtenerParametrosURL = () => {
  let id_proceso = parseInt(
    new URLSearchParams(window.location.search).get("idProceso")
  );
  let id_cohorte = new URLSearchParams(window.location.search).get("idCohorte");

  listarModulos(id_proceso, id_cohorte);
  // buscarTipoFormacion(tipoFormacion);
  llenaFormNuevoModulo(id_proceso, id_cohorte);
};

export default obtenerParametrosURL;
