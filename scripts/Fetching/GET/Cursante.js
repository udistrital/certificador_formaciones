const validaCursante = async (dataCursante) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cursante.php?tipoDocumento=${dataCursante.tipo_documento}&numDocumento=${dataCursante.numero_documento}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    let filtrado = await result.filter(
      (cursante) =>
        cursante.tipo_documento === dataCursante.tipo_documento &&
        cursante.numero_documento === dataCursante.numero_documento
    );

    if (filtrado.length === 1) {
      return { existe: true, cursante: filtrado[0] };
    }
    //   return result;
    return { existe: false, cursante: [] };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default validaCursante;
