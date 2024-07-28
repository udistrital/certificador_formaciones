import copiarLinks from "./CopiaLinksCohortes.js";
import { modelCohorteInfo } from "../../../models/cohorteModel.js";
import formulariosGET from "../../Fetching/GET/FormulariosCohorte.js";
import sesionesGET from "../../Fetching/GET/SesionesCohorte.js";

const mostarInforCohorte = (listaCohortes) => {
  let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
  let listadoFormularios = [];
  let listadoSesiones = [];
  listaLinks.forEach((cohorte, index) => {
    cohorte.addEventListener("click", async () => {
      // $tableInfoCohorte.innerHTML = "";
      //se captura el id del cohorte del cual se desea saber la informacion
      let idCohorteInfoMostrar = listaCohortes[index].cohorte;
      console.log("hola mundo", listaCohortes[index], idCohorteInfoMostrar);
      const $numCohorteVisual = document.getElementById(
        "informacion-cohorte-numeral"
      );
      $numCohorteVisual.textContent = `Cohorte [${idCohorteInfoMostrar}]`;

      let idCohorteModelo = listaCohortes[index].id;
      /**
       * Se realizan dos peticiones
       * 1- para obtener informacion de la sesion
       * 2- para obtener informacion de los formularios de asistencia e inscripcion a la cohorte
       *  cada una recibira el id de la cohorte en el modelo para realizar la busqueda en la base de datos
       */

      listadoFormularios = await formulariosGET(idCohorteModelo);
      listadoSesiones = await sesionesGET(idCohorteModelo);

      document.getElementById(
        "table-body-fechaInscripcion"
      ).textContent = `${listadoFormularios[0].fecha_inicial} ${listadoFormularios[0].fecha_final}`;
      document.getElementById(
        "table-body-fechaAsistencia"
      ).textContent = `${listadoFormularios[1].fecha_inicial} ${listadoFormularios[1].fecha_final}`;

      document.getElementById(
        "modal-data-cohorte-estado-inscripcion"
      ).innerHTML = `${
        new Date(listadoFormularios[0].fecha_final) < Date.now()
          ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
          : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
      }`;
      document.getElementById(
        "modal-data-cohorte-estado-asistencia"
      ).innerHTML = `${
        new Date(listadoFormularios[1].fecha_final) < Date.now()
          ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
          : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
      }`;

      copiarLinks({listadoFormularios, listadoSesiones});
    });
  });

  console.log(listadoFormularios, listadoSesiones);
};

export default mostarInforCohorte;
