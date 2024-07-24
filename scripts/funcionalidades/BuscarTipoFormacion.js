import asignarTipoFormacionAFormulario from "./AsignarTipoFormacionForm.js";

const buscarTipoFormacion = async (idTipoFormacion) => {
  await fetch(
    `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/tipo_proceso.php?id=${idTipoFormacion}`
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
      await asignarTipoFormacionAFormulario(data[0].id, data[0].nombre);
    })
    .catch((error) => {
      // Capturar y manejar cualquier error
      console.error("Error:", error);
    });
};

export default buscarTipoFormacion;
