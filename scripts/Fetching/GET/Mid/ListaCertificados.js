const listaCertificadosMid = async (id_cohorte, id_modulo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/certificado.php?id_cohorte=${id_cohorte}${id_modulo ? "&id_modulo=" + id_modulo : ""}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();
    if (result.length !== 0) {
      return { existe: true, noCertificados: result };
    }
    //   return result;
    return { existe: false, noCertificados: [] };
  } catch (error) {
    console.error(error);
    return { existe: false, noCertificados: error };
  }
};

export default listaCertificadosMid;
