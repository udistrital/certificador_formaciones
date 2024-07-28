const formulariosGET = async (idCohorteModelo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/formulario.php?idCohorte=${idCohorteModelo}`,
      requestOptions
    );
    const result = await response.json();
    const listaFormularios = result.filter((formulario) => {
      return formulario.cohorte === idCohorteModelo.toString();
    });
    return listaFormularios;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default formulariosGET;
