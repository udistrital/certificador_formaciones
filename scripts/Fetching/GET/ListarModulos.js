import llenarTablaModulos from "../../funcionalidades/Modulos/LlenarTablaModulos.js";

const listarModulos = async (id_proceso, id_cohorte) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let result = await fetch(`https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/modulo.php?id_proceso=${id_proceso}&id_cohorte=${id_cohorte}`, requestOptions);

    result = await result.json();
    console.log("fdslfkjsdjkfkjfdsa");
    
    llenarTablaModulos(result, id_cohorte);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default listarModulos;
