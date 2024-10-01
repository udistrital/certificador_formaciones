let insertaCursante = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(data);

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

    try {
      let result = await fetch(
        "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cursante.php",
        requestOptions
      );

      result = await result.json();
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
};

export default insertaCursante;
