import { ordenamientoProceso } from "./Cursos/Ordenamientos.js";
import { reloadTabla } from "./Cursos/ReloadCursos.js";

const listarCursosTutorFetch = async (tipo_formacion) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/proceso.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));

      //este fragmento permite que de todos los procesos se filtren los que son de curso con tutor
      let formacionesCTutor = [];
      JSON.parse(result).forEach((element) => {
        element.tipo_proceso == tipo_formacion &&
          formacionesCTutor.push(element);
      });
      let modeloCursoConTutor = formacionesCTutor;
      //en caso de que la peticion solo retorne procesos de tipo curso con tutor
      // modeloCursoConTutor = JSON.parse(result);
      ordenamientoProceso(modeloCursoConTutor, tipo_formacion);
      reloadTabla(modeloCursoConTutor, tipo_formacion);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default listarCursosTutorFetch;
