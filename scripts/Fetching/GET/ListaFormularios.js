const listaFormularios = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let result = await fetch("https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/tipo_formulario.php", requestOptions);

    result = await result.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default listaFormularios;
