import copiarLinks from "./CopiaLinksCohortes.js";
import { modelCohorteInfo } from "../../../models/cohorteModel.js";
import formulariosGET from "../../Fetching/GET/FormulariosCohorte.js";
import sesionesGET from "../../Fetching/GET/SesionesCohorte.js";

const mostarInforCohorte = (listaCohortes) => {
  console.log(listaCohortes);

  let listaLinks = Array.from(document.querySelectorAll(".show-info-cohorte"));
  let listadoFormularios = [];
  let listadoSesiones = [];
  listaLinks.forEach((cohorte, index) => {
    cohorte.addEventListener("click", async () => {
      let idCohorteInfoMostrar = listaCohortes[index].cohorte;
      const $numCohorteVisual = document.getElementById("informacion-cohorte-numeral");
      if (window.location.pathname.includes("EventosModulos") || window.location.pathname.includes("CursosModulos")) {
        $numCohorteVisual.textContent = `Modulo [ ${listaCohortes[index].id_modulo} - ${listaCohortes[index].nombre_modulo} ]`;
        console.log(listaCohortes[index].link_inscripcion[0].fecha_inicial);

        document.getElementById("table-body-fechaInscripcion").textContent = `${listaCohortes[index].link_inscripcion[0].fecha_inicial} ${listaCohortes[index].link_inscripcion[0].fecha_final}`;
        document.getElementById("table-body-fechaAsistencia").textContent = `${listaCohortes[index].link_asistencia[0].fecha_inicial} ${listaCohortes[index].link_asistencia[0].fecha_final}`;

        document.getElementById("modal-data-cohorte-estado-inscripcion").innerHTML = `${
          new Date(listaCohortes[index].link_inscripcion[0].fecha_final) < Date.now()
            ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
            : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
        }`;
        document.getElementById("modal-data-cohorte-estado-asistencia").innerHTML = `${
          new Date(listaCohortes[index].link_asistencia[0].fecha_final) < Date.now()
            ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
            : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
        }`;
      } else {
        $numCohorteVisual.textContent = `Cohorte [ ${listaCohortes[index].anio}-${idCohorteInfoMostrar}-${listaCohortes[index].id_cohorte} ]`;
        let idCohorteModelo = listaCohortes[index].id;
        /**
         * Se realizan dos peticiones
         * 1- para obtener informacion de la sesion
         * 2- para obtener informacion de los formularios de asistencia e inscripcion a la cohorte
         *  cada una recibira el id de la cohorte en el modelo para realizar la busqueda en la base de datos
         */

        // listadoFormularios = await formulariosGET(idCohorteModelo);
        // listadoSesiones = await sesionesGET(idCohorteModelo);

        document.getElementById("table-body-fechaInscripcion").textContent = `${listaCohortes[index].link_inscripcion[0].fecha_inicial} ${listaCohortes[index].link_inscripcion[0].fecha_final}`;

        document.getElementById("modal-data-cohorte-estado-inscripcion").innerHTML = `${
          new Date(listaCohortes[index].link_inscripcion[0].fecha_final) < Date.now()
            ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
            : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
        }`;
        if (listaCohortes[index].id_tipo_proceso !== "8") {
          document.getElementById("table-body-fechaAsistencia").textContent = `${listaCohortes[index].link_asistencia[0].fecha_inicial} ${listaCohortes[index].link_asistencia[0].fecha_final}`;
          document.getElementById("modal-data-cohorte-estado-asistencia").innerHTML = `${
            new Date(listaCohortes[index].link_asistencia[0].fecha_final) < Date.now()
              ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
              : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          }`;
        }

        //IMPLEMENTACION DE PONENTES, DOCUMENTACION Y MEMORIAS, SE DEBE CORREGIR ESTA PARTE CUANDO FUNCIONE EL ENDPOINT CON TODOS LOS FORMULARIOS NECESARIOS
        if (listaCohortes[index].id_tipo_proceso === "11") {
          // document.getElementById(
          //   "table-body-fechaPonentes"
          // ).textContent = `${listaCohortes[index].link_inscripcion[0].fecha_inicial} ${listaCohortes[index].link_inscripcion[0].fecha_final}`;
          // // document.getElementById(
          // //   "table-body-fechaDocumentacion"
          // // ).textContent = `${listaCohortes[index].link_inscripcion[0].fecha_inicial} ${listaCohortes[index].link_inscripcion[0].fecha_final}`;
          // // document.getElementById(
          // //   "table-body-fechaMemorias"
          // // ).textContent = `${listaCohortes[index].link_inscripcion[0].fecha_inicial} ${listaCohortes[index].link_inscripcion[0].fecha_final}`;
          // document.getElementById(
          //   "modal-data-cohorte-estado-ponentes"
          // ).innerHTML = `${
          //   new Date(listaCohortes[index].link_inscripcion[0].fecha_final) <
          //   Date.now()
          //     ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
          //     : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          // }`;

          //IMPLEMENTACION DE PONENTES, DOCUMENTACION Y MEMORIAS, SE DEBE CORREGIR ESTA PARTE CUANDO FUNCIONE EL ENDPOINT CON TODOS LOS FORMULARIOS NECESARIOS
          document.getElementById("table-body-fechaPonentes").textContent = `${listaCohortes[index].fecha_creado} ${listaCohortes[index].fecha_creado}`;
          document.getElementById("table-body-fechaDocumentacion").textContent = `${listaCohortes[index].fecha_creado} ${listaCohortes[index].fecha_creado}`;
          document.getElementById("table-body-fechaMemorias").textContent = `${listaCohortes[index].fecha_creado} ${listaCohortes[index].fecha_creado}`;
          document.getElementById("modal-data-cohorte-estado-ponentes").innerHTML = `${
            new Date(listaCohortes[index].fecha_creado) < Date.now() ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado' : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          }`;

          document.getElementById("modal-data-cohorte-estado-documentacion").innerHTML = `${
            new Date(listaCohortes[index].fecha_creado) < Date.now() ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado' : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          }`;
          document.getElementById("modal-data-cohorte-estado-memorias").innerHTML = `${
            new Date(listaCohortes[index].fecha_creado) < Date.now() ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado' : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          }`;

          // document.getElementById(
          //   "modal-data-cohorte-estado-documentacion"
          // ).innerHTML = `${
          //   new Date(listaCohortes[index].link_inscripcion[0].fecha_final) <
          //   Date.now()
          //     ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
          //     : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          // }`;
          // document.getElementById(
          //   "modal-data-cohorte-estado-memorias"
          // ).innerHTML = `${
          //   new Date(listaCohortes[index].link_inscripcion[0].fecha_final) <
          //   Date.now()
          //     ? '<span class="material-symbols-outlined off-info-cohorte" title="Deshabilitada"> cancel </span> cerrado'
          //     : '<span class="material-symbols-outlined on-info-cohorte" title="Habilitada" > check_circle </span> abierto'
          // }`;
        }

        copiarLinks({ listadoFormularios, listadoSesiones });
      }
    });
  });

  console.log(listadoFormularios, listadoSesiones);
};

export default mostarInforCohorte;
