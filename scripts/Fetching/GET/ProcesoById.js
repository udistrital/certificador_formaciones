const procesoById = async (id_proceso) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/proceso.php?id_proceso=${id_proceso}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();

    if (result.length !== 0) {
      return { existe: true, proceso: result };
    }
    //   return result;
    return { existe: false, proceso: [] };
  } catch (error) {
    console.error(error);
    return { existe: false, proceso: error };
  }
};

export default procesoById;
