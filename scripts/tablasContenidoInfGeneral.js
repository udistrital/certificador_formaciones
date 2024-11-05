import cohortesGeneralesGET from "./Fetching/GET/CohortesGeneral.js";
import llenarTablaInformesGenerales from "./funcionalidades/InformesGenerales/LlenarTablaInformesGenerales.js";
import { obtenerIdCohorteInformeGeneral } from "./funcionalidades/InformesGenerales/ObtenerIdCohorteInformesGenerales.js";
import { ordenamientos } from "./funcionalidades/InformesGenerales/OrdenamientoInfoGenerales.js";

const listarGeneralesFetch = async () => {
  let result = await cohortesGeneralesGET();
  llenarTablaInformesGenerales(result);
  // obtenerIdCohorteInformeGeneral(result);
  ordenamientos(result);
};

listarGeneralesFetch();

[
  {
    id_cohorte: "1",
    id_proceso: "3",
    nombre_proceso: "Taller 1",
    id_tipo_proceso: "3",
    nombre_tipo_proceso: "Taller y/o capacitación",
    anio: "2024",
    cohorte: "1",
    fecha_inicial_cohorte: "2024-01-01",
    fecha_final_cohorte: "2024-12-31",
    link_sesion: [
      {
        id: 0,
        fecha_inicial: "No registra",
        fecha_final: "No registra",
        enlace: "No registra",
      },
    ],
    link_inscripcion: [
      {
        id: "6",
        fecha_inicial: "2024-07-26 18:00:59",
        fecha_final: "2024-07-26 18:00:59",
        hash: "registro_link_2",
      },
    ],
    link_asistencia: [
      {
        id: 0,
        fecha_inicial: "No registra",
        fecha_final: "No registra",
        hash: "No registra",
      },
    ],link_documentacion: [
      {
        id: 0,
        fecha_inicial: "No registra",
        fecha_final: "No registra",
        hash: "No registra",
      },
    ],link_evidencia: [
      {
        id: 0,
        fecha_inicial: "No registra",
        fecha_final: "No registra",
        hash: "No registra",
      },
    ],link_registro_ponentes: [
      {
        id: 0,
        fecha_inicial: "No registra",
        fecha_final: "No registra",
        hash: "No registra",
      },
    ],
  },
];
