import llenarTablaCursosTutor from "../llenaTablaFormaciones.js";
import { reloadTabla } from "./ReloadCursos.js";

export const ordenamientoProceso = (listadoProcesos, idTipoProceso) => {
  let orderBool = false;

  document.addEventListener("click", (e) => {
    console.log(listadoProcesos);
    if (e.target === document.getElementById("index-sort-id")) {
      console.log("orden por id");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoProcesos.sort((a, b) => b.id - a.id);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoProcesos.sort((a, b) => a.id - b.id);
      }
    } else if (e.target === document.getElementById("index-sort-nombre")) {
      orderBool = !orderBool;
      console.log("Orden por nombre de proceso");
      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listadoProcesos.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return 1;
          } else if (a.nombre > b.nombre) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listadoProcesos.sort((a, b) => {
          if (a.nombre > b.nombre) {
            return 1;
          } else if (a.nombre < b.nombre) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
    reloadTabla(listadoProcesos, idTipoProceso);
  });

  document
    .getElementById("input-buscador-informes")
    .addEventListener("input", (event) => {
      let filtro = event.target.value.toLowerCase();

      let filtrado = listadoProcesos.filter((formacion) => {
        return (
          formacion.id.toLowerCase().includes(filtro) ||
          formacion.nombre.toLowerCase().includes(filtro)
        );
      });

      reloadTabla(filtrado, idTipoProceso);

      //   llenarTablaInformesGenerales(filtrado);
      //   obtenerIdCohorteInformeGeneral(filtrado);
    });
};
