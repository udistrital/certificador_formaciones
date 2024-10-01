const insertaRegistro = async (data) => {
  console.log(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let result = await fetch(
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/registro.php",
      requestOptions
    );

    result = await result.json();
    if ((await result.estado) === "ok") {
      console.log(result);
      return result;
      alert("Se registro exitosamente al curso");
      // window.location.href = "/";
    } else {
      console.log(result.estado);
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default insertaRegistro;
