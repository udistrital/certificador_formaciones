import llenarTablaModulos from "../../funcionalidades/Modulos/LlenarTablaModulos.js";

const listarModulos = async (nombreFormacion, tipoFormacion, idFormacion) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/modulo.php?idProceso=${idFormacion}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));

      let modulos = JSON.parse(result);
      if (modulos.length !== 0) {
        modulos = modulos.filter((modulo) => {
          return modulo.proceso === idFormacion.toString();
        });
      }

      llenarTablaModulos(modulos);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default listarModulos;
