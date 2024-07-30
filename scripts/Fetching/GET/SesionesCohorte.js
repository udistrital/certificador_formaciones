const sesionesGET = async (idCohorteModelo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/sesion.php?idCohorte=${idCohorteModelo}`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    const listadoSesiones = result.filter((sesion) => {
      return sesion.cohorte === idCohorteModelo.toString();
    });
    return listadoSesiones;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default sesionesGET;
