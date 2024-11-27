import cohortesGeneralesGET from "./Fetching/GET/CohortesGeneral.js";
import llenarTablaInformesGenerales from "./funcionalidades/InformesGenerales/LlenarTablaInformesGenerales.js";
import { obtenerIdCohorteInformeGeneral } from "./funcionalidades/InformesGenerales/ObtenerIdCohorteInformesGenerales.js";
import { ordenamientos } from "./funcionalidades/InformesGenerales/OrdenamientoInfoGenerales.js";
import llenaSelectNewForm from "./funcionalidades/LlenaSelectTipoFormulario.js";

const listarGeneralesFetch = async () => {
  let result = await cohortesGeneralesGET();
  llenarTablaInformesGenerales(result);

  // obtenerIdCohorteInformeGeneral(result);
  ordenamientos(result);
};

listarGeneralesFetch();
