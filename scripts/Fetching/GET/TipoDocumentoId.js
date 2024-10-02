const fetchingTipoDocumentoById = async (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let result = await fetch(
      `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/tipo_documento.php?id_ig=${id}`,
      requestOptions
    );
    result = await result.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchingTipoDocumentoById;
