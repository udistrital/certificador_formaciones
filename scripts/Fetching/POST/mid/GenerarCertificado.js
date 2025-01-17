import notificacion from "../../../funcionalidades/Notificacion.js";

let generar_certificado = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(data);

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  console.log(raw);

  await fetch("https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/generar_certificado.php", requestOptions)
    .then((response) => response.text())
    .then(async (result) => {
      result = JSON.parse(result);
      console.log(result);

      if (result.estado === "ok") {
        notificacion(true, "Se genero el certificado");
        setTimeout(() => {
          // window.location.reload();
        }, 1500);
      } else {
        notificacion(false, "Hubo un problema al generar el certificado");
      }
    })
    .catch((error) => {
      console.log("hubo errores: ", error);

      let noti = notificacion(false, "Hubo un error al generar el certificado");
      console.log(noti);

      if (error.estado == "error") {
      }
    });
};

export default generar_certificado;
