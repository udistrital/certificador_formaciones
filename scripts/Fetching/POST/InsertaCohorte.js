import notificacion from "../../funcionalidades/Notificacion.js";

export const fetchNuevaCohorte = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data.cohorte);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let result = await fetch(
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php",
      requestOptions
    );

    result = await result.json();
    if (result.estado === "ok") {
      notificacion(true, "Se creo la cohorte");
    } else {
      notificacion(false, "No se pudo crear la cohorte");
    }
    return result;
  } catch (error) {
    console.error(error);
    notificacion(false, "Hubo un error al crear la cohorte");
  }
};
