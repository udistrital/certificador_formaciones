const listaRegistrosMid = async (id_cohorte, id_modulo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/registro.php?id_cohorte=${id_cohorte}${
        id_modulo ? "&id_modulo=" + id_modulo : ""
      }`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();

    console.log(result);

    if (result.length !== 0) {
      return { existe: true, registradoCohorte: result };
    }
    //   return result;
    return { existe: false, registradoCohorte: [] };
  } catch (error) {
    console.error(error);
    return { existe: false, registradoCohorte: error };
  }
};

export default listaRegistrosMid;
