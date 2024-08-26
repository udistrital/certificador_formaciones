const listaFormularios = async () => {
  let inscripcion = "formulario_registro.php",
    asistencia = "formulario_asistencia.php",
    ponente = "formulario_ponente.php",
    documentacion = "formulario_documentacion.php",
    memoria = "formulario_memoria.php";

  let data;

  if (window.location.pathname.includes("PageFormsInscripciones")) {
    data = await fetchingFormularios(inscripcion);
  } else if (window.location.pathname.includes("PageFormsPostulaciones")) {
    data = await fetchingFormularios(ponente);
  } else if (window.location.pathname.includes("PageFormsDocumentacion")) {
    data = await fetchingFormularios(documentacion);
  } else if (window.location.pathname.includes("PageFormsEvidencias")) {
    data = await fetchingFormularios(memoria);
  } else if (window.location.pathname.includes("PageFormsAsistencias")) {
    data = await fetchingFormularios(asistencia);
  }
  return data;
};

const fetchingFormularios = async (tipoFormulario) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/${tipoFormulario}`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default listaFormularios;
