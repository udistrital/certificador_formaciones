const fetchingAsistenciaById = async (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  console.log(id);

  try {
    let result = await fetch(`https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/asistencia.php?registro_ig=${id}`, requestOptions);
    result = await result.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchingAsistenciaById;
