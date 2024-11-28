const cohorteById = async (idCohorte) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let result = await fetch(`https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php?id=${idCohorte}`, requestOptions);

    result = await result.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default cohorteById;
