import llenarTablaInformesGenerales from "./LlenarTablaInformesGenerales.js";
import { obtenerIdCohorteInformeGeneral } from "./ObtenerIdCohorteInformesGenerales.js";

export const ordenamientos = (listadoCohortes) => {
  let d = document;
  let orderBool = false;
  d.addEventListener("click", (e) => {
    // console.log(listadoCohortes);

    if (e.target === d.getElementById("index-sort-id")) {
      console.log("orden por id");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => b.id_cohorte - a.id_cohorte);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => a.id_cohorte - b.id_cohorte);
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-tipo")) {
      orderBool = !orderBool;
      console.log("Orden por tipo de proceso");
      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listadoCohortes.sort((a, b) => {
          if (a.nombre_tipo_proceso < b.nombre_tipo_proceso) {
            return 1;
          } else if (a.nombre_tipo_proceso > b.nombre_tipo_proceso) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listadoCohortes.sort((a, b) => {
          if (a.nombre_tipo_proceso > b.nombre_tipo_proceso) {
            return 1;
          } else if (a.nombre_tipo_proceso < b.nombre_tipo_proceso) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-nombre")) {
      orderBool = !orderBool;
      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listadoCohortes.sort((a, b) => {
          if (a.nombre_proceso < b.nombre_proceso) {
            return 1;
          } else if (a.nombre_proceso > b.nombre_proceso) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listadoCohortes.sort((a, b) => {
          if (a.nombre_proceso > b.nombre_proceso) {
            return 1;
          } else if (a.nombre_proceso < b.nombre_proceso) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-fechaInicial")) {
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => new Date(b.fecha_inicial_cohorte) - new Date(a.fecha_inicial_cohorte));
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => new Date(a.fecha_inicial_cohorte) - new Date(b.fecha_inicial_cohorte));
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-fechaFinal")) {
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => new Date(b.fecha_final_cohorte) - new Date(a.fecha_final_cohorte));
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => new Date(a.fecha_final_cohorte) - new Date(b.fecha_final_cohorte));
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-cohorte")) {
      console.log("orden por cohorte");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => b.cohorte - a.cohorte);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => a.cohorte - b.cohorte);
      }
      llenarTablaInformesGenerales(listadoCohortes);
    } else if (e.target === d.getElementById("index-sort-anio")) {
      console.log("orden por cohorte");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listadoCohortes.sort((a, b) => b.anio - a.anio);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listadoCohortes.sort((a, b) => a.anio - b.anio);
      }
      llenarTablaInformesGenerales(listadoCohortes);
    }
    // obtenerIdCohorteInformeGeneral(listadoCohortes);
  });
  document.getElementById("input-buscador-informes").addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    // console.log(filtro);
    //

    let filtrado = listadoCohortes.filter((formacion) => {
      // console.log(formacion);

      return (
        formacion.nombre_proceso.toLowerCase().includes(filtro) ||
        formacion.nombre_tipo_proceso.toLowerCase().includes(filtro) ||
        formacion.id_cohorte.toString().toLowerCase().includes(filtro) ||
        formacion.cohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anio.toString().toLowerCase().includes(filtro) ||
        formacion.fecha_final_cohorte.toString().toLowerCase().includes(filtro) ||
        formacion.fecha_inicial_cohorte.toString().toLowerCase().includes(filtro)
      );
    });
    llenarTablaInformesGenerales(filtrado);
    // obtenerIdCohorteInformeGeneral(filtrado);
  });
};
