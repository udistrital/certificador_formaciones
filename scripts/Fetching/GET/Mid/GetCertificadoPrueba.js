let getCertificadoPrueba = async (id_cohorte, id_modulo) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let data = {
    id_cohorte: id_cohorte,
  };

  id_modulo ? (data.id_modulo = id_modulo) : null;

  console.log(data);

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch("https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/generar_prueba.php", requestOptions);

    // Verificar si la respuesta HTTP es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Verificar si la respuesta es JSON antes de procesarla
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      console.log(result);

      return { certificado: result.certificado };
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return error;
  }
};

export default getCertificadoPrueba;

// getCertificadoPrueba(143);
