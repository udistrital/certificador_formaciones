import llenarTablaCursosTutor from "../llenaTablaFormaciones.js";
import {
  notificarNoRegistros,
  quitaNotificacionNoRegistros,
} from "../NotificaNoExistenciaRegistros.js";
import verCohorte from "../VerCohorte.js";
import verModulos from "../VerModulos.js";

export const reloadTabla = (listaProcesos, idTipoProceso) => {
  console.log(listaProcesos);

  llenarTablaCursosTutor(listaProcesos);
  verCohorte(listaProcesos);
  (idTipoProceso === 10 || idTipoProceso === 11) && verModulos(listaProcesos);
};
