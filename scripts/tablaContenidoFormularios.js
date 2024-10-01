// import { cusosCohortesGenerales } from "../models/informesGenerales.js";
import listaFormularios from "./Fetching/GET/ListarFormularios.js";
import llenarTablaPageFormularios from "./funcionalidades/Formularios/LlenaTablaPageFormularios.js";
import redireccionarFormulario from "./funcionalidades/Formularios/RedireccionarFormulario.js";

let listaInformesGenerales = [];
const listarGeneralesFetch = async () => {
  // Hacer algo con los datos recibidos
  listaInformesGenerales = await listaFormularios();
  console.log(listaInformesGenerales);
  llenarTablaPageFormularios(listaInformesGenerales);
  obtenerIdCohorte(listaInformesGenerales);
  ordenamientos(listaInformesGenerales);
};

listarGeneralesFetch();

let d = document;
const ordenamientos = () => {
  let orderBool = false;

  d.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === d.getElementById("index-sort-id")) {
      console.log("id");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => b.id - a.id);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort((a, b) => a.id - b.id);
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-tipo")) {
      console.log("tipo");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => {
          if (a.tipo < b.tipo) {
            return 1;
          } else if (a.tipo > b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listaInformesGenerales.sort((a, b) => {
          if (a.tipo > b.tipo) {
            return 1;
          } else if (a.tipo < b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-nombre")) {
      console.log("nombre");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => {
          if (a.nombreFormacion < b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion > b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listaInformesGenerales.sort((a, b) => {
          if (a.nombreFormacion > b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion < b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-fechaInicial")) {
      console.log("finicial");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort(
          (a, b) => b.fechaInicialCohorte - a.fechaInicialCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort(
          (a, b) => a.fechaInicialCohorte - b.fechaInicialCohorte
        );
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-fechaFinal")) {
      console.log("ffinal");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort(
          (a, b) => b.fechaFinalCohorte - a.fechaFinalCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort(
          (a, b) => a.fechaFinalCohorte - b.fechaFinalCohorte
        );
      }
      obtenerIdCohorte(listaInformesGenerales);
    }
  });
};

document
  .getElementById("input-buscador-informes")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = listaInformesGenerales.filter((formacion) => {
      return (
        formacion.nombre.toLowerCase().includes(filtro) ||
        formacion.tipo.toLowerCase().includes(filtro) ||
        formacion.id.toString().toLowerCase().includes(filtro) ||
        formacion.numCohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anio.toString().toLowerCase().includes(filtro)
      );
    });
    console.log(filtrado);
    obtenerIdCohorte(filtrado);
  });

const obtenerIdCohorte = (li) => {
  console.log(li);

  let listaAsistencias = d.querySelectorAll(".index-asistencias");
  let tipoRegistro = window.location.pathname.includes(`PageFormsPostulaciones`)
    ? "postulante"
    : window.location.pathname.includes(`PageFormsInscripciones`)
    ? "estudiante"
    : null;
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log(id, "id", li[id].id_formulario);
      let idCohorteModelo = li[id].id_cohorte,
        cohorte = li[id].cohorte,
        idProceso = li[id].id_proceso,
        nombreProceso = li[id].nombre_proceso,
        nombreTipoProceso = li[id].nombre_tipo_proceso,
        idTipoProceso = li[id].id_tipo_proceso,
        anio = li[id].anio,
        id_formulario = li[id].id_formulario;
      console.log(li[id]);

      redireccionarFormulario(
        idCohorteModelo,
        cohorte,
        idProceso,
        nombreProceso,
        nombreTipoProceso,
        idTipoProceso,
        anio,
        id_formulario,
        tipoRegistro
      );
      // redireccionarAsistencia(li[id].numCohorte, li[id].id);
    });
  });
};
