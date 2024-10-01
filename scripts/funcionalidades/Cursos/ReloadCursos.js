import llenarTablaCursosTutor from "../llenaTablaFormaciones.js";
import verCohorte from "../VerCohorte.js";
import verModulos from "../VerModulos.js";

export const reloadTabla = (listaProcesos, idTipoProceso) => {
  llenarTablaCursosTutor(listaProcesos);
  verCohorte(listaProcesos);
  (idTipoProceso === 10 || idTipoProceso === 11) && verModulos(listaProcesos);
};
