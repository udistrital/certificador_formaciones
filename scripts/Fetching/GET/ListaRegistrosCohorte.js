const listaRegistrosCohorte = async (id_cohorte, id_proceso, id_modulo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  console.log(id_cohorte, id_proceso, id_modulo);

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/registro.php?id_cohorte=${id_cohorte}&id_proceso=${id_proceso}${
        id_modulo !== null ? "&id_modulo=" + id_modulo : ""
      }`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default listaRegistrosCohorte;
