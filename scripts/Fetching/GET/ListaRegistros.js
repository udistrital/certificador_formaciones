const listaRegistros = async (idCursante, idFormulario) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/registro.php?id_cursante=${idCursante}&id_formulario=${idFormulario}`,
      // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
      requestOptions
    );
    const result = await response.json();

    let filtrado = await result.filter(
      (registro) =>
        registro.cursante === idCursante && registro.formulario === idFormulario
    );

    if (filtrado.length !== 0) {
      return { existe: true, registro: filtrado };
    }
    //   return result;
    return { existe: false, cursante: [] };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default listaRegistros;
