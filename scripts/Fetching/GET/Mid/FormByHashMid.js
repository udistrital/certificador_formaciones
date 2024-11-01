import notificacion from "../../../funcionalidades/Notificacion.js";
import obtenerFormByHash from "../FormByHash.js";

const obtenerFormByHashMid = async (hash) => {
  let formv1 = await obtenerFormByHash(hash);
  let tipoForm;

  console.log(formv1);
  if (formv1.existe === false) {
    // notificacion(false, "No se ecuentra informacion del formulario");
    return { existe: false, formulario: [] };
  } else {
    switch (formv1.formulario[0].tipo_formulario) {
      case "1":
        tipoForm = "formulario_registro";
        break;
      case "2":
        tipoForm = "formulario_asistencia";
        break;
      case "3":
        tipoForm = "formulario_ponente";
        break;
      case "4":
        tipoForm = "formulario_documentacion";
        break;
      case "5":
        tipoForm = "formulario_memoria";
        break;
    }

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/${tipoForm}.php?codigo=${hash}`,
        // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
        requestOptions
      );
      const result = await response.json();

      console.log(result);

      if (result.length !== 0) {
        return { existe: true, formulario: result };
      }
      //   return result;
      return { existe: false, formulario: [] };
    } catch (error) {
      console.error(error);
      return { existe: false, formulario: error };
    }
  }
};

export default obtenerFormByHashMid;
