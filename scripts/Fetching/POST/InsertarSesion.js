import notificacion from "../../funcionalidades/Notificacion.js";

const postNuevaSesion = async (data) => {
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
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/sesion.php",
      requestOptions
    );

    result = await result.json();
    if (result.estado === "ok") {
      notificacion(true, "Se creo la sesion para la cohorte o modulo");
    } else {
      notificacion(false, "No se pudo crear la sesion para la cohorte o modulo");
    }
    return result;
  } catch (error) {
    console.error(error);
    notificacion(false, "Hubo un error al crear la sesion para la cohorte o modulo");
  }
};

export default postNuevaSesion;
