export const listaDependenciasTipoDependencias = async (idTipoDependecias) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let result = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/dependencia_tipo_dependencia.php?tipo_dependencia_ig=${idTipoDependecias}`,
      requestOptions
    );

    result = await result.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
