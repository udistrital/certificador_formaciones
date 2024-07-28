const postNuevoFormulario = async (data) => {
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
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/formulario.php",
      requestOptions
    )
      .then((response) => response.text())
      .then(async (result) => {
        console.log(JSON.parse(result));
        result = JSON.parse(result);
        if ((await result.estado) === "ok") {
          console.log(result);
        } else {
          console.log(result.estado);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  
  };
  
  export default postNuevoFormulario;
  