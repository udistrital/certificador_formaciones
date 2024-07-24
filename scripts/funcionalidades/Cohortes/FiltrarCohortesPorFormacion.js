import { cusosCohortesGenerales } from "../../../models/informesGenerales.js";
import listarCohorterFormacion from "./ListarCohortesFormacion.js";

const filtrarCohortesPorFormacion = (idFormacion) => {
  let listaCohortesFormacion = cusosCohortesGenerales.filter((cohorte) => {
    return cohorte.id === idFormacion.toString();
  });
  listarCohorterFormacion(listaCohortesFormacion);
};

export default filtrarCohortesPorFormacion;
