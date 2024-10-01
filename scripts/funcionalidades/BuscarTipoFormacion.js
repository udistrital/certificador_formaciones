import asignarTipoFormacionAFormulario from "./AsignarTipoFormacionForm.js";

const buscarTipoFormacion = async (idTipoFormacion) => {
  await fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/ruta_navegacion.php?id_tipo_proceso=${idTipoFormacion}`
  )
    .then((response) => {
      // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      // Parsear la respuesta como JSON
      return response.json();
    })
    .then(async (data) => {
      // Hacer algo con los datos recibidos
      console.log(data);
      await asignarTipoFormacionAFormulario(
        data.id_tipo_proceso,
        data.tipo_proceso
      );
    })
    .catch((error) => {
      // Capturar y manejar cualquier error
      console.error("Error:", error);
    });
};

export default buscarTipoFormacion;
