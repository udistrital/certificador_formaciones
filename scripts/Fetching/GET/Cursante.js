const validaCursante = async (dataCursante) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  if (dataCursante.terminos === "on") {
    try {
      const response = await fetch(
        `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cursante.php?tipoDocumento=${dataCursante.tipoDocumento}&numDocumento=${dataCursante.numDocumento}`,
        // `https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      //   return result;
      return false;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else {
    alert("Acepte los terminos y condiciones");
  }
};

export default validaCursante;
