fetch("https://65e896cb4bb72f0a9c4fdadd.mockapi.io/api/user/1")
  .then((response) => {
    // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos recibidos
    console.log(data);
    sessionStorage.setItem("data", JSON.stringify(data))
  })
  .catch((error) => {
    // Capturar y manejar cualquier error
    console.error("Error:", error);
  });
