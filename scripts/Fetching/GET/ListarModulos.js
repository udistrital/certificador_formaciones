import llenarTablaModulos from "../../funcionalidades/Modulos/LlenarTablaModulos.js";
import { notificarNoRegistros } from "../../funcionalidades/NotificaNoExistenciaRegistros.js";

const listarModulos = async (id_proceso, id_cohorte) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/modulo.php?proceso_ig=${id_proceso}&id_cohorte=${id_cohorte}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));

      let modulos = JSON.parse(result);
      if (modulos.length !== 0) {
        modulos = modulos.filter((modulo) => {
          return modulo.proceso === id_proceso.toString();
        });
      }

      if (modulos.length !== 0) {
        llenarTablaModulos(modulos, id_cohorte);
      } else {
        notificarNoRegistros("No se encontraron modulos registrados");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default listarModulos;
