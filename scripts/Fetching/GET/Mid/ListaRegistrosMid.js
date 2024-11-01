const listaRegistrosMid = async (id_cohorte, id_modulo) => {
  console.log(id_cohorte, id_modulo);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const url = `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/registro.php?id_cohorte=${id_cohorte}${id_modulo === 0 ? "" : "&id_modulo=" + id_modulo}`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    // console.log(result);

    if (result.length !== 0) {
      return { existe: true, registradoCohorte: result };
    }
    //   return result;
    return { existe: false, registradoCohorte: [] };
  } catch (error) {
    console.error(error);
    return { existe: false, registradoCohorte: error };
  }
};

export default listaRegistrosMid;
