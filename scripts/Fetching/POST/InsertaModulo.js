const postNuevoModulo = async (data) => {
  console.log(data);
  let estado = false;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/modulo.php",
    requestOptions
  )
    .then((response) => response.text())
    .then(async (result) => {
      console.log(JSON.parse(result));
      result = JSON.parse(result);
      if ((await result.estado) === "ok") {
        console.log("eeeeeeeeeeeee");
        estado = true;
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.estado == "error") {
        estado = false;
      }
    });
  console.log(estado);
  return estado;
};

export default postNuevoModulo;
