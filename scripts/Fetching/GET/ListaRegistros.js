const listaRegistros = async (idCursante, idFormulario) => {
  console.log(idCursante, idFormulario);

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
    console.log(idCursante, idFormulario);

    console.log(result);

    let filtrado = await result.filter((registro) => {
      console.log(registro.cursante, registro.formulario, idCursante, idFormulario);

      return registro.cursante === "" + idCursante && registro.formulario === idFormulario;
    });

    console.log(filtrado);

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
