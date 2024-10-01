const listaAsistenciasCohorte = async (id_cohorte, id_proceso) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/asistencia.php?id_cohorte=${id_cohorte}&id_proceso=${id_proceso}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default listaAsistenciasCohorte;
