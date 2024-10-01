import notificacion from "../../funcionalidades/Notificacion.js";

const postNuevoFormulario = async (data) => {
  console.log(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let result = await fetch(
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/formulario.php",
      requestOptions
    );

    result = await result.json();
    if (result.estado === "ok") {
      notificacion(
        true,
        parseInt(data.tipo_formulario) === 1
          ? "Se creo un formulario de registro para la cohorte"
          : parseInt(data.tipo_formulario) === 2
          ? "Se creo un formulario de asistencias para la cohorte"
          : parseInt(data.tipo_formulario) === 3
          ? "Se creo un formulario de ponentes para la cohorte"
          : parseInt(data.tipo_formulario) === 4
          ? "Se creo un formulario de documentacion para la cohorte"
          : parseInt(data.tipo_formulario) === 5
          ? "Se creo un formulario de memorias para la cohorte"
          : ""
      );
    } else {
      notificacion(
        false,
        parseInt(data.tipo_formulario) === 1
          ? "No se creo un formulario para la cohorte"
          : parseInt(data.tipo_formulario) === 2
          ? "No se creo un formulario para la cohorte"
          : parseInt(data.tipo_formulario) === 3
          ? "No se creo un formulario para la cohorte"
          : parseInt(data.tipo_formulario) === 4
          ? "No se creo un formulario para la cohorte"
          : parseInt(data.tipo_formulario) === 5
          ? "No se creo un formulario para la cohorte"
          : ""
      );
    }
    return result;
  } catch (error) {
    notificacion(false, "Hubo un error al crear un formulario para la cohorte");
    console.error(error);
  }
};

export default postNuevoFormulario;
