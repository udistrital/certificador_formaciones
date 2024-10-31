const obtenerFormByHash = async (hash) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/formulario.php?hash_ig=${hash}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();

    console.log(result);

    if (result.length !== 0) {
      return { existe: true, formulario: result };
    }
    //   return result;
    return { existe: false, formulario: [] };
  } catch (error) {
    console.error(error);
    return { existe: false, formulario: error };
  }
};

export default obtenerFormByHash;
