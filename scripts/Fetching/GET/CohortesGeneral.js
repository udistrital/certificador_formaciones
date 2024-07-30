import llenarTablaInformesGenerales from "../../funcionalidades/InformesGenerales/LlenarTablaInformesGenerales.js";

const cohortesGeneralesGET = async (idCohorteModelo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/cohorte.php`,
      requestOptions
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    // console.error(error);
    return [];
  }
};

export default cohortesGeneralesGET;
