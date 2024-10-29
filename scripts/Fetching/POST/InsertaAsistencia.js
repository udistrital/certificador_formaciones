let insertaAsistencia = async (asistencia) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(asistencia);

  const raw = JSON.stringify(asistencia);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  console.log(asistencia);

  try {
    let result = await fetch("https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/asistencia.php", requestOptions);

    result = await result.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default insertaAsistencia;
