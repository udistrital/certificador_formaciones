const listaAsistenciasCohorte = async (id_cohorte, id_proceso, id_modulo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  console.log(id_cohorte, id_proceso, id_modulo);
  // console.log(id_modulo !== null ? "&id_modulo=" + id_modulo : "");
  let url = `https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/asistencia.php?id_cohorte=${id_cohorte}${id_modulo === null ? "" : "&id_modulo=" + id_modulo}&id_proceso=${id_proceso}`;
  // console.log(string);

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default listaAsistenciasCohorte;
